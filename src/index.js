document.addEventListener('click', () => {
  import(/* webpackPrefetch: true */'./appenEle').then(({ getEle }) => {
    getEle();
  })
  // import(/* webpackPreload: true */'./appenEle').then(({ getEle }) => {
  //   getEle();
  // })
})