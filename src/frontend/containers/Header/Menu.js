import { connect } from 'react-redux';
import Menu from 'src/frontend/components/Header/Menu';

import { showMenu, showModal } from 'src/actions/global';
import { requestUserAuthentification, logoutUser } from 'src/actions/user';

const mapStateToProps = (state) => ({
  showMenu: state.global.showMenu,
  showModal: state.global.showModal,
  user: state.users.user,
});

const mapDispatchToProps = (dispatch) => ({
  displayMenu: (name) => {
    dispatch(showMenu(name));
  },
  displayModal: (name, params) => {
    dispatch(showModal(name, params));
  },
  requestUserAuthentification: () => {
    dispatch(requestUserAuthentification());
  },
  logoutUser: () => {
    dispatch(logoutUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
