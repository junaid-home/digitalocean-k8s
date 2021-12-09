# building react project
FROM node:14-alpine3.12 as build-step

RUN mkdir -p /app
WORKDIR /app

COPY ./package.json ./
RUN npm install

COPY ./ ./
RUN npm run build

# using nginx as a web server to serve static build folder 
FROM nginx:latest

COPY ./nginx.default.conf /etc/nginx/conf.d/default.conf

COPY --from=build-step /app/build /usr/share/nginx/html