const { dist, src, public } = require('./paths');
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
  modules: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: `${src}/index.html`,
      title: 'final configuration',
      filename: 'index.html', // output file
    }),
    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: public,
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