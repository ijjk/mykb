const basePath = new URL(location).searchParams.get('basePath')
const offlinePath = basePath + 'offline'

if (basePath !== '/') {
  const curBase =
    basePath.slice(-1) === '/'
      ? basePath.substr(0, basePath.length - 1)
      : basePath
  for (let item of self.precacheConfig) {
    item[0] = curBase + item[0]
  }
}

self.addEventListener('install', event => {
  var offlineRequest = new Request(offlinePath)
  event.waitUntil(
    fetch(offlineRequest).then(response => {
      return caches.open('offline').then(cache => {
        return cache.put(offlineRequest, response)
      })
    })
  )
})

self.addEventListener('fetch', event => {
  const { request } = event
  const { method, headers } = request
  if (method === 'GET' && headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(request).catch(err => {
        return caches.open('offline').then(cache => {
          return cache.match(offlinePath)
        })
      })
    )
  }
})
