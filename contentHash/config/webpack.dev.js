const webpack = require('webpack');
const paths = require('./paths');
const BaseConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

const DevConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    path: paths.dist,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: `${paths.src}/index.js`,
        use: [
          'babel-loader',
          'imports-loader?wrapper=window',
        ]

      },
      {
        test: /\.scss|css$/,
        use: [
          'style-loader',
          { 
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          'sass-loader',
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: paths.dist,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //减少不需要的信息展示
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({ 
      $: 'jquery',
      _join: ['lodash', 'join'],
    })
  ]
}

module.exports = merge(BaseConfig, DevConfig);