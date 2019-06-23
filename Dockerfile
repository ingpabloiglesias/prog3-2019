FROM ubuntu:18.04

RUN apt-get update && apt-get install -y nodejs npm

RUN mkdir /srv/prog3-2019

COPY . /srv/prog3-2019/

WORKDIR /srv/prog3-2019

RUN npm install
RUN npm install nodemon -g

CMD nodemon src/server.js
