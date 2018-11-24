#! /usr/bin/env node
const path = require('path')
const crypto = require('crypto')
const DB = require('../src/server/util/db')

const isDev = process.env.NODE_ENV !== 'production'
const configFile = (isDev ? 'default' : 'production') + '.json'
const configPath = path.join(__dirname, '../config', configFile)

const config = new DB(configPath)

config.loading
  .then(() => {
    const { secret } = config.data
    if (!isDev && secret && !process.argv.some(arg => arg === '-f')) {
      return console.log(
        'Secret already exists, not updating. Use -f to force update'
      )
    }

    config
      .setData({
        ...config.data,
        secret: crypto.randomBytes(256).toString('hex'),
      })
      .then(() => {
        console.log(
          `Authentication secret successfully updated in ${configPath}`
        )
      })
      .catch(err => console.error(err))
  })
  .catch(err => {
    console.error(err)
  })
