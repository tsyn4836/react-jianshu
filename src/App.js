import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './common/header/'
import store from './store/'
import Home from './pages/home/index'
import Detail from './pages/detail/'
import Login from './pages/login';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
