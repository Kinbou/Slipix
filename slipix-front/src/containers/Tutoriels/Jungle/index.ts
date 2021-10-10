import { connect } from 'react-redux'

// import Champion from '@components/Tutoriels/Jungle/Zac';
import Champions from '@components/Tutoriels/Champions/index'

import {
  fetchAllLane,
  fetchSoonLane,
  stateNameLane,
  saveAllLane,
  saveSoonLane,
  setLaneIsLoad,
  setLaneIsLoad2
} from '@/actions/lanes'

const mapStateToProps = (state) => ({
  name: state.lanes.name,
  laneActif: state.lanes.listLaneActif,
  laneSoon: state.lanes.listLaneSoon,
  laneIsLoad: state.lanes.laneIsLoad,
  laneIsLoad2: state.lanes.laneIsLoad2
})

const mapDispatchToProps = (dispatch) => ({
  fetchAllLane: () => {
    dispatch(fetchAllLane())
  },
  fetchSoonLane: () => {
    dispatch(fetchSoonLane())
  },
  // setAppLoading: () => {
  //   dispatch(setAppLoading());
  // },
  stateNameLane: (name) => {
    dispatch(stateNameLane(name))
  },
  saveAllLane: (listLane) => {
    dispatch(saveAllLane(listLane))
  },
  saveSoonLane: (listLaneSoon) => {
    dispatch(saveSoonLane(listLaneSoon))
  },
  setLaneIsLoad: (value) => {
    dispatch(setLaneIsLoad(value))
  },
  setLaneIsLoad2: (value) => {
    dispatch(setLaneIsLoad2(value))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Champions)
