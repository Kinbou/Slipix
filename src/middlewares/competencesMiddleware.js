import axios from 'axios';
import { FETCH_ONE_COMPETENCE, saveCompetence } from 'src/actions/competences';

const competencesMiddleware = (store) => (next) => (action) => {
  const url = 'https://backend.slipix-progresser-sur-league-of-legends.fr';
  // const urlLocal = 'http://localhost:8090';
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
