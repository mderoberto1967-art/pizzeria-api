FROM node:20-slim

WORKDIR /app

RUN npm install -g pnpm

# Copia i file di configurazione
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY api/package.json ./api/
COPY api/prisma ./api/prisma/
COPY api/src ./api/src/
COPY api/tsconfig*.json ./api/
COPY api/nest-cli.json ./api/

# Installa le dipendenze
RUN pnpm install

# Genera Prisma client usando il workspace filter
RUN pnpm --filter @pizzeria/api exec prisma generate

# Build del backend usando il workspace filter
RUN pnpm --filter @pizzeria/api exec nest build

EXPOSE 3000

CMD ["sh", "-c", "pnpm --filter @pizzeria/api exec prisma migrate deploy && pnpm --filter @pizzeria/api exec node dist/main.js"]
