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
  // const { idCompetence } = store.getState().champions;
  // console.log(idCompetence);
  const { name } = store.getState().lanes;
  switch (action.type) {
    case FETCH_ALL_LANE:
      axios({
        method: 'get',
        url: `https://backend.slipix-progresser-sur-league-of-legends.fr/lanes/${name.lane}/actif`,
      })
        .then((response) => {
          console.log('passage dans la requete lanes');
          store.dispatch(saveAllLane(response.data));
          store.dispatch(setLaneIsLoad2(true));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          // store.dispatch(setLaneIsLoad());
        });
      break;

    case FETCH_SOON_LANE:
      axios({
        method: 'get',
        url: `https://backend.slipix-progresser-sur-league-of-legends.fr/lanes/${name.lane}/soon`,
      })
        .then((response) => {
          console.log('passage dans la requete lanes');
          console.log(response.data);
          store.dispatch(saveSoonLane(response.data));
          store.dispatch(setLaneIsLoad(true));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          // store.dispatch(setLaneIsLoad());
        });
      break;

    default:
      next(action);
  }
};

export default lanesMiddleware;
