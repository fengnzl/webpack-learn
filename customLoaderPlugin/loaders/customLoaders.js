// source 引入文件的所有内容
// 这里不用箭头函数是this指向问题
// 通过this.query 可以获取配置loader中的options参数
module.exports = function (source) {
  console.log(this.query);
  const { replaceStr } = this.query;
  return source.replace('Recovery', replaceStr);
}