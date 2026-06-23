FROM node:20-slim

WORKDIR /app

RUN npm install -g pnpm

# Copia solo i file necessari
COPY package.json pnpm-lock.yaml ./
COPY api/package.json ./api/
COPY api/prisma ./api/prisma/
COPY api/src ./api/src/
COPY api/tsconfig*.json ./api/
COPY api/nest-cli.json ./api/

# Installa le dipendenze
RUN pnpm install

# Genera Prisma client
RUN cd api && pnpm exec prisma generate

# Build del backend
RUN cd api && pnpm exec nest build

EXPOSE 3000

CMD ["node", "api/dist/main.js"]
