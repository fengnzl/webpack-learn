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
      title: 'learn tree shaking',
      filename: 'index.html', // output file
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // 默认代码分割为async异步引入，all则是同步和异步都可以，initial 只对同步起作用
      minSize: 20000, // 引入库的大小大于设置的值才会进行代码分割
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000, // 执行分割的大小阈值和忽略其他限制 (minRemainingSize、maxAsyncRequests、maxInitialRequests) 。
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          filename: 'vendor.js',
          // name: 'vendor', // 生成的名称为 vendor.bundle.js
        },
        // 默认配置,不满足上述test配置则使用默认
        default: {
          priority: -20,
          reuseExistingChunk: true,
          filename: 'common.js',
          // name: 'common', // 
        }
      }
    }
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}