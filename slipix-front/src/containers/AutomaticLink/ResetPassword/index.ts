import { connect } from 'react-redux'

import ResetPassword from '@components/AutomaticLink/ResetPassword/index'

import { showModal, showAlert } from '@/actions/global'

const mapStateToProps = (state: any) => ({
  errorLogin: state.users.errorLogin
})

const mapDispatchToProps = (dispatch: any) => ({
  displayModal: (name: any) => {
    dispatch(showModal(name))
  },
  displayAlert: (message: any, success: any) => {
    dispatch(showAlert(message, success))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword)
