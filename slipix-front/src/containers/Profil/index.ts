import { connect } from 'react-redux'

import Profil from '@components/Profil/index'

import { showModal, showAlert } from '@/actions/global'
import { updateUser, updateAvatarUser } from '@/actions/user'

const mapStateToProps = (state) => ({
  showModal: state.global.showModal,
  user: state.users.user,
  successAvatarUpdate: state.users.successAvatarUpdate,
  showAlert: state.global.showAlert
})

const mapDispatchToProps = (dispatch) => ({
  displayModal: (name) => {
    dispatch(showModal(name))
  },
  updateUser: (userData) => {
    dispatch(updateUser(userData))
  },
  updateAvatarUser: (file) => {
    dispatch(updateAvatarUser(file))
  },
  displayAlert: (message, success) => {
    dispatch(showAlert(message, success))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profil)
