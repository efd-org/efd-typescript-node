FROM node:18-alpine AS builder
WORKDIR /app

# Install dev dependencies (typescript specified in package.json)
COPY package.json tsconfig.json ./
RUN npm install --include=dev --no-audit --no-fund

# Copy source and build (tsc will emit JS according to tsconfig.json)
COPY src ./src
RUN ./node_modules/.bin/tsc -p tsconfig.json

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only the runtime artifacts
COPY --from=builder /app/src ./src
COPY --from=builder /app/package.json ./package.json

# Install production dependencies if any
RUN npm install --omit=dev --production --no-audit --no-fund

# Use non-root user provided by the official Node image
USER node

EXPOSE 8080
CMD ["node", "src/index.js"]