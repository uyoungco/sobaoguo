import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/login'
import Register from './pages/register'

import PrimaryLayout from './layouts/PrimaryLayout'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
          <Route component={PrimaryLayout}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
