import { SAVE_ALL_NEWS } from '@/actions/news'

const initialState = {
  news: [],
}

const newsReducer = (state = initialState, action = {}) => {
  // @ts-ignore
  switch (action.type) {
    case SAVE_ALL_NEWS:
      return {
        ...state,
        // @ts-ignore
        news: action.listNews,
      }

    default: return state
  }
}

export default newsReducer
