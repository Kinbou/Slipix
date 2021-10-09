import { connect } from 'react-redux'
import ForgotPassword from '@components/ForgotPassword/index'

import { showModal, showAlert } from '@/actions/global'
import {
  forgotPasswordSendEmail
} from '@/actions/user'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  displayModal: (name) => {
    dispatch(showModal(name))
  },
  displayAlert: (message, success) => {
    dispatch(showAlert(message, success))
  },
  forgotPasswordSendEmail: (email) => {
    dispatch(forgotPasswordSendEmail(email))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword)
