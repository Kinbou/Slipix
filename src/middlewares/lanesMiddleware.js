import axios from 'axios';
import {
  FETCH_ALL_LANE,
  FETCH_SOON_LANE,
  saveAllLane,
  saveSoonLane,
  setLaneIsLoad,
  setLaneIsLoad2,
} from 'src/actions/lanes';
// import { setLaneIsLoad } from 'src/actions/global';

const lanesMiddleware = (store) => (next) => (action) => {
  const url = 'https://backend.slipix-progresser-sur-league-of-legends.fr';
  // const urlLocal = 'http://localhost:8090';
  const { name } = store.getState().lanes;
  switch (action.type) {
    case FETCH_ALL_LANE:
      axios({
        method: 'get',
        url: `${url}/lanes/${name.lane}/actif`,
      })
        .then((response) => {
          store.dispatch(saveAllLane(response.data));
          store.dispatch(setLaneIsLoad2(true));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
        });
      break;

    case FETCH_SOON_LANE:
      axios({
        method: 'get',
        url: `${url}/lanes/${name.lane}/soon`,
      })
        .then((response) => {
          store.dispatch(saveSoonLane(response.data));
          store.dispatch(setLaneIsLoad(true));
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

export default lanesMiddleware;
