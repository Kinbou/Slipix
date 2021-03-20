import { connect } from 'react-redux';
import Registration from 'src/frontend/components/Registration';

import { fetchUserRegistration } from 'src/actions/user';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

  fetchUserRegistration: (data) => {
    dispatch(fetchUserRegistration(data));
  },
//   changeValue: (identifier, newValue) => {
//     dispatch(changeInputOfLogin(identifier, newValue));
//   },
//   submitLogin: () => {
//     dispatch(submitLogin());
//   },
//   displayAlert: (message, success) => {
//     dispatch(showAlert(message, success));
//   },
//   changeLoginError: (message) => {
//     dispatch(changeLoginError(message));
//   },
//   clearLoginError: () => {
//     dispatch(clearLoginError());
//   },
//   setRequestIsLoad: () => {
//     dispatch(setRequestIsLoad());
//   },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);