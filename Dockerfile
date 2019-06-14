FROM node:8
VOLUME /opt/src
WORKDIR /opt/src
EXPOSE 8080
CMD npm i;npm run local
