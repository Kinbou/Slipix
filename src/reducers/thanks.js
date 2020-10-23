import { SAVE_ALL_THANKS, SET_THANKS_IS_LOAD } from 'src/actions/thanks';


const initialState = {
  thanks: [],
  thanksIsLoad: false,
};

const thanksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ALL_THANKS:
      return {
        ...state,
        thanks: action.listThanks,
      };

    case SET_THANKS_IS_LOAD:
      return {
        ...state,
        thanksIsLoad: action.value,
      };

    default: return state;
  }
};

export default thanksReducer;
