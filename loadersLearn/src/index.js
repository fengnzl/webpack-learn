import './style.css';
import './header.scss';
import { createImage } from './image';
import Icon from './icon.jpg';
import { createIcon } from './font';
import Data from './data.xml';
import Notes from './data.csv';


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

  console.log(Data);
  console.log(Notes);


  return ele;
}

document.body.append(createIcon(), Header(), component(), createImage());