import { combineReducers } from 'redux';
import globalReducer from './global';
import championsReducer from './champions';
import competencesReducer from './competences';


const rootReducer = combineReducers({
  global: globalReducer,
  champions: championsReducer,
  competences: competencesReducer,
});

export default rootReducer;
