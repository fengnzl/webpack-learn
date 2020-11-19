function number () {
  const div = document.createElement('div');
  div.innerHTML = 4000;
  div.setAttribute('id', 'number');
  document.body.append(div);
}

export {
  number
}