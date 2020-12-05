const BaseConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const { dist } = require('./paths');
const webpack = require('webpack');

const DevConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 3000,
    hot: true,
    contentBase: dist,
    open: true,
    compress: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports = merge(BaseConfig, DevConfig);