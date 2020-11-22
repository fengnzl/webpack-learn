const paths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: `${paths.src}/index`
  },
  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
    publicPath: '/', // 所有打包文件引用之间都加上根路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${paths.src}/index.html`,
      title: 'learn react config',
      filename: 'index.html', // output file
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}