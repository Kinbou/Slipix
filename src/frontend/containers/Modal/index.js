import { connect } from 'react-redux';
import Modal from 'src/frontend/components/Modal';

import { showModal } from 'src/actions/global';

const mapStateToProps = (state) => ({
  showModal: state.global.showModal,
  modalParams: state.global.modalParams,
});

const mapDispatchToProps = (dispatch) => ({
  displayModal: (name, params) => {
    dispatch(showModal(name, params));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
