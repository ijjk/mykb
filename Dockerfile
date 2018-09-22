FROM node:8-alpine

RUN apk add yarn git bash s6
RUN mkdir -p /opt/mykb

# install node_modules to tmp so it can be cached
RUN mkdir -p /tmp/mykb
COPY package.json /tmp/mykb
RUN cd /tmp/mykb && yarn
RUN mv /tmp/mykb/node_modules /opt/mykb/

COPY . /opt/mykb
RUN cd /opt/mykb && yarn build

COPY docker_startup.sh /mykb
RUN chmod +x /mykb

VOLUME /kb /db /config

EXPOSE 3030

ARG GIT_NAME=mykb
ARG GIT_EMAIL=mykb@localhost
ARG PUID
ARG PGID

CMD [ "/mykb" ]