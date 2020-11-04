import { combineReducers } from 'redux';
import globalReducer from './global';
import championsReducer from './champions';
import competencesReducer from './competences';
import lanesReducer from './lanes';
import thanksReducer from './thanks';
import trollpicksReducer from './trollpicks';


const rootReducer = combineReducers({
  global: globalReducer,
  champions: championsReducer,
  competences: competencesReducer,
  lanes: lanesReducer,
  thanks: thanksReducer,
  trollpicks: trollpicksReducer,
});

export default rootReducer;
