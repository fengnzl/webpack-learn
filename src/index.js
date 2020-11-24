// import _ from 'lodash';

// console.log(_.join([1, 2, 3, 4], '***'));

function createComponent () {
  return import('lodash').then(({ default: _ }) => {
    const ele = document.createElement('div');
    ele.innerHTML = _.join(['a', 'b', 'c'], '**');
    return ele;
  })
}

createComponent().then(element => {
  document.body.append(element);
})