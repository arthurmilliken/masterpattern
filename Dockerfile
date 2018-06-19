FROM arthurmilliken/node-dev
USER root
VOLUME /opt/src
WORKDIR /opt/src
EXPOSE 8080
CMD npm i;npm start
