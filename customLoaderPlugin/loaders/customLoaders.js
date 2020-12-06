// source 引入文件的所有内容
// 这里不用箭头函数是this指向问题
module.exports = function (source) {
  console.log(source);
  return source.replace('Recovery', 'RecoveryMonster');
}