const { resolve } = require('path');
module.exports = {
  mode: 'production',
  entry: resolve(__dirname, 'src'),
  // 打包时所排出的文件
  // externals: {
  //   lodash: {
  //     commonjs: 'lodash', // 用户在使用当前库如果使用commonjs引入lodash则必须命名为lodash
  //     amd: 'lodash', // amd方式引入
  //     root: '_' // 通过script标签进行引入时，必须将lodash挂载到_变量上
  //   }
  // },
  externals: 'lodash',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: 'library', // 通过script标签进行引用，并使打包的变量挂在到全局的library变量
    // libraryTarget: 'umd', // 使打包的库文件可以通过commonjs,amd,等方式引入
    libraryTarget: 'this', // 如果不是umd，则不支持导入的形式，但是将library变量挂载到this变量上
  }
}