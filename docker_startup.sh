#!/bin/bash

PKGDIR="/opt/mykb"
DBDIR="$PKGDIR/db"
KBDIR="$PKGDIR/kb"
CONFDIR="$PKGDIR/config"

if [ -d "/db" ];then
  rm -rf $DBDIR
  ln -s /db $DBDIR
  DBDIR="/db"
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

cd /opt/mykb 
export NODE_ENV=production

if [ -z "$PUID" ];then
  echo 'no PUID set running as default user'
  node ./genSecret.js && node ./src
else
  echo 'chowning files'
  DIRS=($KBDIR $DBDIR $CONFDIR)
  for dir in ${DIRS[@]};do chown "$PUID:$PGID" $dir;done
  chown "$PUID:$PGID" -R $CONFDIR
  s6-setuidgid "$PUID:$PGID" node ./genSecret.js 
  s6-setuidgid "$PUID:$PGID" node ./src
fi