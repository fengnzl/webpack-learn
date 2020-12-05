const { resolve } = require('path');

module.exports = {
  dll: resolve(__dirname, '../dll'),
  dist: resolve(__dirname, '../dist'),
  src: resolve(__dirname, '../src'),
  public: resolve(__dirname, '../public'),
}