import { connect } from 'react-redux'

import Modal from '@components/Modal/index'

import { showModal } from '@/actions/global'

const mapStateToProps = (state: any) => ({
  showModal: state.global.showModal,
  modalParams: state.global.modalParams
})

const mapDispatchToProps = (dispatch: any) => ({
  displayModal: (name: any, params: any) => {
    dispatch(showModal(name, params))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
