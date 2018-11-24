const path = require('path')
const fs = require('fs-extra')
const terser = require('terser')
const swPrecache = require('sw-precache')
const outputPath = path.resolve('public/sw.js')

async function main() {
  let sw = await fs.readFile(path.resolve('src/client/util/offlineFallback.js'))
  sw = sw.toString()

  sw += await swPrecache.generate({
    cacheId: 'mykb-cache',
    stripPrefixMulti: {
      [path.resolve('public/')]: '',
      [path.resolve('.next/static/')]: '/_next/static',
    },
    staticFileGlobs: ['public/!(sw.js)', '.next/static/**/*'].map(p =>
      path.resolve(p)
    ),
  })
  const precacheRegex = /var precacheConfig.*]];/
  const precacheConfig = sw.match(precacheRegex)
  sw = sw.replace(precacheRegex, '')
  sw = precacheConfig[0] + sw
  sw = terser.minify(sw).code

  await fs.outputFile(outputPath, sw)
}
main()
