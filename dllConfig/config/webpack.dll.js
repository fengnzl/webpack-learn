const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    vendors: ['lodash']
  },
  output: {
    path: resolve(__dirname, '../dll'),
    filename: '[name].dll.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: resolve(__dirname, '../dll/[name].manifest.json'),
    })
  ]
}