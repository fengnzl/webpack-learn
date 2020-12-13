// 模拟模块打包器
const fs = require('fs');
const babelParser = require('@babel/parser');

const moduleAnalysers = (filename) => {
  const fileInfo = fs.readFileSync(filename, 'utf-8');
  // 将代码解析为AST语法树
  const astInfo = babelParser.parse(fileInfo, {
    sourceType: 'module'
  });
  console.log(astInfo.program.body)
}

moduleAnalysers('./src/index.js');