import { connect } from 'react-redux'

import Header from '@components/Header/index'

import { showMenu, showModal } from '@/actions/global'

const mapStateToProps = (state) => ({
  showMenu: state.global.showMenu,
  showModal: state.global.showModal
})

const mapDispatchToProps = (dispatch) => ({
  displayMenu: (name) => {
    dispatch(showMenu(name))
  },
  displayModal: (name) => {
    dispatch(showModal(name))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
