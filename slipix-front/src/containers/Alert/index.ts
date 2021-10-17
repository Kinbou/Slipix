import { connect } from 'react-redux'

import Alert from '@components/Alert/index'
import { showAlert, setAppLoading } from '@/actions/global'

const mapStateToProps = (state: any) => ({
  message: state.global.alertMessage,
  isSuccess: state.global.alertSuccess,
  appIsLoad: state.global.appIsLoad
})

const mapDispatchToProps = (dispatch: any) => ({
  displayAlert: (message: any, success: any) => {
    dispatch(showAlert(message, success))
  },
  setAppLoading: (value: any) => {
    dispatch(setAppLoading(value))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert)
