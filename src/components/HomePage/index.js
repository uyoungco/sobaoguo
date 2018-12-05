import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ItemData from '../itemData'

const PageHome = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/itemdata`} exact component={ItemData} />
  </Switch>
)

export default PageHome