FROM node:20-slim

WORKDIR /app

RUN npm install -g pnpm

# Copia i file di configurazione
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/api/package.json ./apps/api/
COPY apps/api/prisma ./apps/api/prisma/
COPY apps/api/src ./apps/api/src/
COPY apps/api/tsconfig*.json ./apps/api/
COPY apps/api/nest-cli.json ./apps/api/

# Installa le dipendenze
RUN pnpm install

# Genera Prisma client usando il workspace filter
RUN pnpm --filter @pizzeria/api exec prisma generate

# Build del backend usando il workspace filter
RUN pnpm --filter @pizzeria/api exec nest build

EXPOSE 3000

CMD ["sh", "-c", "pnpm --filter @pizzeria/api exec prisma migrate deploy && pnpm --filter @pizzeria/api exec node dist/main.js"]
# Force rebuild 23/06/2026 22:11:35,46 
