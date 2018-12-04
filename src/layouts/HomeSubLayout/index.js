import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Sub Layouts
// import BrowseUsersPage from '../pages/BrowseUsersPage'
import Home from '../../components/home'
import ItemData from '../../components/itemData'

const HomeSubLayout = ({ match }) => (
  <Switch>
    <Route path={match.path} exact component={Home} />
    <Route path={`${match.path}/item_data`} component={ItemData} />
  </Switch>
)

export default HomeSubLayout