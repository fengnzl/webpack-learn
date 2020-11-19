const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const paths = require('./paths');
const webpack = require('webpack');

module.exports = {
  entry: [`${paths.src}/index.js`],

  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
    publicPath: '/', // 所有打包文件引用之间都加上根路径
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${paths.src}/index.html`,
      title: 'webpack dev server',
      filename: 'index.html', // output file
    }),
    new webpack.ProgressPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.scss|css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 2 }
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ]
      }
    ]
  }
}