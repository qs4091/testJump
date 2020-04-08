import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import store from './store/index.js';
import './App.css';
import Login from './components/login';
import Detail from './components/detail';


class App extends Component {
  render() {
    return (
      <Fragment>
       <Provider store = {store}>
        <HashRouter>
          <Route path='/'  exact component={Login}></Route>
          <Route path='/detail'  exact component={Detail}></Route>
        </HashRouter>
	     </Provider>
      </Fragment>
    );
  }
}

export default App;
