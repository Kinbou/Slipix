import axios from 'axios'

import {
  FETCH_ALL_THANKS,

  saveAllThanks,
  setThanksIsLoad
} from '@/actions/thanks'

import { apiBaseUrl } from './index'

const thanksMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_THANKS:
      axios({
        method: 'get',
        url: `${apiBaseUrl}/thanks`
      })
        .then((response) => {
          store.dispatch(saveAllThanks(response.data))
          store.dispatch(setThanksIsLoad(true))
        })
        .catch((error) => {
          console.warn(error)
        })
        .finally(() => {
        })
      break

    default:
      next(action)
  }
}

export default thanksMiddleware
