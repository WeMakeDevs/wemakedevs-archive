FROM --platform=linux/amd64 node:16-alpine 
WORKDIR ./
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]