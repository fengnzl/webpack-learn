const { merge } = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common');
const paths = require('./paths');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    historyApiFallback: true,
    contentBase: paths.dist,
    open: true,
    compress: true,
    hot: true,
    hotOnly: true, // 只有hmr生效，浏览器才刷新
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})