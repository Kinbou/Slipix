import { connect } from 'react-redux'
import Menu from '@components/Header/Menu'

import { showMenu, showModal } from '@/actions/global'
import { requestUserAuthentification, logoutUser } from '@/actions/user'

const mapStateToProps = (state: any) => ({
  showMenu: state.global.showMenu,
  showModal: state.global.showModal,
  user: state.users.user
})

const mapDispatchToProps = (dispatch: any) => ({
  displayMenu: (name: any) => {
    dispatch(showMenu(name))
  },
  displayModal: (name: any, params: any) => {
    dispatch(showModal(name, params))
  },
  requestUserAuthentification: () => {
    dispatch(requestUserAuthentification())
  },
  logoutUser: () => {
    dispatch(logoutUser())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
