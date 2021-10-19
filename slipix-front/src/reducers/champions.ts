import { SAVE_CHAMPION, STATE_NAME, SET_CHAMPION_IS_LOAD } from '@/actions/champions'

const initialState = {
  champion: [],
  name: '',
  championIsLoad: false
}

const championsReducer = (state = initialState, action = {}) => {
  // @ts-ignore
  switch (action.type) {
    case SAVE_CHAMPION:
      return {
        ...state,
        // @ts-ignore
        champion: action.champion
      }
      
    case STATE_NAME:
      return {
        ...state,
        // @ts-ignore
        name: action.name
      }

    case SET_CHAMPION_IS_LOAD:
      return {
        ...state,
        championIsLoad: !state.championIsLoad
      }

    default: return state
  }
}

export default championsReducer
