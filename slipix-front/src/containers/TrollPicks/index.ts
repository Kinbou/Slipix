import { connect } from 'react-redux'

import trollpicks from '@components/TrollPicks/index'

import {
  fetchTrollpickSoon,
  fetchTrollpickActif,
  setTrollpickIsLoad,
  setTrollpickActifIsLoad,
  setTrollpickSoonIsLoad,
} from '@/actions/trollpicks'

const mapStateToProps = (state: any) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  trollpick: state.trollpicks.trollpick,
  trollpicksActif: state.trollpicks.trollpicksActif,
  trollpicksSoon: state.trollpicks.trollpicksSoon,
  trollpickActifIsLoad: state.trollpicks.trollpickActifIsLoad,
  trollpickSoonIsLoad: state.trollpicks.trollpickSoonIsLoad,
})

const mapDispatchToProps = (dispatch: any) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  fetchTrollpickActif: () => {
    dispatch(fetchTrollpickActif())
  },

  fetchTrollpickSoon: () => {
    dispatch(fetchTrollpickSoon())
  },

  setTrollpickIsLoad: () => {
    dispatch(setTrollpickIsLoad())
  },

  setTrollpickActifIsLoad: () => {
    // @ts-ignore
    dispatch(setTrollpickActifIsLoad())
  },

  setTrollpickSoonIsLoad: () => {
    // @ts-ignore
    dispatch(setTrollpickSoonIsLoad())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(trollpicks)
