import { connect } from 'react-redux';
import Champion from 'src/frontend/components/Tutoriels/Champion';
import {
  fetchAllChampions,
  fetchOneChampion,
  stateName,
  setChampionIsLoad,
} from 'src/actions/champions';

import { fetchOneCompetence } from 'src/actions/competences';
import { setAppLoading } from 'src/actions/global';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  champion: state.champions.champion,
  appIsLoading: state.global.appIsLoading,
  name: state.champions.name,
  competence: state.competences,
  championIsLoad: state.champions.championIsLoad,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  fetchAllChampions: () => {
    dispatch(fetchAllChampions());
  },
  fetchOneChampion: () => {
    dispatch(fetchOneChampion());
  },
  fetchOneCompetence: () => {
    dispatch(fetchOneCompetence());
  },

  setAppLoading: () => {
    dispatch(setAppLoading());
  },
  stateName: (name) => {
    dispatch(stateName(name));
  },
  setChampionIsLoad: () => {
    dispatch(setChampionIsLoad());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Champion);
