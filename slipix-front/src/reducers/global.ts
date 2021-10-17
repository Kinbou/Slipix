import {
  SET_APP_LOADING,
  SHOW_MENU,
  SHOW_MODAL,
  SHOW_ALERT
} from '@/actions/global'

const initialState = {
  appIsLoad: false,
  showMenu: '',
  showModal: '',
  modalParams: {},
  showAlert: false,
  alertMessage: ' ',
  alertSuccess: true
}

const reducer = (state = initialState, action = {}) => {
  // @ts-ignore
  switch (action.type) {
    case SET_APP_LOADING:
      return {
        ...state,
        // @ts-ignore
        appIsLoad: action.value
      }

    // Menu burger
    case SHOW_MENU:
      return {
        ...state,
        // @ts-ignore
        showMenu: action.name
      }

    case SHOW_MODAL:
      return {
        ...state,
        // @ts-ignore
        showModal: action.name,
        // @ts-ignore
        modalParams: action.params
      }

    case SHOW_ALERT:
      return {
        ...state,
        // @ts-ignore
        alertMessage: action.message,
        // @ts-ignore
        alertSuccess: action.success,
        showAlert: !state.showAlert
      }

    default:
      return state
  }
}

export default reducer
