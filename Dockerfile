FROM arthurmilliken/node-dev
USER dev
VOLUME /opt/src
WORKDIR /opt/src
EXPOSE 8080
CMD ["npm", "start"]
