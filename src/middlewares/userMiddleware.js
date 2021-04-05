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
  LOGOUT_USER,
  UPDATE_USER,
  UPDATE_AVATAR_USER,

} from 'src/actions/user';

import { showModal } from 'src/actions/global';

const userMiddleware = (store) => (next) => (action) => {
  // const { rememberMe, userData } = store.getState().user;
  const urlLocal = 'http://127.0.0.1:8000/';
  // const urlBack = 'https://backend.slipix-progresser-sur-league-of-legends.fr/';
  switch (action.type) {
    // Connexion
    case LOGIN_USER: {
      console.log(action.payload);
      axios({
        method: 'post',
        url: `${urlLocal}api/auth/login`,
        withCredentials: true,
        data: {
          password: action.payload.passwordUser,
          email: action.payload.emailUser,
          checkedRemember: action.payload.checkedRememberUser || false,
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
        })
        .catch((error) => {
          store.dispatch(errorLoginUser(error.response.data));
        });
      next(action);
      break;
    }

    // Savoir si on est connecté même après un refresh
    case REQUEST_USER_AUTHENTIFICATION: {
      const token = new Cookie().get('token');
      axios({
        method: 'get',
        url: `${urlLocal}api/auth/user-profile`,
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
        });
      next(action);
      break;
    }

    // Enregistrement
    case FETCH_USER_REGISTRATION: {
      console.log(action.data, 'test');
      axios({
        method: 'post',
        url: `${urlLocal}api/auth/register`,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        data: action.data,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

    // Déconnexion
    case LOGOUT_USER: {
      const token = new Cookie().get('token');
      axios({
        method: 'post',
        url: `${urlLocal}api/auth/logout`,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          new Cookie().remove('token');
          store.dispatch((fetchUser('')));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

    // Mettre à jour le profil
    case UPDATE_USER: {
      const token = new Cookie().get('token');
      console.log(action);
      axios({
        method: 'put',
        url: `${urlLocal}api/auth/update-user`,
        withCredentials: true,
        data: action.userData,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => {
          console.log('passe en cas de succes');
          store.dispatch(requestUserAuthentification());
        })
        .catch((error) => {
          console.log('passe en cas d\'erreur');
          console.warn(error.response);
        });
      next(action);
      break;
    }

    case UPDATE_AVATAR_USER: {
      const token = new Cookie().get('token');
      const file = new File([action.file.avatar], `avatar.${action.file.imgType.split('/')[1]}`, { type: action.file.imgType });
      const formData = new FormData();
      formData.append('avatar', file);
      axios.post(`${urlLocal}api/auth/update-avatar`, formData, {
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
        })
        .catch((error) => {
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
