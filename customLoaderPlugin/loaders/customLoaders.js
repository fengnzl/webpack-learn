// source 引入文件的所有内容
// 这里不用箭头函数是this指向问题
// 通过this.query 可以获取配置loader中的options参数
// 使用getOptions来获取配置的option参数, 此时需要安装loder-utils npm i loader-utils --save-dev 与this.query 不能同时使用
const loaderUtils = require('loader-utils');
module.exports = function (source) {
  console.log(loaderUtils.getOptions(this));
  // const options = loaderUtils.getOptions(this);
  // const { replaceStr } = this.query;
  // return source.replace('Recovery', options.replaceStr);
  this.callback(null, source.replace('recoveryMonster', 'World'))
}