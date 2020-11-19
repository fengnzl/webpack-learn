// 搭建服务器 需要安装node框架 koa 或者express
// 这里安装的是 express 和webpack-dev-middleware
// 不能实现mhr
const express = require('express');
const webpack = require('webpack');
const webpackMiddleWare = require('webpack-dev-middleware');
const BaseConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

const config = merge(BaseConfig, {
  mode: 'development'
})
const compiler = webpack(config);// 编译器编译基础webpack配置


const app = express();

app.use(
  webpackMiddleWare(compiler, {
    // webpack-dev-middleware options
    publicPath: BaseConfig.output.publicPath
  })
)

app.listen(3000, () => {
  console.log('server is running')
})
