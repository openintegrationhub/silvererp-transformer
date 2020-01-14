FROM node:10-alpine
LABEL NAME="silvererp-transformer"
LABEL MAINTAINER Alexander Link "al@yq-it.com"
LABEL SUMMARY="This image is used to start the SilvERP Transformer for OIH"

RUN apk --no-cache add \
    python \
    make \
    g++ \
    libc6-compat

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install --production

COPY . /usr/src/app

RUN chown -R node:node .

USER node

ENTRYPOINT ["npm", "start"]