FROM oven/bun:latest AS builder

COPY . /web
WORKDIR /web

RUN bun install --frozen-lockfile
RUN bun run build

FROM nginx:alpine AS landing

COPY --from=builder /web/apps/landing/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

FROM nginx:alpine AS viewer

COPY --from=builder /web/apps/viewer/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
