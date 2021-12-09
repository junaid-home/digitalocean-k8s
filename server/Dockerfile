FROM node:14-alpine3.12

RUN mkdir -p /app
WORKDIR /app

COPY ./package.json ./
RUN npm install

COPY ./ ./

CMD ["npm", "start"]