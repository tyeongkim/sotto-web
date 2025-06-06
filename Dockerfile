FROM oven/bun:latest AS builder

COPY . /web
WORKDIR /web

RUN bun install --frozen-lockfile
RUN bun run build

FROM builder AS landing

WORKDIR /web/apps/landing

EXPOSE 3000

CMD ["bun", "run", "start"]

FROM nginx:alpine AS viewer

COPY --from=builder /web/apps/viewer/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
