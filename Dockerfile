FROM node

WORKDIR /app

COPY . /app

RUN npm i
    

EXPOSE 7100

RUN cat index.js
CMD node index.js


