FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json /app

RUN npm i

COPY . .


RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=build ./app/.next ./.next
COPY --from=build ./app/package*.json ./
COPY --from=build ./app/public ./public

RUN npm i

EXPOSE 3000

CMD [ "npm", "run", "start" ]
