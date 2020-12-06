class CopyRightPlugin {
  constructor(options) {
    this.title = options.title;
  }
  apply (compiler) {
    compiler.hooks.compile.tap('CopyRightPlugin', (compilation) => {
      console.log('compile');
    })
  }
}


module.exports = CopyRightPlugin;