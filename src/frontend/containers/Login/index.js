import { connect } from 'react-redux';
import Login from 'src/frontend/components/Login';

import { showModal } from 'src/actions/global';
import {
  loginUser,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  errorLogin: state.users.errorLogin,
});

const mapDispatchToProps = (dispatch) => ({
  displayModal: (name) => {
    dispatch(showModal(name));
  },

  loginUser: (emailUser, passwordUser, checkedRememberUser, checkedCaptchaUser) => {
    dispatch(loginUser(emailUser, passwordUser, checkedRememberUser, checkedCaptchaUser));
  },
//   displayAlert: (message, success) => {
//     dispatch(showAlert(message, success));
//   },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
