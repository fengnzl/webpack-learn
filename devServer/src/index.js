// import './style.css'

// const content = document.createElement('div');
// content.innerHTML = 'this is webpack dev server'

// const app = document.querySelector('#app');
// app.append(content)

import { counter } from './counter';
import { number } from './number';

counter();
number();

// 监听变化，则重新调用  一般vue和css等进行模块文件更改之后无需监听就可变化，是因为相关loader或者babel-presets等做过相关处理
// 是否开启了hmr
if (module.hot) {
  // 监听文件的变化，然后调用函数
  module.hot.accept('./number', () => {
    // 移除number节点
    document.body.removeChild(document.querySelector('#number'));
    number();
  })
}

