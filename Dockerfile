FROM alpine as node
RUN apk add --update nodejs npm
WORKDIR /app
COPY . .
#RUN npm install
RUN npm run prod

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/dm /usr/share/nginx/html
COPY --from=node /app/.nginx/nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
