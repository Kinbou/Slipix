export const LOGIN_USER = 'LOGIN_USER';
export const FETCH_USER = 'FETCH_USER';
export const REQUEST_USER_AUTHENTIFICATION = 'REQUEST_USER_AUTHENTIFICATION';
export const FETCH_REQUEST_USER_DATA = 'FETCH_REQUEST_USER_DATA';
export const FETCH_USER_REGISTRATION = 'FETCH_USER_REGISTRATION';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const loginUser = (emailUser, passwordUser) => ({
  type: LOGIN_USER,
  payload: { emailUser, passwordUser },
});

export const fetchUser = (user) => ({
  type: FETCH_USER,
  user,
});

export const requestUserAuthentification = () => ({
  type: REQUEST_USER_AUTHENTIFICATION,
});

export const fetchRequestUserData = (userData) => ({
  type: FETCH_REQUEST_USER_DATA,
  userData,
});

export const fetchUserRegistration = (data) => ({
  type: FETCH_USER_REGISTRATION,
  data,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const updateUser = (userData) => ({
  type: UPDATE_USER,
  userData,
});
