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

const mapStateToProps = (state: any) => ({
  name: state.lanes.name,
  laneActif: state.lanes.listLaneActif || [],
  laneSoon: state.lanes.listLaneSoon || [],
  laneIsLoad: state.lanes.laneIsLoad,
  laneIsLoad2: state.lanes.laneIsLoad2
})

const mapDispatchToProps = (dispatch: any) => ({
  fetchAllLane: () => {
    dispatch(fetchAllLane())
  },
  fetchSoonLane: () => {
    dispatch(fetchSoonLane())
  },
  // setAppLoading: () => {
  //   dispatch(setAppLoading());
  // },
  stateNameLane: (name: any) => {
    dispatch(stateNameLane(name))
  },
  saveAllLane: (listLane: any) => {
    dispatch(saveAllLane(listLane))
  },
  saveSoonLane: (listLaneSoon: any) => {
    dispatch(saveSoonLane(listLaneSoon))
  },
  setLaneIsLoad: (value: any) => {
    dispatch(setLaneIsLoad(value))
  },
  setLaneIsLoad2: (value: any) => {
    dispatch(setLaneIsLoad2(value))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Champions)
