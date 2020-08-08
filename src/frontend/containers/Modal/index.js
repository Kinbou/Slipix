import { connect } from 'react-redux';
import Modal from 'src/frontend/components/Modal';

import { showModal } from 'src/actions/global';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  displayModal: (name) => {
    dispatch(showModal(name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
