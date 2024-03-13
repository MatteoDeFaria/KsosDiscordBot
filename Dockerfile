FROM node:20.10.0-alpine

WORKDIR /app

COPY . /app

RUN npm install

CMD [ "npm", "run", "start" ]