FROM mhart/alpine-node:6
RUN apk add --no-cache make gcc g++ python
VOLUME /opt/cert
VOLUME /opt/src
WORKDIR /opt/src
EXPOSE 8080
EXPOSE 8443
CMD npm i; npm start
