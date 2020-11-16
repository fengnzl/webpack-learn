const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = ({ mode } = { mode: 'development' }) => {
  return {
    mode,
    devtool: mode === 'development' ? 'eval-cheap-module-source-map' : 'cheap-module-source-map',
    entry: {
      main: resolve(__dirname, 'src/index')
    },
    output: {
      path: resolve(__dirname, 'dist'),
      filename: '[name]_[hash:8].js'
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
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'src/index.html')
      }),
      new webpack.ProgressPlugin(),
    ]
  }
}