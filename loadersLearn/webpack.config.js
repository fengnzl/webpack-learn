const { resolve } = require('path');

module.exports = ({ mode } = { mode: 'development' }) => {
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
          test: /\.(css|s[a|c]ss)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
            'postcss-loader',
          ]
        }
      ]
    }
  }
}