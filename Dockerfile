FROM node:bookworm AS builder
WORKDIR /home/node/app
COPY package.json pnpm-lock.yaml ./
RUN wget -qO- https://get.pnpm.io/install.sh | sh -
ENV PATH="$PATH:/root/.local/share/pnpm"
RUN pnpm install
COPY ./src ./src
COPY index.html postcss.config.js tsconfig.json uno.config.ts vite.config.ts ./
ENV SHELL=/usr/bin/bash
ENV NODE_ENV=production
RUN pnpm run build

FROM nginx:bookworm

COPY --from=builder /home/node/app/dist /usr/share/nginx/html
COPY nginx-front.conf /etc/nginx/conf.d/default.conf
