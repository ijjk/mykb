#!/bin/bash

if [ -d "/db" ];then
  rm -rf /opt/mykb/db
  ln -s /db /opt/mykb/db
fi

if [ -d "/kb" ];then
  rm -rf /opt/mykb/kb
  ln -s /kb /opt/mykb/kb
fi

if [ -d "/config" ];then
  for i in /opt/mykb/config/*;do file=${i#/opt/mykb/config/}; if [ ! -f "/config/$file" ];then cp "$i" "/config/$file"; fi;done
  rm -rf /opt/mykb/config
  ln -s /config /opt/mykb/config
fi

git config --global user.email "$GIT_EMAIL"
git config --global user.name "$GIT_NAME"

cd /opt/mykb 
echo $PWD
NODE_ENV=production node ./genSecret.js
yarn start