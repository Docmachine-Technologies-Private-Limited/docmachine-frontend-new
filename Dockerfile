
## Use Node Slim image
FROM node:14-slim

## Copy source code
COPY . .
RUN ng build --configuration=production
RUN ng serve --configuration=production
## Start the application
#CMD ["node", "dist/angular-ssr-docker/server/main.js"]
EXPOSE 4200

#new commit
