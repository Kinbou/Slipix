import { connect } from 'react-redux'

import Registration from '@components/Registration/index'

import { fetchUserRegistration, fetchUserRegistrationErrors } from '@/actions/user'
import { showAlert } from '@/actions/global'

const mapStateToProps = (state) => ({
  errorsRegistration: state.users.errorsRegistration
})

const mapDispatchToProps = (dispatch) => ({

  fetchUserRegistration: (data) => {
    dispatch(fetchUserRegistration(data))
  },
  fetchUserRegistrationErrors: (data) => {
    dispatch(fetchUserRegistrationErrors(data))
  },
  displayAlert: (message, success) => {
    dispatch(showAlert(message, success))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration)
