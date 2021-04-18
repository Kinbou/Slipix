import {
  SET_APP_LOADING,
  SHOW_MENU,
  SHOW_MODAL,
  SHOW_ALERT,
} from 'src/actions/global';

const initialState = {
  appIsLoad: false,
  showMenu: '',
  showModal: '',
  modalParams: {},
  showAlert: false,
  alertMessage: ' ',
  alertSuccess: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_APP_LOADING:
      return {
        ...state,
        appIsLoad: action.value,
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

    case SHOW_ALERT:
      return {
        ...state,
        alertMessage: action.message,
        alertSuccess: action.success,
        showAlert: !state.showAlert,
      };

    default:
      return state;
  }
};

export default reducer;
