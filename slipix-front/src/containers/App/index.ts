import { connect } from 'react-redux'

import App from '@components/App/App'
import { setAppLoading } from '@/actions/global'

const mapStateToProps = (state: any) => ({
  appIsLoad: state.global.appIsLoad,
  showAlert: state.global.showAlert
})

const mapDispatchToProps = (dispatch: any) => ({
  setAppLoading: (value: any) => {
    dispatch(setAppLoading(value))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
