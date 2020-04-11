import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style'
import { Iconfont } from './statics/iconfont/iconfont'

ReactDOM.render(
  <div className="root">
    <App />
    <GlobalStyle />
    <Iconfont />
  </div>,
  document.getElementById('root')
);
