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
    chunkFilename: '[name].js'
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
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}