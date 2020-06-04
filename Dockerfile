#stage1
FROM node:latest as node 
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2 
#FROM nginx:alpine
#COPY --from=node /app/dist/employee-app /usr/share/nginx/html

FROM tomcat:8.0-alpine
COPY --from=node /app/dist/employee-app /usr/local/tomcat/webapps/