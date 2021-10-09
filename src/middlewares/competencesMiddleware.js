import axios from 'axios';
import { FETCH_ONE_COMPETENCE, saveCompetence } from 'src/actions/competences';

import { apiBaseUrl as url } from './index';

const competencesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ONE_COMPETENCE:
      axios.get(`${url}/competences/1`)
        .then((response) => {
          store.dispatch(saveCompetence(response.data));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
        });
      break;

    default:
      next(action);
  }
};

export default competencesMiddleware;
