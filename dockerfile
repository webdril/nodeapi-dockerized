FROM node:12.13.0-alpine

# Create app directory

RUN mkdir -p /opt/app

WORKDIR /opt/app

#Install app dependencies

COPY package*.json ./


RUN npm install

RUN chown -R app /opt/app
# Bundle app source
COPY ..

EXPOSE 5500

CMD [ "node", "server.js" ]

