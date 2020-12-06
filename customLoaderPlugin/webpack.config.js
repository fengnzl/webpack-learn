const { resolve } = require('path');

module.exports = {
  entry: {
    mian: resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolveLoader: {
    modules: ['node_modules', resolve(__dirname, 'loaders')], // 设置寻找loader时除了node_modules文件夹中，还有loaders文件夹
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'customLoaders',
          {
            loader: 'customLoadersAsync',
            options: {
              replaceStr: 'recoveryMonster',
            }
          }
        ]
      }
    ]
  }
}