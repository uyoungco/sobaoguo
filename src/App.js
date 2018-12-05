import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom';

import store from './store'
import Login from './pages/login'
import Register from './pages/register'

import PrimaryLayout from './layouts/PrimaryLayout'
import AuthorizedRoute from './components/AuthorizedRoute'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
          <AuthorizedRoute path='/home' component={PrimaryLayout}></AuthorizedRoute>
          <Redirect to="/login" />
        </Switch>
      </Provider>
    );
  }
}

export default App;
