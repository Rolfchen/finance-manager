FROM node:14.13.1-alpine

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY . /usr/src

# install yarn
RUN npm i -g yarn

# install depdencies
RUN yarn

# production build
RUN yarn build
EXPOSE 3000
CMD yarn start
