FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json .
RUN yarn
COPY . .

RUN yarn build

EXPOSE $PORT

CMD yarn start