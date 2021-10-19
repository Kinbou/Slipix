import { connect } from 'react-redux'

import Login from '@components/Login/index'

import { showModal } from '@/actions/global'
import {
  loginUser
} from '@/actions/user'

const mapStateToProps = (state: any) => ({
  errorLogin: state.users.errorLogin
})

const mapDispatchToProps = (dispatch: any) => ({
  displayModal: (name: any) => {
    dispatch(showModal(name))
  },

  loginUser: (emailUser: any, passwordUser: any, checkedRememberUser: any, checkedCaptchaUser: any) => {
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
