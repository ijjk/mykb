const { ANALYZE, BUILD, NODE_ENV } = process.env
let conf = {
  poweredByHeader: false,
}

if (ANALYZE) {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
  conf.webpack = function(config, { isServer }) {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: isServer ? 8888 : 8889,
        openAnalyzer: true,
      })
    )
    return config
  }
}

// Only add sass module when building or during dev
if (BUILD || NODE_ENV !== 'production') {
  const withSass = require('@zeit/next-sass')
  conf = withSass(conf)
}

module.exports = conf
