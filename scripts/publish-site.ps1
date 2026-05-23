[CmdletBinding()]
param(
  [string]$SourceBranch = "main",
  [string]$SiteBranch = "site",
  [string]$Remote = "origin",
  [switch]$AllowDirty
)

$ErrorActionPreference = "Stop"

function Invoke-Checked {
  param(
    [Parameter(Mandatory = $true)]
    [string]$File,
    [Parameter(Mandatory = $true)]
    [string[]]$Arguments,
    [string]$WorkingDirectory = (Get-Location).Path
  )

  Write-Host "> $File $($Arguments -join ' ')"
  Push-Location $WorkingDirectory
  try {
    & $File @Arguments
    if ($LASTEXITCODE -ne 0) {
      throw "$File exited with code $LASTEXITCODE"
    }
  } finally {
    Pop-Location
  }
}

function Get-GitOutput {
  param(
    [Parameter(Mandatory = $true)]
    [string[]]$Arguments,
    [string]$WorkingDirectory = (Get-Location).Path
  )

  Push-Location $WorkingDirectory
  try {
    $output = & git @Arguments
    if ($LASTEXITCODE -ne 0) {
      throw "git $($Arguments -join ' ') exited with code $LASTEXITCODE"
    }
    return $output
  } finally {
    Pop-Location
  }
}

function Clear-WorktreeContent {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Path
  )

  $resolvedPath = (Resolve-Path -LiteralPath $Path).Path
  $leafName = Split-Path -Leaf $resolvedPath

  if (-not $leafName.StartsWith("anthub-landing-site-")) {
    throw "Refusing to clear unexpected worktree path: $resolvedPath"
  }

  Get-ChildItem -LiteralPath $resolvedPath -Force |
    Where-Object { $_.Name -ne ".git" } |
    Remove-Item -Recurse -Force
}

$repoRoot = (Get-GitOutput -Arguments @("rev-parse", "--show-toplevel") | Select-Object -First 1).Trim()
Set-Location $repoRoot

$currentBranch = (Get-GitOutput -Arguments @("branch", "--show-current") | Select-Object -First 1).Trim()
if ($currentBranch -ne $SourceBranch) {
  throw "Publish must be run from '$SourceBranch'. Current branch is '$currentBranch'."
}

if (-not $AllowDirty) {
  $dirtyFiles = Get-GitOutput -Arguments @("status", "--porcelain")
  if ($dirtyFiles) {
    throw "Working tree is not clean. Commit or stash changes first, or rerun with -AllowDirty."
  }
}

Invoke-Checked -File "pnpm" -Arguments @("build") -WorkingDirectory $repoRoot

$outPath = Join-Path $repoRoot "out"
if (-not (Test-Path -LiteralPath (Join-Path $outPath "index.html"))) {
  throw "Build did not produce out/index.html."
}

$siteWorktree = Join-Path ([System.IO.Path]::GetTempPath()) "anthub-landing-site-$([System.Guid]::NewGuid().ToString("N"))"

try {
  $localBranchExists = $false
  & git show-ref --verify --quiet "refs/heads/$SiteBranch"
  if ($LASTEXITCODE -eq 0) {
    $localBranchExists = $true
  }

  $remoteBranch = Get-GitOutput -Arguments @("ls-remote", "--heads", $Remote, $SiteBranch)
  $remoteBranchExists = [bool]$remoteBranch

  if ($remoteBranchExists) {
    if ($localBranchExists) {
      Invoke-Checked -File "git" -Arguments @("fetch", $Remote, "refs/heads/${SiteBranch}:refs/remotes/${Remote}/${SiteBranch}") -WorkingDirectory $repoRoot
    } else {
      Invoke-Checked -File "git" -Arguments @("fetch", $Remote, "refs/heads/${SiteBranch}:refs/heads/${SiteBranch}") -WorkingDirectory $repoRoot
      $localBranchExists = $true
    }
  }

  if ($localBranchExists) {
    Invoke-Checked -File "git" -Arguments @("worktree", "add", $siteWorktree, $SiteBranch) -WorkingDirectory $repoRoot
    if ($remoteBranchExists) {
      Invoke-Checked -File "git" -Arguments @("merge", "--ff-only", "$Remote/$SiteBranch") -WorkingDirectory $siteWorktree
    }
  } else {
    Invoke-Checked -File "git" -Arguments @("worktree", "add", "--detach", $siteWorktree, $SourceBranch) -WorkingDirectory $repoRoot
    Invoke-Checked -File "git" -Arguments @("switch", "--orphan", $SiteBranch) -WorkingDirectory $siteWorktree
  }

  Clear-WorktreeContent -Path $siteWorktree

  Get-ChildItem -LiteralPath $outPath -Force | ForEach-Object {
    Copy-Item -LiteralPath $_.FullName -Destination $siteWorktree -Recurse -Force
  }

  Invoke-Checked -File "git" -Arguments @("add", "-A") -WorkingDirectory $siteWorktree
  $siteChanges = Get-GitOutput -Arguments @("status", "--porcelain") -WorkingDirectory $siteWorktree

  if ($siteChanges) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss K"
    Invoke-Checked -File "git" -Arguments @("commit", "-m", "Publish static site $timestamp") -WorkingDirectory $siteWorktree
  } else {
    Write-Host "No site changes to commit."
  }

  Invoke-Checked -File "git" -Arguments @("push", "-u", $Remote, $SiteBranch) -WorkingDirectory $siteWorktree
} finally {
  Set-Location $repoRoot

  if (Test-Path -LiteralPath $siteWorktree) {
    & git worktree remove --force $siteWorktree 2>$null
    if (Test-Path -LiteralPath $siteWorktree) {
      Remove-Item -LiteralPath $siteWorktree -Recurse -Force
    }
  }

  Invoke-Checked -File "git" -Arguments @("switch", $SourceBranch) -WorkingDirectory $repoRoot
}
