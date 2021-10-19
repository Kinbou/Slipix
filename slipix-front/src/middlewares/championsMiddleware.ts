/* eslint-disable no-unused-vars */
import axios from 'axios'

import {
  FETCH_ALL_CHAMPIONS,
  FETCH_ONE_CHAMPION,
  saveChampion,
  setChampionIsLoad
} from '@/actions/champions'

import { apiBaseUrl } from './index'

const championsMiddleware = (store: any) => (next: any) => (action: any): any => {

  switch (action.type) {
    case FETCH_ALL_CHAMPIONS:
      axios.get(`${apiBaseUrl}/champions`)
        .then((response) => {
          store.dispatch(saveChampion(response.data))
        })
        .catch((error) => {
          console.warn(error)
        })
        .finally(() => {
          store.dispatch(setChampionIsLoad())
        })
      break

    case FETCH_ONE_CHAMPION:
      axios({
        method: 'get',
        url: `${apiBaseUrl}/champions/${store.getState().champions.name.lane}/${store.getState().champions.name.name}`
      })
        .then((response) => {
          store.dispatch(saveChampion(response.data))
          store.dispatch(setChampionIsLoad())
        })
        .catch((error) => {
          console.warn(error)
        })
        .finally(() => {
        })
      next(action)
      break

    default:
      next(action)
  }
}

export default championsMiddleware
