import './style.scss'


function createDiv () {
  const ele = document.createElement('div');
  ele.innerHTML = 'hello webpack plugins';
  ele.classList.add('context');
  return ele;
}

document.body.append(createDiv());