import axios from 'axios';
import { FETCH_ONE_COMPETENCE, saveCompetence } from 'src/actions/competences';

const competencesMiddleware = (store) => (next) => (action) => {
  // const { idCompetence } = store.getState().champions;
  // console.log(idCompetence);
  switch (action.type) {
    case FETCH_ONE_COMPETENCE:
      axios.get('https://backend.slipix-progresser-sur-league-of-legends.fr/competences/1')
        .then((response) => {
          console.log('passage dans la requête competence');
          store.dispatch(saveCompetence(response.data));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          // store.dispatch(setAppLoading());
        });
      break;

    default:
      next(action);
  }
};

export default competencesMiddleware;
