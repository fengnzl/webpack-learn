import Bg from './bg.jpg';

export function createImage () {
  const img = new Image();
  img.src = Bg;
  return img;
}