import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import NavLinkBar from '../../components/navlink'

import HomeSubLayout from '../HomeSubLayout'
import SettingSubLayout from '../SettingSubLayout'
import UserSubLayout from '../UserSubLayout'
import ItemData from '../../components/itemData'


const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <main>
      <Switch>
        <Route path={`${match.path}`} exact component={HomeSubLayout} />
        <Route path={`${match.path}/setting`} component={SettingSubLayout} />
        <Route path={`${match.path}/user`} component={UserSubLayout} />
        <Route path={`${match.path}/item_data`} component={ItemData} />
        <Redirect to={`${match.url}`} />
      </Switch>
    </main>
    <NavLinkBar />
  </div>
)

export default PrimaryLayout