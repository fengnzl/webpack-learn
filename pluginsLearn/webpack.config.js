// htmlWebpackPlugin 会在打包结束后，自动生成一个html文件，并把打包生成的js文件自动引入到这个html文件中
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = ({ mode } = { mode: 'development' }) => ({
  mode,
  devtool: 'none',
  entry: {
    main: resolve(__dirname, 'src/index'),// 键名默认表示打包对应的文件名
    sub: resolve(__dirname, 'src/index'), // 打包生成sub的文件名
  },
  output: {
    path: resolve(__dirname, 'dist'),
    // filename: 'bundle.js' // 如果多入口打包指定同一个打包名称,则只会打包出一个，webpack4版本会报错
    filename: '[name]_[hash:8].js',
    // publicPath: 'http://cdn.com.cn', // 设置静态资源配置目录前缀
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
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
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'), // 设置打包的html模版，在打包之后将打包文件注入到html文件中
    }),
    new CleanWebpackPlugin(), // 每次打包之前删除output.path指定的目录
  ]
})