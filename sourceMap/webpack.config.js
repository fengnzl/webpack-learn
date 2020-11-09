const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const { resolve } = require('path');

module.exports = ({ mode } = { mode: 'development' }) => {
  return {
    mode,
    // sourcemap 主要用于打包文件和源代码映射，便于定位错误
    // devtool: 'source-map', // 构建打包代码和源代码的映射文件.map，打包速度会慢
    // devtool: 'inline-source-map', // 将对应的.map文件变成base64的格式放置在打包文件的底部，错误代码精确哪行哪列
    // devtool: 'cheap-inline-source-map', // 错误代码只精确到哪行，不精确列，同时只针对业务代码，不对第三方库进行映射
    // devtool: 'cheap-module-source-map', // 与上述相比也会映射第三方库，建议正式环境使用
    // devtool: 'eval',// 打包速度性能快，在打包文件通过eval引用文件进行映射，但是可能错误提示不全
    // devtool: 'eval-cheap-module-source-map', // 兼具打包性能和错误提示，建议开发环境使用
    devtool: mode === 'development' ? 'eval-cheap-module-source-map' : 'cheap-module-source-map',
    entry: resolve(__dirname, 'src/index'),
    output: {
      path: resolve(__dirname, 'dist'),
      filename: '[name]_[hash:8].js'
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'src/index.html'),
      }),
    ]
  }
}