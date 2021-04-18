import { connect } from 'react-redux';
import Champion from 'src/frontend/components/Tutoriels/Champion';
import {
  fetchAllChampions,
  fetchOneChampion,
  stateName,
  setChampionIsLoad,
} from 'src/actions/champions';

import { fetchOneCompetence } from 'src/actions/competences';

const mapStateToProps = (state) => ({
  champion: state.champions.champion,
  name: state.champions.name,
  competence: state.competences,
  championIsLoad: state.champions.championIsLoad,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllChampions: () => {
    dispatch(fetchAllChampions());
  },
  fetchOneChampion: () => {
    dispatch(fetchOneChampion());
  },
  fetchOneCompetence: () => {
    dispatch(fetchOneCompetence());
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
