import { connect } from 'react-redux';

// import Champion from 'src/frontend/components/Tutoriels/Jungle/Zac';
import Jungle from 'src/frontend/components/Tutoriels/Jungle';

import {
  fetchAllLane,
  fetchSoonLane,
  stateNameLane,
  saveAllLane,
  saveSoonLane,
  setLaneIsLoad,
  setLaneIsLoad2,
} from 'src/actions/lanes';
import { setAppLoading } from 'src/actions/global';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state

  // offers: state.offers.allOffers,
  // champion: state.champions.champion,
  appIsLoading: state.global.appIsLoading,
  name: state.lanes.name,
  laneActif: state.lanes.listLaneActif,
  laneSoon: state.lanes.listLaneSoon,
  laneIsLoad: state.lanes.laneIsLoad,
  laneIsLoad2: state.lanes.laneIsLoad2,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  fetchAllLane: () => {
    dispatch(fetchAllLane());
  },
  fetchSoonLane: () => {
    dispatch(fetchSoonLane());
  },
  setAppLoading: () => {
    dispatch(setAppLoading());
  },
  stateNameLane: (name) => {
    dispatch(stateNameLane(name));
  },
  saveAllLane: (listLane) => {
    dispatch(saveAllLane(listLane));
  },
  saveSoonLane: (listLaneSoon) => {
    dispatch(saveSoonLane(listLaneSoon));
  },
  setLaneIsLoad: (value) => {
    dispatch(setLaneIsLoad(value));
  },
  setLaneIsLoad2: (value) => {
    dispatch(setLaneIsLoad2(value));
  }, 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Jungle);
