import axios from 'axios';
import { FETCH_ALL_CHAMPIONS, FETCH_ONE_CHAMPION, saveChampion } from 'src/actions/champions';
import { setAppLoading } from 'src/actions/global';

const championsMiddleware = (store) => (next) => (action) => {
  const { name } = store.getState().champions;
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
          store.dispatch(setAppLoading());
        });
      break;

    case FETCH_ONE_CHAMPION:

      axios({

        method: 'get',
        url: `http://localhost:8090/champions/${name.name}`,
      })
        .then((response) => {
          console.log('passage dans la requete champion');
          store.dispatch(saveChampion(response.data));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          store.dispatch(setAppLoading());
        });
      next(action);
      break;

    default:
      next(action);
  }
};

export default championsMiddleware;
