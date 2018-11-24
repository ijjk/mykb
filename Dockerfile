FROM node:8-alpine

# install build stuff ( make python2 g++ ) for bcrypt since 
# alpine linux doesn't have pre-built bcrypt
RUN apk add git bash s6 make python2 g++
RUN mkdir -p /opt/mykb

# install node_modules to tmp so it can be cached
RUN mkdir -p /tmp/mykb
COPY package.json /tmp/mykb
RUN cd /tmp/mykb && npm install
RUN mv /tmp/mykb/node_modules /opt/mykb/

COPY . /opt/mykb
RUN cd /opt/mykb && npm run build
RUN cd /opt/mykb && npm prune --production
RUN npm cache clean --force

# remove packages from building bcrypt
RUN apk del make python2 g++

COPY docker_startup.sh /mykb
RUN chmod +x /mykb

VOLUME /kb /config

EXPOSE 3000

ARG GIT_NAME=mykb
ARG GIT_EMAIL=mykb@localhost
ARG PUID
ARG PGID

CMD [ "/mykb" ]