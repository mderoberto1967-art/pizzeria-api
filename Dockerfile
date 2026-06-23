FROM node:20-slim

WORKDIR /app

# Installa pnpm e OpenSSL richiesto da Prisma
RUN npm install -g pnpm && apt-get update -y && apt-get install -y openssl

# Copia i file di configurazione del workspace
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copia i pacchetti condivisi
COPY packages ./packages/

# Copia il backend API
COPY apps/api/package.json ./apps/api/
COPY apps/api/prisma ./apps/api/prisma/
COPY apps/api/src ./apps/api/src/
COPY apps/api/tsconfig*.json ./apps/api/
COPY apps/api/nest-cli.json ./apps/api/

# Installa le dipendenze
RUN pnpm install

# Genera Prisma client
RUN cd apps/api && pnpm exec prisma generate

# Build del backend
RUN cd apps/api && pnpm exec nest build

EXPOSE 3000

CMD ["sh", "-c", "cd /app/apps/api && pnpm exec prisma migrate deploy && node dist/main.js"]
