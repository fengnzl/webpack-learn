import './style.scss';
function createEle () {
  const ele = document.createElement('div');
  ele.innerHTML = 'hello webpack dev server';
  ele.classList.add('txt-wrapper');
  return ele;
}

document.querySelector('#app').append(createEle());