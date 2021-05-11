import { connect } from 'react-redux';
import Registration from 'src/frontend/components/Registration';

import { fetchUserRegistration, fetchUserRegistrationErrors } from 'src/actions/user';
import { showAlert } from 'src/actions/global';

const mapStateToProps = (state) => ({
  errorsRegistration: state.users.errorsRegistration,
});

const mapDispatchToProps = (dispatch) => ({

  fetchUserRegistration: (data) => {
    dispatch(fetchUserRegistration(data));
  },
  fetchUserRegistrationErrors: (data) => {
    dispatch(fetchUserRegistrationErrors(data));
  },
  displayAlert: (message, success) => {
    dispatch(showAlert(message, success));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);
