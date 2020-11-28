document.addEventListener('click', () => {
  import('./appenEle').then(({ getEle }) => {
    getEle();
  })
})