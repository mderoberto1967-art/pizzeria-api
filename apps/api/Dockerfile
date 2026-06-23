# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Installa pnpm
RUN npm install -g pnpm

# Copia workspace root files
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY tsconfig.base.json ./
COPY packages ./packages

# Copia solo apps/api
COPY apps/api ./apps/api

# Installa dipendenze
RUN pnpm install --frozen-lockfile

# Genera Prisma client e builda
WORKDIR /app/apps/api
RUN pnpm prisma generate
RUN pnpm build

# Stage 2: Production runner
FROM node:20-alpine AS runner
WORKDIR /app

RUN npm install -g pnpm

# Copia workspace root
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY tsconfig.base.json ./
COPY packages ./packages
COPY apps/api/package.json ./apps/api/package.json
COPY apps/api/prisma ./apps/api/prisma

# Installa solo prod dependencies
RUN pnpm install --frozen-lockfile --prod

# Genera Prisma client nel runner
WORKDIR /app/apps/api
RUN pnpm prisma generate

# Copia il dist buildato
COPY --from=builder /app/apps/api/dist ./dist

# Crea directory per il DB
RUN mkdir -p ./prisma

EXPOSE 4000

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
