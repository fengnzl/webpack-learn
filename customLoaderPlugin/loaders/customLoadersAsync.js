// 除了使用return 还可以使用this.callback 来返回同步或者异步结果，可以传递错误信息，结果，sourcemap和meta等相关信息
// this.async可以实现异步loader 返回this.callback

const loaderUtils = require('loader-utils');
module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  const callback = this.async();

  setTimeout(() => {
    const res = source.replace('Recovery', options.replaceStr);
    callback(null, res);
  }, 1000)
}