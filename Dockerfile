FROM node:13.8.0-alpine as app
WORKDIR /app
COPY . /app
RUN npm install && npm run build
ENV NODE_PRODUTION true
CMD npm run start-withsnapshot
