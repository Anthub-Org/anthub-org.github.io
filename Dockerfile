# --- Base (tools) ---
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat && corepack enable

# --- Dependencies (install using lockfile) ---
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
# exact install from lockfile (online, deterministic)
RUN pnpm install --frozen-lockfile

# --- Builder ---
FROM base AS build
# bring in node_modules from deps (keeps cache)
COPY --from=deps /app/node_modules ./node_modules
COPY package.json pnpm-lock.yaml ./
# copy app source
COPY . .
# build Next.js
RUN pnpm build
# keep only production deps for runtime to avoid re-installing later
RUN pnpm prune --prod

# --- Runner ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    PORT=3003 \
    HOSTNAME=0.0.0.0 \
    NEXT_TELEMETRY_DISABLED=1

# copy built app and prod deps
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "run", "start", "--", "-p", "3003", "-H", "0.0.0.0"]
