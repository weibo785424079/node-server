FROM node


RUN pwd \
    && npm i \
    && echo i am dockerfule
    

EXPOSE 7100


CMD node index.js


