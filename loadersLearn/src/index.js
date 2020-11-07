import './style.css';
import './header.scss';

function component () {
  const ele = document.createElement('div');
  ele.innerHTML = 'learn webpack loaders';
  ele.classList.add('context');
  return ele;
}

function Header () {
  const ele = document.createElement('header');
  ele.innerHTML = 'this is Header use scss style';
  ele.classList.add('header-content');
  return ele;
}

document.body.append(Header(), component());