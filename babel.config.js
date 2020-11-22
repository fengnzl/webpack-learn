module.exports = function (api) {
  api.cache(true);
  const presets = [
    [
      "@babel/preset-env",
      {
        targets: { // 指定浏览器版本
          edge: 17,
          firefox: 60,
          chrome: 67,
          safari: 11.1,
        },
        modules: false, //用来指定模块化方式，支持 AMD、UMD、SystemJS、CommonJS 等。推荐将 modules 设置为 false，即交由 Webpack 来处理模块化，通过其 TreeShaking 特性将有效减少打包出来的 JS 文件大小
        useBuiltIns: "usage", // 只引入使用的polyfill
      }
    ],
    "@babel/preset-react", // 从下网上 从右往左开始解析
  ]

  const plugins = [
  ]
  return {
    presets,
    plugins,
  }
}