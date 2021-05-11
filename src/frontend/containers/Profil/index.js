import { connect } from 'react-redux';
import Profil from 'src/frontend/components/Profil';

import { showModal, showAlert } from 'src/actions/global';
import { updateUser, updateAvatarUser } from 'src/actions/user';

const mapStateToProps = (state) => ({
  showModal: state.global.showModal,
  user: state.users.user,
  successAvatarUpdate: state.users.successAvatarUpdate,
  showAlert: state.global.showAlert,
});

const mapDispatchToProps = (dispatch) => ({
  displayModal: (name) => {
    dispatch(showModal(name));
  },
  updateUser: (userData) => {
    dispatch(updateUser(userData));
  },
  updateAvatarUser: (file) => {
    dispatch(updateAvatarUser(file));
  },
  displayAlert: (message, success) => {
    dispatch(showAlert(message, success));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profil);
