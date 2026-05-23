#!/usr/bin/env bash
set -euo pipefail

SOURCE_BRANCH="main"
SITE_BRANCH="site"
REMOTE="origin"
ALLOW_DIRTY="false"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --source-branch)
      SOURCE_BRANCH="${2:?Missing value for --source-branch}"
      shift 2
      ;;
    --site-branch)
      SITE_BRANCH="${2:?Missing value for --site-branch}"
      shift 2
      ;;
    --remote)
      REMOTE="${2:?Missing value for --remote}"
      shift 2
      ;;
    --allow-dirty)
      ALLOW_DIRTY="true"
      shift
      ;;
    -h|--help)
      cat <<'USAGE'
Usage: scripts/publish-site.sh [options]

Build and publish the static Next.js export to the site branch.

Options:
  --source-branch <name>  Source branch to publish from. Default: main
  --site-branch <name>    Publish branch. Default: site
  --remote <name>         Git remote to push to. Default: origin
  --allow-dirty           Allow publishing from a dirty working tree
  -h, --help              Show this help
USAGE
      exit 0
      ;;
    *)
      echo "Unknown option: $1" >&2
      exit 1
      ;;
  esac
done

run() {
  echo "> $*"
  "$@"
}

clear_worktree_content() {
  local path="$1"
  local resolved_path
  local leaf_name

  resolved_path="$(cd "$path" && pwd -P)"
  leaf_name="$(basename "$resolved_path")"

  if [[ "$leaf_name" != anthub-landing-site-* ]]; then
    echo "Refusing to clear unexpected worktree path: $resolved_path" >&2
    exit 1
  fi

  find "$resolved_path" -mindepth 1 -maxdepth 1 ! -name ".git" -exec rm -rf {} +
}

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

CURRENT_BRANCH="$(git branch --show-current)"
if [[ "$CURRENT_BRANCH" != "$SOURCE_BRANCH" ]]; then
  echo "Publish must be run from '$SOURCE_BRANCH'. Current branch is '$CURRENT_BRANCH'." >&2
  exit 1
fi

if [[ "$ALLOW_DIRTY" != "true" && -n "$(git status --porcelain)" ]]; then
  echo "Working tree is not clean. Commit or stash changes first, or rerun with --allow-dirty." >&2
  exit 1
fi

run pnpm build

OUT_PATH="$REPO_ROOT/out"
if [[ ! -f "$OUT_PATH/index.html" ]]; then
  echo "Build did not produce out/index.html." >&2
  exit 1
fi

SITE_WORKTREE="$(mktemp -d "${TMPDIR:-/tmp}/anthub-landing-site-XXXXXXXXXX")"

cleanup() {
  cd "$REPO_ROOT"
  if [[ -d "$SITE_WORKTREE" ]]; then
    git worktree remove --force "$SITE_WORKTREE" >/dev/null 2>&1 || rm -rf "$SITE_WORKTREE"
  fi
  run git switch "$SOURCE_BRANCH"
}
trap cleanup EXIT

LOCAL_BRANCH_EXISTS="false"
if git show-ref --verify --quiet "refs/heads/$SITE_BRANCH"; then
  LOCAL_BRANCH_EXISTS="true"
fi

REMOTE_BRANCH_EXISTS="false"
if [[ -n "$(git ls-remote --heads "$REMOTE" "$SITE_BRANCH")" ]]; then
  REMOTE_BRANCH_EXISTS="true"
fi

if [[ "$REMOTE_BRANCH_EXISTS" == "true" ]]; then
  if [[ "$LOCAL_BRANCH_EXISTS" == "true" ]]; then
    run git fetch "$REMOTE" "refs/heads/${SITE_BRANCH}:refs/remotes/${REMOTE}/${SITE_BRANCH}"
  else
    run git fetch "$REMOTE" "refs/heads/${SITE_BRANCH}:refs/heads/${SITE_BRANCH}"
    LOCAL_BRANCH_EXISTS="true"
  fi
fi

if [[ "$LOCAL_BRANCH_EXISTS" == "true" ]]; then
  run git worktree add "$SITE_WORKTREE" "$SITE_BRANCH"
  if [[ "$REMOTE_BRANCH_EXISTS" == "true" ]]; then
    run git -C "$SITE_WORKTREE" merge --ff-only "$REMOTE/$SITE_BRANCH"
  fi
else
  run git worktree add --detach "$SITE_WORKTREE" "$SOURCE_BRANCH"
  run git -C "$SITE_WORKTREE" switch --orphan "$SITE_BRANCH"
fi

clear_worktree_content "$SITE_WORKTREE"
cp -a "$OUT_PATH"/. "$SITE_WORKTREE"/

run git -C "$SITE_WORKTREE" add -A

if [[ -n "$(git -C "$SITE_WORKTREE" status --porcelain)" ]]; then
  TIMESTAMP="$(date '+%Y-%m-%d %H:%M:%S %z')"
  run git -C "$SITE_WORKTREE" commit -m "Publish static site $TIMESTAMP"
else
  echo "No site changes to commit."
fi

run git -C "$SITE_WORKTREE" push -u "$REMOTE" "$SITE_BRANCH"
