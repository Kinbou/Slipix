import { connect } from 'react-redux';

import Champion from 'src/components/Tutoriels/Jungle/Zac';

import { fetchAllChampions, fetchOneChampion, stateName } from 'src/actions/champions';

import { fetchOneCompetence } from 'src/actions/competences';
import { setAppLoading } from 'src/actions/global';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state

  // offers: state.offers.allOffers,
  champion: state.champions.champion,
  appIsLoading: state.global.appIsLoading,
  name: state.champions.name,
  competence: state.competences,
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
  // saveCompetence: (competence) => {
  //   dispatch(saveCompetence(competence));
  // },

  setAppLoading: () => {
    dispatch(setAppLoading());
  },
  stateName: (name) => {
    dispatch(stateName(name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Champion);
