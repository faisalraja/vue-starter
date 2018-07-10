const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.common.js');

module.exports = (env) => {
  const plugins = [];

  if (env.BUILD_NUMBER == '1') {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return merge(common, {
    mode: 'production',
    plugins,
    output: {
      publicPath: 'https://' + env.BUILD_NUMBER + '-your-cdn.host.here/dist/'
    }
  })
}