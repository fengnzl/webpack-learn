const BaseConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(BaseConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
})
