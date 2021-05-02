import { connect } from 'react-redux';

import Alert from 'src/frontend/components/Alert';
import { showAlert, setAppLoading } from 'src/actions/global';

const mapStateToProps = (state) => ({
  message: state.global.alertMessage,
  isSuccess: state.global.alertSuccess,
  appIsLoad: state.global.appIsLoad,
});

const mapDispatchToProps = (dispatch) => ({
  displayAlert: (message, success) => {
    dispatch(showAlert(message, success));
  },
  setAppLoading: (value) => {
    dispatch(setAppLoading(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alert);
