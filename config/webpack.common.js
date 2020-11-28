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
    filename: '[name].bundle.js',
    // chunkFilename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${paths.src}/index.html`,
      title: 'learn tree shaking',
      filename: 'index.html', // output file
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // 默认代码分割为async异步引入，all则是同步和异步都可以
      minSize: 20000,
      minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: false
      }
    }
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}