import { connect } from 'react-redux';
import Menu from 'src/frontend/components/Header/Menu';

import { showMenu, showModal } from 'src/actions/global';
import { requestUserAuthentification } from 'src/actions/user';

const mapStateToProps = (state) => ({
  showMenu: state.global.showMenu,
  showModal: state.global.showModal,
  user: state.users.user,
});

const mapDispatchToProps = (dispatch) => ({
  displayMenu: (name) => {
    dispatch(showMenu(name));
  },
  displayModal: (name) => {
    dispatch(showModal(name));
  },
  requestUserAuthentification: () => {
    dispatch(requestUserAuthentification());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
