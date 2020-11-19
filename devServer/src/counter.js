function counter () {
  const div = document.createElement('div');
  div.innerHTML = 1;
  div.setAttribute('id', 'counter');
  div.onclick = function () {
    div.innerHTML++;
  }
  document.body.append(div);
}

export {
  counter
}