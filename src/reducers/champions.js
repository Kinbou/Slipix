import { SAVE_CHAMPION, STATE_NAME, SET_CHAMPION_IS_LOAD } from 'src/actions/champions';


const initialState = {
  champion: [],
  name: '',
  championIsLoad: false,
};

const championsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CHAMPION:
      return {
        ...state,
        champion: action.champion,
      };

    case STATE_NAME:
      return {
        ...state,
        name: action.name,
      };

    case SET_CHAMPION_IS_LOAD:
      return {
        ...state,
        championIsLoad: !state.championIsLoad,
      };

    default: return state;
  }
};

export default championsReducer;
