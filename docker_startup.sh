#!/bin/bash

PKGDIR="/opt/mykb"
KBDIR="$PKGDIR/kb"
CONFDIR="$PKGDIR/config"

# check if kb volume exists and is empty and copy starter doc if it is
if [ -d "/kb" ] && [ -z "$(ls -A /kb)" ] && [ -f "/opt/mykb/kb/hello world.md" ];then
  cp "/opt/mykb/kb/hello world.md" /kb/
fi

if [ -d "/kb" ];then
  rm -rf /opt/mykb/kb
  ln -s /kb /opt/mykb/kb
  KBDIR="/kb"
fi

if [ -d "/config" ];then
  for i in $CONFDIR/*;do file=${i#/opt/mykb/config/}; if [ ! -f "/config/$file" ];then cp "$i" "/config/$file"; fi;done
  rm -rf $CONFDIR
  ln -s /config $CONFDIR
  CONFDIR="/config"
fi

# create home directory with full access that git can access
mkdir -p /home/mykb
chmod 0777 -R /home/mykb

cd /opt/mykb 

export NODE_ENV=production
export HOME=/home/mykb

if [ -z "$PUID" ];then
  echo 'no PUID set running as default user'
  node ./bin/genSecret.js && node ./src
else
  echo 'chowning files'
  DIRS=($KBDIR $CONFDIR)
  for dir in ${DIRS[@]};do chown "$PUID:$PGID" $dir;done
  chown "$PUID:$PGID" -R $CONFDIR
  s6-setuidgid "$PUID:$PGID" node ./bin/genSecret.js 
  s6-setuidgid "$PUID:$PGID" node ./src
fi
