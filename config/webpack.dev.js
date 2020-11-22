const BaseConfig = require('./webpack.common');
const paths = require('./paths');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(BaseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
