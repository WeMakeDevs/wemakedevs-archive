FROM node:16-alpine AS deps
COPY package.json ./
RUN npm install

FROM deps AS builder
COPY . .
RUN npm run build

FROM node:16-alpine AS runner
COPY --from=builder build ./build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]
