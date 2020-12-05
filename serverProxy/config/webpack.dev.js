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
    proxy: {
      '/react/api': {
        target: 'http://www.dell-lee.com',
        secure: false, // 可以访问https
        changeOrigin: true, // 避免有的网站设置origin
        pathRewrite: {
          'header.json': 'demo.json', // 改变请求的数据，主要用于开发环境的借口变化
        },
        headers: { // 设置请求时的header信息
          host: 'http://www.dell-lee.com',
          cookie: 'this is'
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports = merge(BaseConfig, DevConfig);