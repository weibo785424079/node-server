FROM docker.io/node

WORKDIR /app

COPY . /app

RUN npm i \
    node -v
    

EXPOSE 7100

RUN cat index.js
CMD node index.js


