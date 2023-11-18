FROM node:17-alpine AS deps
COPY package.json ./
RUN npm install

FROM deps AS builder
COPY . .
RUN npm run build

FROM node:17-alpine AS runner
COPY --from=builder build ./build
RUN npm install -g pm2
EXPOSE 3000
ENTRYPOINT ["pm2", "serve", "build/", "3000", "--name", "wemakedevs", "--no-daemon", "--spa"]