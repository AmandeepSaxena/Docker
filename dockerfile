FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install


FROM nginx:alpine
WORKDIR /app
#COPY --from=node  /app/dist/customer-app usr/share/ngnix/html
COPY . .
EXPOSE 80
