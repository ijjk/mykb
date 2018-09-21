/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const secret = crypto.randomBytes(256).toString('hex')
const isProd = process.env.NODE_ENV === 'production'
const confFile = (isProd ? 'production' : 'default') + '.json'
const config = require('./config/' + confFile)
const configPath = path.join(__dirname, 'config', confFile)

// if in production check if secret exists and -f switch is set
if (isProd && config.authentication && config.authentication.secret) {
  if (!process.argv.some(arg => arg === '-f')) {
    return console.log(
      'Secret already exists, not updating. Use -f to force update'
    )
  }
}

if (!config.authentication) {
  config.authentication = { secret }
} else {
  config.authentication.secret = secret
}
fs.writeFile(configPath, JSON.stringify(config, null, 2) + '\n', err => {
  if (err) return console.error(err)
  console.log('\nAuthentication secret successfully updated in', confFile)
})
