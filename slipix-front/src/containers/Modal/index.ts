import { connect } from 'react-redux'

import Modal from '@components/Modal/index'

import { showModal } from '@/actions/global'

const mapStateToProps = (state) => ({
  showModal: state.global.showModal,
  modalParams: state.global.modalParams
})

const mapDispatchToProps = (dispatch) => ({
  displayModal: (name, params) => {
    dispatch(showModal(name, params))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
