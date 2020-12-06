//options是plugin配置传过来的参数
//compiler是webpack的实例，存储了我们webpack相关各种各样的配置文件，打包过程，等等一系列的内容。
//钩子， 指某个时刻会自动执行的函数。 如vue生命周期
//emit  当你把打包资源放到目标文件夹的时刻。它是一个异步的钩子。 可以在后面写一个tabAsync. 他有两个参数 第一个是插件名字，第二个是回调函数
//compile  同步的钩子， 后面跟tap， 箭头函数只传compilation
//compilation 和compiler不一样， 只存放这次打包的相关内容
//compilation.hooks.processAssets 添加打包生成的内容 https://github.com/webpack/webpack/issues/11425

const { Compilation, version, sources } = require("webpack");

class CopyRightPlugin {
  constructor(options = {}, failCallback) {
    this.content = options.content || 'this is copy right';
    this.failCallback = failCallback;
    this.isWebpack4 = version.split('.')[0] === '4';
  }

  apply (compiler) {
    compiler.hooks.compile.tap('CopyRightWebpackPlugin', (compilation) => {
      console.log('compile');
    })
    if (this.isWebpack4) {
      compiler.hooks.emit.tapAsync('CopyRightWebpackPlugin', (compilation, cb) => {
        const outerThis = this;
        compilation.assets['copyright.txt'] = {
          source () {
            return outerThis.content;
          },
          size () {
            return outerThis.content.length;
          }
        };
        cb();
      })
    } else {
      compiler.hooks.compilation.tap('CopyRightPlugin', (compilation) => {
        compilation.hooks.processAssets.tap(
          {
            name: 'CopyRightPlugin',
            stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
            addtionalAssets: true,
          },
          (asset) => {
            compilation.emitAsset('copyright5.txt', new sources.RawSource(this.content));
            console.log(asset);
          }
        );
      })
    }

    compiler.hooks.failed.tap('CopyRightPlugin', error => {
      if (this.failCallback) {
        this.failCallback(error);
      } else {
        throw new Error(error);
      }
    })
  }
}


module.exports = CopyRightPlugin;