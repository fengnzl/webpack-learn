const { dist, src, public: publicFolder } = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BaseConfig = {
  entry: {
    main: `${src}/index.js`
  },
  output: {
    path: dist,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 在引入文件的时候，首先匹配js后缀，其次寻找jsx后缀
    // minFiles: ['index'], // 如果直接引入文件夹，则会引入内部的index文件，默认设置，也可以设置其他文件，最好不要设置
    // alias: {
    //   pageAlias: `${src}/page` // 设置别名，如果引入pageAliasr则引入src/page文件夹
    // }
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: `${src}/index.html`,
      title: 'final configuration',
      filename: 'index.html', // output file
      favicon: `${src}/images/favicon.png`,
    }),
    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: publicFolder,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),
  ]
}

module.exports = BaseConfig;