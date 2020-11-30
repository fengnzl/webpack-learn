const { resolve } = require('path');
module.exports = {
  mode: 'production',
  entry: resolve(__dirname, 'src'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: 'library', // 通过script标签进行引用，并使打包的变量挂在到全局的library变量
    // libraryTarget: 'umd', // 使打包的库文件可以通过commonjs,amd,等方式引入
    libraryTarget: 'this', // 如果不是umd，则不支持导入的形式，但是将library变量挂载到this变量上
  }
}