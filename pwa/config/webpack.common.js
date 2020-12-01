const webpack = require('webpack');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const BaseConfig = {
  entry: {
    main: `${paths.src}/index.js`,
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'learn pwa configuration',
      template: `${paths.src}/index.html`,
      filename: 'index.html', // output file
    }),
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          // 检测引入的库是否在node_modules中，这时就属于defaultVendors组
          //,这时打包的文件就会带有defaultVendors-node_moduls_引入组件名
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          filename: 'vendors.js', // 将引入的文件单独打包成vendor.js
        },
      }
    }
  },
}
module.exports = BaseConfig;