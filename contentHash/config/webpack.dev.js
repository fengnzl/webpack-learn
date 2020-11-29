const webpack = require('webpack');
const paths = require('./paths');
const BaseConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

const DevConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.s[c|a]ss|css$/,
        use: [
          'style-loader',
          { 
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          'sass-loader',
        ]
      }
    ]
  },
  devServer: {
    contentBase: paths.dist,
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //减少不需要的信息展示
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = merge(BaseConfig, DevConfig);