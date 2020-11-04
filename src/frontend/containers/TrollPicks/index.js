import { connect } from 'react-redux';

import trollpicks from 'src/frontend/components/TrollPicks';

import {
  fetchTrollpickSoon,
  fetchTrollpickActif,
  setTrollpickIsLoad,
  setTrollpickActifIsLoad,
  setTrollpickSoonIsLoad,
} from 'src/actions/trollpicks';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  trollpick: state.trollpicks.trollpick,
  trollpicksActif: state.trollpicks.trollpicksActif,
  trollpicksSoon: state.trollpicks.trollpicksSoon,
  trollpickActifIsLoad: state.trollpicks.trollpickActifIsLoad,
  trollpickSoonIsLoad: state.trollpicks.trollpickSoonIsLoad,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  fetchTrollpickActif: () => {
    dispatch(fetchTrollpickActif());
  },

  fetchTrollpickSoon: () => {
    dispatch(fetchTrollpickSoon());
  },

  setTrollpickIsLoad: () => {
    dispatch(setTrollpickIsLoad());
  },

  setTrollpickActifIsLoad: () => {
    dispatch(setTrollpickActifIsLoad());
  },

  setTrollpickSoonIsLoad: () => {
    dispatch(setTrollpickSoonIsLoad());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(trollpicks);
