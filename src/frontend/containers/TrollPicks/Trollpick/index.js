import { connect } from 'react-redux';

import trollpick from 'src/frontend/components/TrollPicks/Trollpick';

import { stateNameTrollpick, fetchOneTrollpick, setTrollpickIsLoad } from 'src/actions/trollpicks';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  trollpick: state.trollpicks.trollpick,
  name: state.trollpicks.nameTrollpick.name,
  trollpickIsLoad: state.trollpicks.trollpickIsLoad,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  // fetchAllChampions: () => {
  //   dispatch(fetchAllChampions());
  // },
  fetchOneTrollpick: () => {
    dispatch(fetchOneTrollpick());
  },

  stateNameTrollpick: (nameTrollpick) => {
    dispatch(stateNameTrollpick(nameTrollpick));
  },
  setTrollpickIsLoad: () => {
    dispatch(setTrollpickIsLoad());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(trollpick);
