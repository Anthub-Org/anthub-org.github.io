# --- Base (tools) ---
FROM node:20-alpine AS base
WORKDIR /app
# enable pnpm
RUN corepack enable

# --- Dependencies (cached by lockfile) ---
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
# prefetch deps to cache
RUN pnpm fetch

# --- Builder ---
FROM base AS build
COPY --from=deps /root/.local/share/pnpm/store /root/.local/share/pnpm/store
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --offline
# copy the rest of the project
COPY . .
# build Next.js (uses "build" script from package.json)
RUN pnpm build

# --- Runner (smallest) ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    PORT=3003 \
    HOSTNAME=0.0.0.0 \
    NEXT_TELEMETRY_DISABLED=1

# copy necessary files to run the built app
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY package.json pnpm-lock.yaml ./
# only install prod deps for runtime (if your app needs any at runtime)
RUN corepack enable && pnpm install --prod --frozen-lockfile

EXPOSE 3003
# use your "start" script and pass port/host
CMD ["pnpm", "start", "--", "-p", "3003", "-H", "0.0.0.0"]
