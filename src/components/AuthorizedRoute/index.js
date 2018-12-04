import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from '../../redux/login'

class AuthorizedRoute extends React.Component {

  componentWillMount() {
    this.props.getLoggedUsers()
  }

  render() {
    const { component: Component, pending, logged, ...rest } = this.props
    
    return (
      <Route {...rest} render={props => {
        if (pending) return <div>Loading...</div>
        return logged
          ? <Component {...props} />
          : <Redirect to="/login" />
      }} />
    )
  }
}

const mapToProps = state => ({
  pending: state.getIn(['login','pending']),
  logged: state.getIn(['login','logged'])
})
const mapToDispatch = dispatch => ({
  getLoggedUsers() {
    dispatch(actionCreators.getLoggedUser())
  }
})
export default connect(mapToProps, mapToDispatch)(AuthorizedRoute)
