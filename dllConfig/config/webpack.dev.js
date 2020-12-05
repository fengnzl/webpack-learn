const { merge } = require('webpack-merge');
const BaseConfig = require('./webpack.common');
const webpack = require('webpack');
const { dist } = require('./paths');

const DevConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    overlay: true, // 打包出现错误时在浏览器上显示错误
    port: 3000,
    hot: true,
    contentBase: dist,
    open: true,
    compress: true,
    historyApiFallback: true, // 单页应用路由设置，否则访问/list页面服务器会认为是从服务器获取，从而无法正常展示页面
    // historyApiFallback: { // 对路由进行精确转发设置
    //   rewrites: [
    //     { from: /\/\w/, to: '/index.html' },
    //   ]
  },
  // proxy: { // 转发接口请求
  //   '/api': {
  //     target: 'http://www.dell-lee.com',
  //     secure: false, // 可以访问https
  //     changeOrigin: true, // 避免有的网站设置origin
  //     pathRewrite: {
  //       'header.json': 'demo.json', // 改变请求的数据，主要用于开发环境的借口变化
  //     },
  //     headers: { // 设置请求时的header信息
  //       host: 'http://www.dell-lee.com',
  //       cookie: 'this is'
  //     }
  //   }
  // }
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(css|s(a|c)ss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            }
          },
          'sass-loader',
          'postcss-loader',
        ]
      },
    ]
  }
}

module.exports = merge(BaseConfig, DevConfig);