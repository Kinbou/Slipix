import { connect } from 'react-redux'

import Header from '@components/Header/index'

import { showMenu, showModal } from '@/actions/global'

const mapStateToProps = (state: any) => ({
  showMenu: state.global.showMenu,
  showModal: state.global.showModal
})

const mapDispatchToProps = (dispatch: any) => ({
  displayMenu: (name: any) => {
    dispatch(showMenu(name))
  },
  displayModal: (name: any) => {
    dispatch(showModal(name))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
