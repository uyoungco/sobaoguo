import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Sub Layouts
// import BrowseUsersPage from '../pages/BrowseUsersPage'
import Setting from '../../components/setting'


const SettingSubLayout = ({ match }) => (
  <div>
    <Switch>
      <Route path={match.path} exact component={Setting} />
    </Switch>
  </div>
)

export default SettingSubLayout