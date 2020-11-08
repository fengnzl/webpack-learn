import './iconfont.css';

export function createIcon () {
  const font = document.createElement('icon');
  font.classList.add('iconfont');
  font.classList.add('iconQQ');

  return font;
}