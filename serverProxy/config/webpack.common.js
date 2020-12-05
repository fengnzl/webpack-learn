const { dist, src } = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const BaseConfig = {
  entry: {
    main: `${src}/index.js`,
  },
  output: {
    path: dist,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      { test:/\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${src}/index.html`,
      title: 'learn server proxy configuration',
      filename: 'index.html', // output file
    }),
    new CleanWebpackPlugin({}),
    new webpack.ProgressPlugin(),
  ]
}

module.exports = BaseConfig;