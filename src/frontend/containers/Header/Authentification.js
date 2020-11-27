import { connect } from 'react-redux';
import Authentification from 'src/frontend/components/Header/Authentification';

import { showModal } from 'src/actions/global';

const mapStateToProps = (state) => ({
  showModal: state.global.showModal,
});

const mapDispatchToProps = (dispatch) => ({
  displayModal: (name) => {
    dispatch(showModal(name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Authentification);
