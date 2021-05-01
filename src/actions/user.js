/* eslint-disable max-len */
export const LOGIN_USER = 'LOGIN_USER';
export const ERROR_LOGIN_USER = 'ERROR_LOGIN_USER';
export const FETCH_USER = 'FETCH_USER';
export const REQUEST_USER_AUTHENTIFICATION = 'REQUEST_USER_AUTHENTIFICATION'; // vérifie si l'utilisateur est logé.
export const FETCH_REQUEST_USER_DATA = 'FETCH_REQUEST_USER_DATA';
export const FETCH_USER_REGISTRATION = 'FETCH_USER_REGISTRATION';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_AVATAR_USER = 'UPDATE_AVATAR_USER';
export const FORGOT_PASSWORD_SEND_EMAIL = 'FORGOT_PASSWORD_SEND_EMAIL';

export const loginUser = (emailUser, passwordUser, checkedRememberUser, checkedCaptchaUser) => ({
  type: LOGIN_USER,
  payload: {
    emailUser, passwordUser, checkedRememberUser, checkedCaptchaUser,
  },
});

export const errorLoginUser = (dataError) => ({
  type: ERROR_LOGIN_USER,
  dataError,
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

export const updateAvatarUser = (file) => ({
  type: UPDATE_AVATAR_USER,
  file,
});

export const forgotPasswordSendEmail = (email) => ({
  type: FORGOT_PASSWORD_SEND_EMAIL,
  email,
});
