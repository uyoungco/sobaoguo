import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Sub Layouts
// import BrowseUsersPage from '../pages/BrowseUsersPage'
import User from '../../components/user'


const UserSubLayout = ({ match }) => (
  <div className="user-sub-layout">
    <div className="primary-content">
      <Switch>
        <Route path={match.path} exact component={User} />
      </Switch>
    </div>
  </div>
)

export default UserSubLayout