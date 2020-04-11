import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style'
import { Iconfont } from './statics/iconfont/iconfont'

ReactDOM.render(
  <Fragment>
    <App />
    <GlobalStyle />
    <Iconfont />
  </Fragment>,
  document.getElementById('root')
);
