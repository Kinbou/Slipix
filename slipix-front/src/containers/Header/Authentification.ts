import { connect } from 'react-redux'

import Authentification from '@components/Header/Authentification'

import { showModal } from '@/actions/global'

const mapStateToProps = (state: any) => ({
  showModal: state.global.showModal
})

const mapDispatchToProps = (dispatch: any) => ({
  displayModal: (name: any) => {
    dispatch(showModal(name))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentification)
