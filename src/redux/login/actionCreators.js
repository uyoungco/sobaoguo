import * as constants from './constants'
import {
  fromJS
} from 'immutable'

export const getLoggedUser = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: constants.GET_LOGGED_USER
      })
    }, 500)
  }
}

export const login = () => {
  return dispatch => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch({
          type: constants.SET_LOGGED_USER,
          logged: true
        })
        resolve()
      }, 500)
    })
  }
}

export const logout = () => {
  return dispatch => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch({
          type: constants.SET_LOGGED_USER,
          logged: false
        })
        resolve()
      }, 500)
    })
  }
}