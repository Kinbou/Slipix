import { connect } from 'react-redux';

import Thanks from 'src/frontend/components/Thanks';

import { fetchAllThanks, setThanksIsLoad } from 'src/actions/thanks';


const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state

  thanks: state.thanks,
  thanksIsLoad: state.thanks.thanksIsLoad,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  fetchAllThanks: () => {
    dispatch(fetchAllThanks());
  },

  setThanksIsLoad: () => {
    dispatch(setThanksIsLoad());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Thanks);
