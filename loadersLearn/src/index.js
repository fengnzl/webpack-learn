import './style.css';

function component () {
  const ele = document.createElement('div');
  ele.innerHTML = 'learn webpack loaders';
  ele.classList.add('context');
  return ele;
}

document.body.appendChild(component());