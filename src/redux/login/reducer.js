import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  pending: true,
  logged: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.GET_LOGGED_USER:
      return state.set('pending', false)
    case constants.SET_LOGGED_USER:
      return state.merge({
        pending: false,
        logged: action.logged
      })
    default:
      return state
  }
}