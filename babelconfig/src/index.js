// import "@babel/polyfill";
// import "core-js/es/promise";
// import "core-js/es/array";
// import "regenerator-runtime/runtime";
const arr = [
  new Promise(() => { }),
  new Promise(() => { })
];

arr.map(item => console.log(item));