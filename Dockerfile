FROM node


RUN pwd \
    && npm i \
    && echo i am dockerfule
    

EXPOSE 80


CMD node index.js

