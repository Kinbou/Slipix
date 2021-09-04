import { connect } from 'react-redux';
import Comment from 'src/frontend/components/Comment';

import { showComment } from 'src/actions/global';

const mapStateToProps = (state) => ({
  showComment: state.global.showComment,
  user: state.users.user,
});

const mapDispatchToProps = (dispatch) => ({
  displayComment: (value) => {
    dispatch(showComment(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comment);
