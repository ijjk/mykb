const fs = require('fs')
const path = require('path')
const fetch = require('isomorphic-unfetch')
const ips = require('../../../config/trustIPs.json')
ips.push('loopback')

const cfv4 = 'https://www.cloudflare.com/ips-v4'
const cfv6 = 'https://www.cloudflare.com/ips-v6'
const cfConf = path.resolve('./config/cfIPs.json')
const refreshInterval = 24 * 60 * 60 * 1000

const getIps = str => {
  str = str.split('\n').map(ip => ip.trim())
  str = str.filter(ip => ip.length !== 0)
  return str
}

const getCfIps = async app => {
  const cfIps = []
  let res = await fetch(cfv4)
  if (res.ok) {
    cfIps.push(...getIps(await res.text()))
  }
  res = await fetch(cfv6)
  if (res.ok) {
    cfIps.push(...getIps(await res.text()))
  }
  fs.writeFile(cfConf, JSON.stringify(cfIps, null, 2), err => {
    if (err) console.error(err)
  })
  app.set('trust proxy', [...ips, ...cfIps])
}

module.exports = (app, cloudflare = false) => {
  if (!cloudflare) {
    return app.set('trust proxy', ips)
  }
  fs.readFile(cfConf, async (err, buff) => {
    if (err) {
      if (err.code === 'ENOENT') getCfIps(app)
      else return console.error(err)
    } else {
      const cfIps = JSON.parse(buff.toString())
      app.set('trust proxy', [...ips, ...cfIps])
    }
    setInterval(() => getCfIps(app), refreshInterval)
  })
}
