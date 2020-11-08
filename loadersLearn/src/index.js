import './style.css';
import './header.scss';
import { createImage } from './image';
import Icon from './icon.jpg';

function component () {
  const ele = document.createElement('div');
  ele.innerHTML = 'learn webpack loaders';
  ele.classList.add('context');

  const img = new Image();
  img.src = Icon;

  ele.appendChild(img);
  return ele;
}

function Header () {
  const ele = document.createElement('header');
  ele.innerHTML = 'this is Header use scss style';
  ele.classList.add('header-content');
  return ele;
}

document.body.append(Header(), component(), createImage());