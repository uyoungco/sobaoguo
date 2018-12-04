import { combineReducers } from 'redux-immutable'

import { reducer as loginReducer } from '../redux/user'

const reducer =  combineReducers({
  login: loginReducer
})

export default reducer