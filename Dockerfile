FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --production

COPY . .

RUN yarn build

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# We add a non-root user to run the app for security reasons
RUN addgroup --system --gid 1001 app
RUN adduser --system --uid 1001 app
USER app

COPY --chown=app:app  --from=builder /app/public ./public
COPY --chown=app:app  --from=builder /app/package.json ./package.json
COPY --chown=app:app --from=builder /app/.next/standalone ./
COPY --chown=app:app --from=builder /app/.next/static ./.next/static


EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]


