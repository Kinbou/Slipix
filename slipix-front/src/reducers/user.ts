const initialState = {
  loggedIn: false,
}

interface ReducerProps {
  type?: String,
  payload?: String,
}

export const SET_LOGGED_IN = 'SET_LOGGED_IN'

const reducer = (state = initialState, { type, payload }:ReducerProps) => {
  switch (type) {
    case SET_LOGGED_IN:
      return {
        ...state,
        loggedIn: payload,
      };
    default:
      return state
  }
}

export default reducer;
