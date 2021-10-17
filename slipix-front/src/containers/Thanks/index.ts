import { connect } from 'react-redux'

import Thanks from '@components/Thanks/index'

import { fetchAllThanks, setThanksIsLoad } from '@/actions/thanks'

const mapStateToProps = (state: any) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state

  thanks: state.thanks,
  thanksIsLoad: state.thanks.thanksIsLoad
})

const mapDispatchToProps = (dispatch: any) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  fetchAllThanks: () => {
    dispatch(fetchAllThanks())
  },

  setThanksIsLoad: () => {
    // @ts-ignore
    dispatch(setThanksIsLoad())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Thanks)
