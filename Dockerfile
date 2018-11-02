FROM node

WORKDIR /app

COPY . /app

RUN npm i
    

EXPOSE 7100


CMD node index.js


