const { resolve } = require('path');

module.exports = ({ mode } = { mode: 'production' }) => {
  return {
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
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
}