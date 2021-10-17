import axios from 'axios'

import { FETCH_ONE_COMPETENCE, saveCompetence } from '@/actions/competences'

import { apiBaseUrl } from './index'

const competencesMiddleware = (store: any) => (next: any) => (action: any) => {
  switch (action.type) {
    case FETCH_ONE_COMPETENCE:
      axios.get(`${apiBaseUrl}/competences/1`)
        .then((response) => {
          store.dispatch(saveCompetence(response.data))
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

export default competencesMiddleware
