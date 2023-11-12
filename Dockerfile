FROM node:bookworm AS builder
COPY . /home/node/app
WORKDIR /home/node/app
ENV SHELL=/usr/bin/bash
RUN wget -qO- https://get.pnpm.io/install.sh | sh -
ENV PATH="$PATH:/root/.local/share/pnpm"
RUN pnpm install
ENV NODE_ENV=production
RUN pnpm run build

FROM nginx:bookworm

COPY --from=builder /home/node/app/dist /usr/share/nginx/html
COPY nginx-front.conf /etc/nginx/conf.d/default.conf
