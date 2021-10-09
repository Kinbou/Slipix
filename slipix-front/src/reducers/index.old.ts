import { combineReducers } from 'redux'
import usersReducer from './user'

const rootReducer = combineReducers({
  user: usersReducer
})

export default rootReducer
