import { connect } from 'react-redux'

import { SET_LOGGED_IN } from '@/store/user'

import Header from '@components/Header/index'

export const setLoggedIn = (isLoggedIn = false) => ({
  type: SET_LOGGED_IN,
  payload: isLoggedIn
})

const mapStateToProps = (state: any) => ({
  loggedIn: state.user.loggedIn
})

const mapDispatchToProps = {
  setLoggedIn
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
