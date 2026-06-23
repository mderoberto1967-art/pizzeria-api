FROM node:20-slim

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY api/package.json ./api/

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm --filter @pizzeria/api exec prisma generate
RUN pnpm --filter @pizzeria/api build

EXPOSE 3000

CMD ["pnpm", "--filter", "@pizzeria/api", "start:prod"]
