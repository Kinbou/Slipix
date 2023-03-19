import { combineReducers } from 'redux'

import globalReducer from './global'
import championsReducer from './champions'
import competencesReducer from './competences'
import lanesReducer from './lanes'
import thanksReducer from './thanks'
import trollpicksReducer from './trollpicks'
import usersReducer from './users'
import newsReducer from './news'

const rootReducer = combineReducers({
  global: globalReducer,
  champions: championsReducer,
  competences: competencesReducer,
  lanes: lanesReducer,
  thanks: thanksReducer,
  trollpicks: trollpicksReducer,
  users: usersReducer,
  news: newsReducer,
})

export default rootReducer
