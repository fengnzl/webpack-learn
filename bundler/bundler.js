// 模拟模块打包器
const fs = require('fs');
const babelParser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const path = require('path');
const babel = require('@babel/core');

const moduleAnalysers = (filename) => {
  const fileInfo = fs.readFileSync(filename, 'utf-8');
  // 将代码解析为AST语法树
  const astInfo = babelParser.parse(fileInfo, {
    sourceType: 'module'
  });
  // 收集入口文件的依赖模块
  const dependencies = {};
  traverse(astInfo, {
    // 遇到模块导入时的处理
    ImportDeclaration ({ node }) {
      // 相对与入口文件的引入模块路径 node.source.value
      // console.log(node.source.value);
      const importFilePath = node.source.value;
      // 获取入口文件所在文件夹名称
      const dirname = path.dirname(filename);
      // 获取引入模块相对打包文件的路径 由于windows环境下
      // path 解析出来时会造成应用层面的问题，因此需要使用path.sep获取当前系统的分隔符
      const newFile = './' + path.join(dirname, importFilePath);
      dependencies[importFilePath] = newFile.split(path.sep).join('/');
    }
  })
  // 将ast转换为浏览器可执行的代码
  const { code } = babel.transformFromAstSync(astInfo, null, {
    presets: ['@babel/preset-env']
  });

  return {
    filename,
    dependencies,
    code
  }
}

// 依赖图谱
const makeDependenciesGraph = (entry) => {
  const moduleInfo = moduleAnalysers(entry);
  const graphArray = [moduleInfo];
  for (let i = 0; i < graphArray.length; i++) {
    const { dependencies } = graphArray[i] || {};
    if (dependencies) {
      Object.values(dependencies).forEach((dependencyPath) => {
        graphArray.push(moduleAnalysers(dependencyPath));
      })
    }
  }
  const graph = {};
  graphArray.forEach(item => {
    const { dependencies, code, filename } = item;
    graph[filename] = { dependencies, code };
  })
  return graph;
}

const generateCode = (entry) => {
  const graph = JSON.stringify(makeDependenciesGraph(entry));
  // 返回一个闭包函数，避免污染全局变量
  return `
    (function(graph){
      function require(module) {
        // 当执行到依赖模块时，./message.js 要返回相对打包文件的执行
        function localRequire(relativePath) {
          return require(graph[module].dependencies[relativePath]);
        }
        const exports = {};
        (function evalCode(require, exports, code){
          // 执行代码
          eval(code);
        })(localRequire, exports, graph[module].code);
        return exports;
      }
      // 执行入口代码
      require('${entry}');
    })(${graph})
  `
}

const code = generateCode('./src/index.js');
eval(code);
