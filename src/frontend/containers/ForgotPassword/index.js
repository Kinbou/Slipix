import { connect } from 'react-redux';
import ForgotPassword from 'src/frontend/components/ForgotPassword';

import { showModal, showAlert } from 'src/actions/global';
import {
  forgotPasswordSendEmail,
} from 'src/actions/user';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  displayModal: (name) => {
    dispatch(showModal(name));
  },
  displayAlert: (message, success) => {
    dispatch(showAlert(message, success));
  },
  forgotPasswordSendEmail: (email) => {
    dispatch(forgotPasswordSendEmail(email));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPassword);
