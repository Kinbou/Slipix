import axios from 'axios';
import {
  FETCH_ALL_CHAMPIONS,
  FETCH_ONE_CHAMPION,
  saveChampion,
  setChampionIsLoad,
} from 'src/actions/champions';
// import { setAppLoading } from 'src/actions/global';

const championsMiddleware = (store) => (next) => (action) => {
  const { champion } = store.getState().champions.name;
  const { lane } = store.getState().champions.name;
  console.log();
  switch (action.type) {
    case FETCH_ALL_CHAMPIONS:
      axios.get('http://localhost:8090/champions')
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
      console.log(store.getState().champions.name);
      axios({
        method: 'get',
        url: `http://localhost:8090/champions/${store.getState().champions.name.lane}/${store.getState().champions.name.name}`,
      })
        .then((response) => {
          console.log('passage dans la requete champion');
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
