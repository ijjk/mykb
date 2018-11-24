const DB = require('./db')
const path = require('path')
const isDev = process.env.NODE_ENV !== 'production'

const configPath = file => path.join(__dirname, '../../../config', file)
const defaultPath = configPath('default.json')
const productionPath = configPath('production.json')

const defaultConfig = new DB(defaultPath)
const productionConfig = isDev
  ? { loading: Promise.resolve(), data: {} }
  : new DB(productionPath)

/**
 * @returns {Promise} - resolves with config when loaded
 */
function config() {
  return defaultConfig.loading
    .then(() => productionConfig.loading)
    .then(() => {
      return {
        ...defaultConfig.data,
        ...productionConfig.data,
        ssr: true,
        dev: isDev,
        setData: (isDev ? defaultConfig : productionConfig).setData,
      }
    })
}

module.exports = config()
