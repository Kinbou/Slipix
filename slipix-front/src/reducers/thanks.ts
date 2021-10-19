import { SAVE_ALL_THANKS, SET_THANKS_IS_LOAD } from '@/actions/thanks';


const initialState = {
  thanks: [],
  thanksIsLoad: false,
};

const thanksReducer = (state = initialState, action = {}) => {
  // @ts-ignore
  switch (action.type) {
    case SAVE_ALL_THANKS:
      return {
        ...state,
        // @ts-ignore
        thanks: action.listThanks,
      };

    case SET_THANKS_IS_LOAD:
      return {
        ...state,
        // @ts-ignore
        thanksIsLoad: action.value,
      };

    default: return state;
  }
};

export default thanksReducer;
