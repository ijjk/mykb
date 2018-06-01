/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const secret = crypto.randomBytes(256).toString('hex')
const { NODE_ENV } = process.env
let confFile = 'default.json'

if (NODE_ENV && NODE_ENV.toLowerCase() === 'production') {
  confFile = 'production.json'
}
let config = require('./config/' + confFile)
let configPath = path.join(__dirname, 'config', confFile)

if (!config.authentication) {
  config.authentication = { secret }
} else {
  config.authentication.secret = secret
}
fs.writeFile(configPath, JSON.stringify(config, null, 2) + '\n', err => {
  if (err) return console.error(err)
  console.log('\nAuthentication secret successfully updated in', confFile)
})
