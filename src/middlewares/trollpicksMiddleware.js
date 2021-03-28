import axios from 'axios';
import {
  FETCH_ONE_TROLLPICK,
  FETCH_TROLLPICK_ACTIF,
  FETCH_TROLLPICK_SOON,
  saveTrollpick,
  saveTrollpickActif,
  saveTrollpickSoon,
  setTrollpickActifIsLoad,
  setTrollpickSoonIsLoad,
} from 'src/actions/trollpicks';

const championsMiddleware = (store) => (next) => (action) => {
  const url = 'https://backend.slipix-progresser-sur-league-of-legends.fr';
  const urlLocal = 'http://localhost:8000';
  const { nameTrollpick } = store.getState().trollpicks;
  switch (action.type) {
    case FETCH_ONE_TROLLPICK:
      axios.get(`${urlLocal}/trollpicks/trollpick/${nameTrollpick.id}`)
        .then((response) => {
          store.dispatch(saveTrollpick(response.data));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
        });
      break;

    case FETCH_TROLLPICK_ACTIF:
      axios.get(`${urlLocal}/trollpicks/actif`)
        .then((response) => {
          store.dispatch(saveTrollpickActif(response.data));
          store.dispatch(setTrollpickActifIsLoad(true));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
        });
      break;

    case FETCH_TROLLPICK_SOON:
      axios.get(`${url}/trollpicks/soon`)
        .then((response) => {
          store.dispatch(saveTrollpickSoon(response.data));
          store.dispatch(setTrollpickSoonIsLoad(true));
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

export default championsMiddleware;
