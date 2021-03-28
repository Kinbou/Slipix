import { connect } from 'react-redux';
import Profil from 'src/frontend/components/Profil';

import { showModal } from 'src/actions/global';
import { updateUser } from 'src/actions/user';

const mapStateToProps = (state) => ({
  showModal: state.global.showModal,
  user: state.users.user,
});

const mapDispatchToProps = (dispatch) => ({
  displayModal: (name) => {
    dispatch(showModal(name));
  },
  updateUser: (userData) => {
    dispatch(updateUser(userData));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profil);
