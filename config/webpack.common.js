const paths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    // lodash: `${paths.src}/lodash`,
    main: `${paths.src}/index`,
  },
  output: {
    path: paths.dist,
    filename: '[name]_bundle.js',
    // chunkFilename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${paths.src}/index.html`,
      title: 'learn lazy loading',
      filename: 'index.html', // output file
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'async', // 默认代码分割为async异步引入，all则是同步和
    }
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}