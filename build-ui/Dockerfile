#syntax=docker/dockerfile:1


FROM node:20-alpine
WORKDIR /src/app

COPY ..
RUN yarn install

CMD ["node","./src/app/page.tsx"]
EXPOSE 3000
