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
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
              }
            },
            'sass-loader',
            'postcss-loader',
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg)/,
          use: {
            loader: 'url-loader',
            options: {
              name: '[name]_[hash:8].[ext]',
              outputPath: 'assets/',
              limit: 102400,
            }
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'url-loader',
          ],
        },
      ]
    }
  }
}