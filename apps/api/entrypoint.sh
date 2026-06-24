#!/bin/sh
set -e

cd /app/apps/api

echo " === Risto Galaxy API startup ==="
echo "NODE_ENV=${NODE_ENV}"
echo "PORT=${PORT}"
echo "DATABASE_URL is set: $(test -n "$DATABASE_URL" && echo yes || echo no)"

echo "Running Prisma migrations..."
pnpm exec prisma migrate deploy

echo "Starting NestJS application..."
exec node dist/main.js
