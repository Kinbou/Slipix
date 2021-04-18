export const SET_APP_LOADING = 'SET_APP_LOADING';
export const SHOW_MENU = 'SHOW_MENU';
export const SHOW_MODAL = 'SHOW_MODAL';
export const SHOW_ALERT = 'SHOW_ALERT';

export const setAppLoading = (value) => ({
  type: SET_APP_LOADING,
  value,
});

// burger menu
export const showMenu = (name = '') => ({
  type: SHOW_MENU,
  name,
});

export const showModal = (name = '', params = {}) => ({
  type: SHOW_MODAL,
  name,
  params,
});

export const showAlert = (message = '', success = true) => ({
  type: SHOW_ALERT,
  message,
  success,
});
