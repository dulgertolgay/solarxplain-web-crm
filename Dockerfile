# Build stage
FROM --platform=linux/amd64 node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Prune stage
FROM --platform=linux/amd64 node:18-alpine AS pruner
WORKDIR /app
COPY --from=builder /app .
RUN npm prune --production

# Final stage
FROM --platform=linux/amd64 node:18-alpine
WORKDIR /app
COPY --from=pruner /app .
EXPOSE 3000
CMD ["npm", "run", "start"]