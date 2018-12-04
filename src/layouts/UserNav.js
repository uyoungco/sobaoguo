import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const UserNav = ({ match }) => (
  <nav className="context-nav" style={{ marginBottom: '30px' }}>
    <NavLink to={`${match.path}`} exact activeClassName="active">home</NavLink>
    <NavLink to={`${match.path}/item_data`} activeClassName="active">item_data</NavLink>
  </nav>
)

export default withRouter(UserNav)