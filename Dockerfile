FROM node:23-alpine

workdir /app


COPY ./package.json .

RUN npm install

EXPOSE 3000

COPY . .

CMD [ "npm", "start" ]