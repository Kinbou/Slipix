import { connect } from 'react-redux';
import ResetPassword from 'src/frontend/components/AutomaticLink/ResetPassword';

import { showModal, showAlert } from 'src/actions/global';

const mapStateToProps = (state) => ({
  errorLogin: state.users.errorLogin,
});

const mapDispatchToProps = (dispatch) => ({
  displayModal: (name) => {
    dispatch(showModal(name));
  },
  displayAlert: (message, success) => {
    dispatch(showAlert(message, success));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPassword);
