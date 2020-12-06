const { resolve } = require('path');
const webpack = require('webpack');
const { dll } = require('./paths');

module.exports = {
  mode: 'production',
  entry: {
    vendors: ['lodash']
  },
  output: {
    path: dll,
    filename: '[name].dll.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: `${dll}/[name].manifest.json`,
    })
  ]
}