import { connect } from 'react-redux'

import Profil from '@components/Profil/index'

import { showModal, showAlert } from '@/actions/global'
import { updateUser, updateAvatarUser } from '@/actions/user'

const mapStateToProps = (state: any) => ({
  showModal: state.global.showModal,
  user: state.users.user,
  successAvatarUpdate: state.users.successAvatarUpdate,
  showAlert: state.global.showAlert
})

const mapDispatchToProps = (dispatch: any) => ({
  displayModal: (name: any) => {
    dispatch(showModal(name))
  },
  updateUser: (userData: any) => {
    dispatch(updateUser(userData))
  },
  updateAvatarUser: (file: any) => {
    dispatch(updateAvatarUser(file))
  },
  displayAlert: (message: any, success: any) => {
    dispatch(showAlert(message, success))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profil)
