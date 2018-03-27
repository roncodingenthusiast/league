FROM node:8.9.1

LABEL maintainer RONALD EKAMBI <ronekambi@gmail.com>

WORKDIR /www/league-manager-pro
RUN apt-get update && apt-get install -y \
  vim
ADD package.json /www/league-manager-pro
RUN npm install
ADD . /www/league-manager-pro