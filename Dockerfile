
## Use Node Slim image
FROM node:14-slim

## Copy source code
COPY . .
RUN npm install --unsafe-perm
RUN npm run build-server-prod
## Start the application
#CMD ["node", "dist/angular-ssr-docker/server/main.js"]
EXPOSE 4200
