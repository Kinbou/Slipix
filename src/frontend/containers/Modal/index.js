import { connect } from 'react-redux';
import Modal from 'src/frontend/components/Modal';

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
)(Modal);
