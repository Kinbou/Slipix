import { connect } from 'react-redux'
import Champion from '@components/Tutoriels/Champion/index'
import {
  fetchAllChampions,
  fetchOneChampion,
  stateName,
  setChampionIsLoad
} from '@/actions/champions'

import { fetchOneCompetence } from '@/actions/competences'

const mapStateToProps = (state: any) => ({
  champion: state.champions.champion,
  name: state.champions.name,
  competence: state.competences,
  championIsLoad: state.champions.championIsLoad
})

const mapDispatchToProps = (dispatch: any) => ({
  fetchAllChampions: () => {
    dispatch(fetchAllChampions())
  },
  fetchOneChampion: () => {
    dispatch(fetchOneChampion())
  },
  fetchOneCompetence: () => {
    dispatch(fetchOneCompetence())
  },
  stateName: (name: any) => {
    dispatch(stateName(name))
  },
  setChampionIsLoad: () => {
    dispatch(setChampionIsLoad())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Champion)
