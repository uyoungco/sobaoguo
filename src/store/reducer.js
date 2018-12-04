import { combineReducers } from 'redux-immutable'

import { reducer as loginReducer } from '../redux/login'

const reducer =  combineReducers({
  login: loginReducer
})

export default reducer