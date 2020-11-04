import axios from 'axios';
import {
  FETCH_ALL_CHAMPIONS,
  FETCH_ONE_CHAMPION,
  saveChampion,
  setChampionIsLoad,
} from 'src/actions/champions';

const championsMiddleware = (store) => (next) => (action) => {
  const url = 'https://backend.slipix-progresser-sur-league-of-legends.fr';
  // const urlLocal = 'http://localhost:8090';

  switch (action.type) {
    case FETCH_ALL_CHAMPIONS:
      axios.get(`${url}/champions`)
        .then((response) => {
          store.dispatch(saveChampion(response.data));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          store.dispatch(setChampionIsLoad());
        });
      break;

    case FETCH_ONE_CHAMPION:
      axios({
        method: 'get',
        url: `${url}/champions/${store.getState().champions.name.lane}/${store.getState().champions.name.name}`,
      })
        .then((response) => {
          store.dispatch(saveChampion(response.data));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          store.dispatch(setChampionIsLoad());
        });
      next(action);
      break;

    default:
      next(action);
  }
};

export default championsMiddleware;
