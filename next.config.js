const withSass = require('@zeit/next-sass')
const { ANALYZE } = process.env
let AnalyzerPlugin
if (ANALYZE) {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
  AnalyzerPlugin = BundleAnalyzerPlugin
}
module.exports = withSass({
  poweredByHeader: false,
  webpack: function(config, { isServer }) {
    if (ANALYZE) {
      config.plugins.push(
        new AnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      )
    }
    return config
  },
})
