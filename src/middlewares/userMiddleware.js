/* eslint-disable max-len */
import axios from 'axios';
import Cookie from 'universal-cookie';

import {
  LOGIN_USER,

  errorLoginUser,
  fetchUser,
  REQUEST_USER_AUTHENTIFICATION,
  requestUserAuthentification,
  fetchRequestUserData,
  FETCH_USER_REGISTRATION,
  fetchUserRegistrationErrors,
  LOGOUT_USER,
  UPDATE_USER,
  UPDATE_AVATAR_USER,
  FORGOT_PASSWORD_SEND_EMAIL,
} from 'src/actions/user';

import { showModal, showAlert, setAppLoading } from 'src/actions/global';

const userMiddleware = (store) => (next) => (action) => {
  // const { rememberMe, userData } = store.getState().user;
  const urlLocal = 'http://127.0.0.1:8000/';
  const urlBack = 'https://backend.slipix-progresser-sur-league-of-legends.fr/';
  switch (action.type) {
    // Connexion
    case LOGIN_USER: {
      axios({
        method: 'post',
        url: `${urlBack}api/auth/login`,
        withCredentials: true,
        data: {
          password: action.payload.passwordUser,
          email: action.payload.emailUser,
          checkedRemember: action.payload.checkedRememberUser || false,
          checkedCaptcha: action.payload.checkedCaptchaUser,
        },
        headers: {
          'Content-Type': 'application/json', Accept: 'application/json',
        },
      })
        .then((response) => {
          let date = new Date();
          new Cookie().set('token', response.data.access_token, {
            path: '/',
            expires: action.payload.checkedRememberUser ? new Date(date.setTime(date.getTime() + (response.data.expires_in * 60 * 1000))) : null,
            secure: true,
            httpOnly: false,
          });
          store.dispatch((fetchUser(response.data.user)));
          store.dispatch((showModal('')));
          store.dispatch((showAlert('Tu es bien connecté', true)));
        })
        .catch((error) => {
          store.dispatch(errorLoginUser(error.response.data));
          store.dispatch(showAlert('une erreur s\'est produite', false));
        });
      next(action);
      break;
    }

    // Savoir si on est connecté même après un refresh
    case REQUEST_USER_AUTHENTIFICATION: {
      const token = new Cookie().get('token');
      axios({
        method: 'get',
        url: `${urlBack}api/auth/user-profile`,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          store.dispatch(fetchRequestUserData(response.data));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          store.dispatch(setAppLoading(true));
        });
      next(action);
      break;
    }

    // Enregistrement
    case FETCH_USER_REGISTRATION: {
      axios({
        method: 'post',
        url: `${urlBack}api/auth/register`,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        data: action.data,
      })
        .then((response) => {
          store.dispatch((showAlert('Tu es bien enregistré, tu vas recevoir un mail afin de confirmer ton compte =)', true)));
          store.dispatch((showModal('')));
        })
        .catch((error) => {
          store.dispatch((showAlert(error.response.data.errors.email, false)));
          store.dispatch((fetchUserRegistrationErrors(error.response.data.errors)));
        });
      next(action);
      break;
    }

    // Déconnexion
    case LOGOUT_USER: {
      const token = new Cookie().get('token');
      axios({
        method: 'post',
        url: `${urlBack}api/auth/logout`,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => {
          new Cookie().remove('token');
          store.dispatch((fetchUser('')));
          store.dispatch((showAlert('Tu es bien déconnecté', true)));
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch((showAlert("Oups... une erreur s'est produite réessaye ou contact le support", false)));
        });
      next(action);
      break;
    }

    // Mettre à jour le profil
    case UPDATE_USER: {
      const token = new Cookie().get('token');
      axios({
        method: 'put',
        url: `${urlBack}api/auth/update-user`,
        withCredentials: true,
        data: action.userData,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => {
          store.dispatch(requestUserAuthentification());
          store.dispatch((showAlert('Tes modifications sont un succès', true)));
        })
        .catch((error) => {
          console.warn(error.response);
          store.dispatch((showAlert(error.response.data.message, false)));
        });
      next(action);
      break;
    }

    case UPDATE_AVATAR_USER: {
      const token = new Cookie().get('token');
      const file = new File([action.file.avatar], `avatar.${action.file.imgType.split('/')[1]}`, { type: action.file.imgType });
      const formData = new FormData();
      formData.append('avatar', file);
      axios.post(`${urlBack}api/auth/update-avatar`, formData, {
        method: 'put',
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => {
          store.dispatch(requestUserAuthentification());
          // store.dispatch((showAlert('Ton avatar a bien été modifié', true)));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

    case FORGOT_PASSWORD_SEND_EMAIL: {
      axios.post(`${urlBack}api/auth/password/email`, {
        method: 'post',
        withCredentials: true,
        email: action.email,
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
      })
        .then((response) => {
          store.dispatch(showModal(''));
          store.dispatch(showAlert(response.data.message, true));
        })
        .catch((error) => {
          store.dispatch(showAlert(error.response.data.message, false));
          console.warn(error);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default userMiddleware;
