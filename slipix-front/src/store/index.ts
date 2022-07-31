import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from '@/reducers/index'
import championsMiddleware from '@/middlewares/championsMiddleware'
import competencesMiddleware from '@/middlewares/competencesMiddleware'
import lanesMiddleware from '@/middlewares/lanesMiddleware'
import thanksMiddleware from '@/middlewares/thanksMiddleware'
import trollpicksMiddleware from '@/middlewares/trollpicksMiddleware'
import usersMiddleware from '@/middlewares/userMiddleware'
import newsMiddleware from '@middlewares/newsMiddleware'

// on combine plusieurs enhancers : devTools et chaque middleware
const enhancers = composeWithDevTools(
  applyMiddleware(
    championsMiddleware,
    competencesMiddleware,
    lanesMiddleware,
    thanksMiddleware,
    trollpicksMiddleware,
    usersMiddleware,
    newsMiddleware,
  ),
)

const store = createStore(
  reducer,
  enhancers,
)

export default store
