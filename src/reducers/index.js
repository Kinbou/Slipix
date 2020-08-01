import { combineReducers } from 'redux';
import globalReducer from './global';
import championsReducer from './champions';
import competencesReducer from './competences';
import lanesReducer from './lanes';


const rootReducer = combineReducers({
  global: globalReducer,
  champions: championsReducer,
  competences: competencesReducer,
  lanes: lanesReducer,
});

export default rootReducer;
