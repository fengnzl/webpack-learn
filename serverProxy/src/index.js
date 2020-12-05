import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import axios from 'axios';
import { Page } from 'pageAlias';
import { List } from './list';
import { BrowserRouter, Route } from 'react-router-dom';
 
class App extends Component {
  // 组件挂载之后调用此函数
  // componentDidMount () {
  //   axios.get('/react/api/header.json').then(function (res) {
  //     console.log(res);
  //   })
  // }
  render () {
    return (<BrowserRouter>
      <Route path="/" component={Page}></Route>
      <Route path="/List" component={List}></Route>
    </BrowserRouter>)
  }
}

ReactDom.render(<App></App>, document.getElementById('app'))