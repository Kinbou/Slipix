import {
  FETCH_USER,
  FETCH_REQUEST_USER_DATA,
  ERROR_LOGIN_USER,
  FETCH_USER_REGISTRATION_ERRORS,
} from 'src/actions/user';

const initialState = {
  user: null,
  errorLogin: null,
  errorsRegistration: null,
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

    case FETCH_USER_REGISTRATION_ERRORS:
      return {
        ...state,
        errorsRegistration: action.data,
      };

    case ERROR_LOGIN_USER:
      return {
        ...state,
        errorLogin: action.dataError,
      };

    default:
      return state;
  }
};

export default reducer;
