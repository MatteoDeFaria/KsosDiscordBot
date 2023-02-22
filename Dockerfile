FROM node:16.14.2-alpine

WORKDIR /app

COPY . /app

RUN npm install

CMD [ "npm", "run", "start" ]