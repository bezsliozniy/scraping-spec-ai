FROM node:20

RUN apt-get update && apt-get install -y \
    graphicsmagick \
    imagemagick \
    poppler-utils \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

ARG API_TOKEN
ARG OPEN_API_KEY
ARG OPEN_API_MODEL

ENV API_TOKEN=${API_TOKEN}
ENV OPEN_API_KEY=${OPEN_API_KEY}
ENV OPEN_API_MODEL=${OPEN_API_MODEL}

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

CMD ["yarn", "start:dev"]
