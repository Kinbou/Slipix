import axios from 'axios'

import {
  FETCH_ONE_TROLLPICK,
  FETCH_TROLLPICK_ACTIF,
  FETCH_TROLLPICK_SOON,
  saveTrollpick,
  saveTrollpickActif,
  saveTrollpickSoon,
  setTrollpickActifIsLoad,
  setTrollpickSoonIsLoad,
} from '@/actions/trollpicks'

import { apiBaseUrl } from './index'

const championsMiddleware = (store: any) => (next: any) => (action: any) => {
  const { nameTrollpick } = store.getState().trollpicks
  const apiPrefix = '/api/v1'
  const apiUrl = `${apiBaseUrl}${apiPrefix}`
  switch (action.type) {
    case FETCH_ONE_TROLLPICK:
      axios.get(`${apiUrl}/trollpicks/${nameTrollpick.id}`)
        .then((response) => {
          store.dispatch(saveTrollpick(response.data))
        })
        .catch((error) => {
          console.warn(error)
        })
        .finally(() => {
        })
      break

    case FETCH_TROLLPICK_ACTIF:
      axios.get(`${apiUrl}/trollpicks?actif=true`)
        .then((response) => {
          store.dispatch(saveTrollpickActif(response.data))
          store.dispatch(setTrollpickActifIsLoad(true))
        })
        .catch((error) => {
          console.warn(error)
        })
        .finally(() => {
        })
      break

    case FETCH_TROLLPICK_SOON:
      axios.get(`${apiUrl}/trollpicks?soon=true`)
        .then((response) => {
          store.dispatch(saveTrollpickSoon(response.data))
          store.dispatch(setTrollpickSoonIsLoad(true))
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

export default championsMiddleware
