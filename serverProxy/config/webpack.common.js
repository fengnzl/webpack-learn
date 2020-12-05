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
  resolve: {
    extensions: ['.js', '.jsx'], // 在引入文件的时候，首先匹配js后缀，其次寻找jsx后缀
    // minFiles: ['index'], // 如果直接引入文件夹，则会引入内部的index文件，默认设置，也可以设置其他文件，最好不要设置
    alias: {
      pageAlias: `${src}/page` // 设置别名，如果引入pageAliasr则引入src/page文件夹
    }
  },
  module: {
    rules: [
      { test:/\.jsx?$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] },
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