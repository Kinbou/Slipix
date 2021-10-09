import { connect } from 'react-redux'

import Login from '@components/Login/index'

import { showModal } from '@/actions/global'
import {
  loginUser
} from '@/actions/user'

const mapStateToProps = (state) => ({
  errorLogin: state.users.errorLogin
})

const mapDispatchToProps = (dispatch) => ({
  displayModal: (name) => {
    dispatch(showModal(name))
  },

  loginUser: (emailUser, passwordUser, checkedRememberUser, checkedCaptchaUser) => {
    dispatch(loginUser(emailUser, passwordUser, checkedRememberUser, checkedCaptchaUser))
  }
//   displayAlert: (message, success) => {
//     dispatch(showAlert(message, success));
//   },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
