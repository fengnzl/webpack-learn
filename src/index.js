import _ from 'lodash';

console.log(_.join([1, 2, 3, 4], '***'));


// async function createComponent () {
  // return import(/* webpackChunkName: "lodash" */'lodash').then(({ default: _ }) => {
  //   const ele = document.createElement('div');
  //   ele.innerHTML = _.join(['a', 'b', 'c'], '**');
  //   return ele;
  // })
//   const element = document.createElement('div');
//   const { default: _ } = await import(/* webpackChunkName: "lodash" */'lodash');
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   return element;
// }

// createComponent().then(element => {
//   document.body.append(element);
// })