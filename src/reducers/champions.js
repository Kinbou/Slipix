import { SAVE_CHAMPION, STATE_NAME } from 'src/actions/champions';


const initialState = {
  champion: [],
  name: '',
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

    default: return state;
  }
};

export default championsReducer;
