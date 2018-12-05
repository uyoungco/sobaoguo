import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Sub Layouts
// import BrowseUsersPage from '../pages/BrowseUsersPage'
import Home from '../../components/home'
import ItemData from '../../components/itemData'

console.log('HomeSubLayout')
// const HomeSubLayout = ({ match }) => (
//   <Switch>
//     <Route path={match.path} exact component={Home} />
//     <Route path={`${match.path}/item/_data`} component={ItemData} />
//   </Switch>
// )


const HomeSubLayout = ({ match }) => (
  <div className="user-sub-layout">
    <div className="primary-content">
      <Switch>
        <Route path={match.path} exact component={Home} />
      </Switch>
    </div>
  </div>
)

export default HomeSubLayout