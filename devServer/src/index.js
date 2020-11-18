import './style.css'

const content = document.createElement('div');
content.innerHTML = 'this is webpack dev server'

const app = document.querySelector('#app');
app.append(content)
