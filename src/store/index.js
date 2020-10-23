import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import championsMiddleware from '../middlewares/championsMiddleware';
import competencesMiddleware from '../middlewares/competencesMiddleware';
import lanesMiddleware from '../middlewares/lanesMiddleware';
import thanksMiddleware from '../middlewares/thanksMiddleware';

// on combine plusieurs enhancers : devTools et chaque middleware
const enhancers = composeWithDevTools(
  applyMiddleware(
    championsMiddleware,
    competencesMiddleware,
    lanesMiddleware,
    thanksMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
