FROM node:16.14.2-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./src/"]

COPY . .

RUN npm install

CMD [ "node", "./src/index.js" ]