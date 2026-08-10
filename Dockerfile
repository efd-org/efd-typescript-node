FROM node:18-alpine AS builder

WORKDIR /app

# Copy package descriptor and tsconfig
COPY package.json tsconfig.json ./

# Install dependencies (including dev) and ensure Node types are present for tsc
RUN npm install --include=dev --no-audit --no-fund \
    && npm install --save-dev @types/node --no-audit --no-fund

# Copy source and build (tsc will emit JS according to tsconfig.json)
COPY src ./src
RUN ./node_modules/.bin/tsc -p tsconfig.json

FROM node:18-alpine AS runner

WORKDIR /app

# Copy runtime package.json if needed and built output
COPY package.json ./
COPY --from=builder /app/dist ./dist

CMD ["node", "dist/index.js"]