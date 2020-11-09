// htmlWebpackPlugin 会在打包结束后，自动生成一个html文件，并把打包生成的js文件自动引入到这个html文件中
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = ({ mode } = { mode: 'development' }) => ({
  mode,
  entry: {
    main: resolve(__dirname, 'src/index')
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'), // 设置打包的html模版，在打包之后将打包文件注入到html文件中
    })
  ]
})