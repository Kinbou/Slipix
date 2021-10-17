import { connect } from 'react-redux'
import ForgotPassword from '@components/ForgotPassword/index'

import { showModal, showAlert } from '@/actions/global'
import {
  forgotPasswordSendEmail
} from '@/actions/user'

const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps = (dispatch: any) => ({
  displayModal: (name: any) => {
    dispatch(showModal(name))
  },
  displayAlert: (message: any, success: any) => {
    dispatch(showAlert(message, success))
  },
  forgotPasswordSendEmail: (email: any) => {
    dispatch(forgotPasswordSendEmail(email))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword)
