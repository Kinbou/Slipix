import { connect } from 'react-redux'

import Registration from '@components/Registration/index'

import { fetchUserRegistration, fetchUserRegistrationErrors } from '@/actions/user'
import { showAlert } from '@/actions/global'

const mapStateToProps = (state: any) => ({
  errorsRegistration: state.users.errorsRegistration
})

const mapDispatchToProps = (dispatch: any) => ({

  fetchUserRegistration: (data: any) => {
    dispatch(fetchUserRegistration(data))
  },
  fetchUserRegistrationErrors: (data: any) => {
    dispatch(fetchUserRegistrationErrors(data))
  },
  displayAlert: (message: any, success: any) => {
    dispatch(showAlert(message, success))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration)
