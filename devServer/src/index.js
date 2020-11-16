import './style.scss';
import printMe from './print.js';

function component () {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = 'hello webpack dev server';
  element.classList.add('txt-wrapper')

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.querySelector('#app').appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}