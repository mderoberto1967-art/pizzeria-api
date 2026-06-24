FROM node:20-slim

WORKDIR /app

# Installa pnpm, OpenSSL e tool base per il seeding
RUN npm install -g pnpm && \
    apt-get update -y && \
    apt-get install -y openssl && \
    rm -rf /var/lib/apt/lists/*

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
COPY apps/api/entrypoint.sh ./apps/api/
RUN chmod +x ./apps/api/entrypoint.sh

# Installa le dipendenze
RUN pnpm install

# Genera Prisma client
RUN cd /app/apps/api && pnpm exec prisma generate

# Build del backend
RUN cd /app/apps/api && pnpm exec nest build

EXPOSE 3000

# TEMP: mantieni il container aperto per debug
CMD ["/bin/sh", "-c", "cd /app/apps/api && (pnpm exec prisma migrate deploy || true) && (node dist/main.js &) && tail -f /dev/null"]
