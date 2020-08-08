import {
  SET_APP_LOADING,
  SHOW_MENU,
  SHOW_MODAL,

} from 'src/actions/global';

const initialState = {
  // redirectTo: '',
  appIsLoading: false,
  showMenu: '',
  showModal: '',
  modalParams: {},
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
        appIsLoading: action.value,
      };

    // Menu burger
    case SHOW_MENU:
      return {
        ...state,
        showMenu: action.name,
      };

    case SHOW_MODAL:
      return {
        ...state,
        showModal: action.name,
        modalParams: action.params,
      };

    default:
      return state;
  }
};

export default reducer;
