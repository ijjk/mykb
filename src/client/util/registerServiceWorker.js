import addBase from '../../util/addBase'
import config from '../../util/pubConfig'
;(function() {
  if (!config.dev && !config.ssr && 'serviceWorker' in navigator) {
    const basePath = encodeURIComponent(addBase('/'))
    navigator.serviceWorker.register(addBase(`sw.js?basePath=${basePath}`))
  }
})()
