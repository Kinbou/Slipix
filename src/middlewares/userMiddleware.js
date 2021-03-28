import axios from 'axios';
import Cookie from 'universal-cookie';

import {
  LOGIN_USER,
  fetchUser,
  REQUEST_USER_AUTHENTIFICATION,
  fetchRequestUserData,
  FETCH_USER_REGISTRATION,
  LOGOUT_USER,
  UPDATE_USER,
} from 'src/actions/user';

import { showModal } from 'src/actions/global';

const userMiddleware = (store) => (next) => (action) => {
  // const { rememberMe, userData } = store.getState().user;
  const urlLocal = 'http://127.0.0.1:8000/';
  const urlBack = 'https://backend.slipix-progresser-sur-league-of-legends.fr/';
  switch (action.type) {
    case LOGIN_USER: {
      axios({
        method: 'post',
        url: `${urlLocal}api/auth/login`,
        withCredentials: true,
        data: {
          password: action.payload.passwordUser,
          email: action.payload.emailUser,
        },
        headers: {
          'Content-Type': 'application/json', Accept: 'application/json',
        },
      })
        .then((response) => {
          new Cookie().set('token', response.data.access_token, {
            path: '/',
            expires: new Date().getTime() + response.data.expires,
            secure: true,
            httpOnly: false,
          });
          store.dispatch((fetchUser(response.data.user)));
          store.dispatch((showModal('')));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

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
          store.dispatch((fetchUser('')));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

    case UPDATE_USER: {
      const token = new Cookie().get('token');
      console.log(action.payload);
      axios({
        method: 'put',
        url: `${urlLocal}api/auth/update-user`,
        withCredentials: true,
        // data: {
        //   password: action.payload.passwordUser,
        //   email: action.payload.emailUser,
        // },
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          store.dispatch((fetchUser('')));
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
