import './style.scss';
function createEle () {
  const ele = document.createElement('div');
  ele.innerHTML = `hello webpack dev server it's lf`;
  ele.classList.add('txt-wrapper');
  return ele;
}
console.log('hello world adas')

document.querySelector('#app').append(createEle());