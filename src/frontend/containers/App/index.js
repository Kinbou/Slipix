import { connect } from 'react-redux';
import App from 'src/frontend/components/App';
import { setAppLoading } from 'src/actions/global';

const mapStateToProps = (state) => ({
  // isLogged: state.user.isLogged,

  appIsLoad: state.global.appIsLoad,

});

const mapDispatchToProps = (dispatch) => ({

  setAppLoading: (value) => {
    dispatch(setAppLoading(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
