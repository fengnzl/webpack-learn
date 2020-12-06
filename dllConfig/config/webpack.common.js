const { dist, src } = require('./paths');
const { plugins, generateHtmlPlugins } = require('./webpack.common.plugins');

const BaseConfig = {
  entry: {
    main: `${src}/index.js`,
    list: `${src}/list.js`,
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
}

BaseConfig.plugins = [...plugins, ...generateHtmlPlugins(BaseConfig)];

module.exports = BaseConfig;