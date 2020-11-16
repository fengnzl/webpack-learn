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
      filename: '[name].js'
    },
    // 在监听文件变化的基础上自动打开浏览器并刷新页面
    devServer: {
      contentBase: resolve(__dirname, 'dist/index.html'),
      disableHostCheck: true, // true：不进行host检查
      port: 1100, // 默认打开端口号
      open: true, // 自动打开服务
      hot: true,
      inline: true, // 可以监控js变化
      watchContentBase: true // contentBase下文件变动将reload页面(默认false)
      // proxy: { // 请求代理
      //   context: () => true,
      //   target: 'http://localhost:1234'
      // }
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
      // new CleanWebpackPlugin({
      //   cleanStaleWebpackAssets: false, // 不清除打包中的index.html 文件 
      // }),
      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'src/index.html')
      }),
      new webpack.ProgressPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    
  }
}