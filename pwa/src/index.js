console.log('hello world');

if ('serviceWorker' in navigator) {
  // 页面加载之后注册serviceWork
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => console.log('service-worker registered', registration))
      .catch(err => console.log('error registering', err));
  })
}