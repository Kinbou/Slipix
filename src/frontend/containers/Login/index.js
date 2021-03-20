import { connect } from 'react-redux';
import Login from 'src/frontend/components/Login';

import { showModal } from 'src/actions/global';
import {
  loginUser,
} from 'src/actions/user';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  displayModal: (name) => {
    dispatch(showModal(name));
  },

  loginUser: (emailUser, passwordUser) => {
    dispatch(loginUser(emailUser, passwordUser));
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
)(Login);
