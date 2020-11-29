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
      title: 'learn cacheing',
      template: `${paths.src}/index.html`,
      filename: 'index.html', // output file
    }),
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
  ],
  optimization: {
    usedExports: true,
  },
}
module.exports = BaseConfig;