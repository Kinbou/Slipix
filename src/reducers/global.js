import {
  SET_APP_LOADING,

} from 'src/actions/global';

const initialState = {
  // redirectTo: '',
  appIsLoading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // case SET_IS_ERROR:
    //   return {
    //     ...state,
    //     isError: !state.isError,
    //   };

    // case REDIRECT_TO:
    //   return {
    //     ...state,
    //     redirectTo: action.url,
    //   };

    case SET_APP_LOADING:
      return {
        ...state,
        appIsLoading: !state.appIsLoading,
      };


    default:
      return state;
  }
};

export default reducer;
