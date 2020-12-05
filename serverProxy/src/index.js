import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class App extends Component {
  // 组件挂载之后调用此函数
  componentDidMount () {
    axios.get('/react/api/header.json').then(function (res) {
      console.log(res);
    })
  }
  render () {
    return <div>Hello World</div>
  }
}

ReactDom.render(<App></App>, document.getElementById('app'))