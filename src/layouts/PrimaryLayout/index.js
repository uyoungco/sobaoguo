import React from 'react';
import { Switch, Route } from 'react-router-dom'

import NavLinkBar from '../../components/navlink'

import HomeSubLayout from '../HomeSubLayout'
import SettingSubLayout from '../SettingSubLayout'
import UserSubLayout from '../UserSubLayout'



class PrimaryLayout extends React.Component {
  render() {

    return(
      <div>
        <div style={{ marginTop: 10 }}>
          <Switch>
            <Route path='/home' exact component={HomeSubLayout} />
            <Route path='/setting' component={SettingSubLayout} />
            <Route path='/user' component={UserSubLayout} />
          </Switch>
         
        </div>
        <NavLinkBar></NavLinkBar>
      </div>
    )
  }
}

export default PrimaryLayout