import axios from 'axios'

import { FETCH_ALL_NEWS, saveAllNews } from '@/actions/news'

console.log('middleware')
const newsMiddleware = (store: any) => (next: any) => (action: any) => {
  switch (action.type) {
    case FETCH_ALL_NEWS:
      axios({
        method: 'GET',
        url: 'http://localhost:5000/api/v1/news',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((response) => {
          console.log('middleware', response)
          store.dispatch(saveAllNews(response.data))
        })
        .catch((error) => {
          console.log('tototttttttttttttttt')
          console.warn('error', error)
        })
      break

    default:
      next(action)
  }
}

export default newsMiddleware
