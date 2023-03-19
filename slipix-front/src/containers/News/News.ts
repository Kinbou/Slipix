import { connect } from 'react-redux'

import News from '@components/News'

import { fetchAllNews } from '@/actions/news'

const mapStateToProps = (state: any) => ({
  news: state.news.listNews,
})

const mapDispatchToProps = (dispatch: any) => ({
  fetchAllNews: () => {
    dispatch(fetchAllNews())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(News)
