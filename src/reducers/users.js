import {
  FETCH_USER,
  FETCH_REQUEST_USER_DATA,
} from 'src/actions/user';

const initialState = {
  user: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.user,
      };

    case FETCH_REQUEST_USER_DATA:
      return {
        ...state,
        user: action.userData,
      };

    default:
      return state;
  }
};

export default reducer;
