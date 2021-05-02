import { connect } from 'react-redux';
import Profil from 'src/frontend/components/Profil';

import { showModal } from 'src/actions/global';
import { updateUser, updateAvatarUser } from 'src/actions/user';

const mapStateToProps = (state) => ({
  showModal: state.global.showModal,
  user: state.users.user,
  successAvatarUpdate: state.users.successAvatarUpdate,
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profil);
