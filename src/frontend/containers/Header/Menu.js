import { connect } from 'react-redux';
import Menu from 'src/frontend/components/Header/Menu';

import { showMenu, showModal } from 'src/actions/global';

const mapStateToProps = (state) => ({
  showMenu: state.global.showMenu,
  showModal: state.global.showModal,
});

const mapDispatchToProps = (dispatch) => ({
  displayMenu: (name) => {
    dispatch(showMenu(name));
  },
  displayModal: (name) => {
    dispatch(showModal(name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
