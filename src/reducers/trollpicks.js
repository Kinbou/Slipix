import {
  STATE_NAME_TROLLPICK,
  SAVE_TROLLPICK,
  SET_TROLLPICK_IS_LOAD,
  SAVE_TROLLPICK_ACTIF,
  SET_TROLLPICK_ACTIF_IS_LOAD,
  SAVE_TROLLPICK_SOON,
  SET_TROLLPICK_SOON_IS_LOAD,
} from 'src/actions/trollpicks';


const initialState = {
  trollpick: [],
  nameTrollpick: '',
  trollpickIsLoad: false,
  trollpickActifIsLoad: false,
  trollpickSoonIsLoad: false,
  trollpicksActif: [],
  trollpicksSoon: [],
};

const trollpicksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TROLLPICK:
      return {
        ...state,
        trollpick: action.trollpick,
        trollpickIsLoad: true,
      };

    case STATE_NAME_TROLLPICK:
      return {
        ...state,
        nameTrollpick: action.nameTrollpick,
      };

    case SET_TROLLPICK_IS_LOAD:
      return {
        ...state,
        trollpickIsLoad: !state.trollpickIsLoad,
      };

    case SAVE_TROLLPICK_ACTIF:
      return {
        ...state,
        trollpicksActif: action.trollpicksActif,
      };

    case SET_TROLLPICK_ACTIF_IS_LOAD:
      return {
        ...state,
        trollpickActifIsLoad: action.value,
      };

    case SAVE_TROLLPICK_SOON:
      return {
        ...state,
        trollpicksSoon: action.trollpicksSoon,
      };

    case SET_TROLLPICK_SOON_IS_LOAD:
      return {
        ...state,
        trollpickSoonIsLoad: action.value,
      };

    default: return state;
  }
};

export default trollpicksReducer;
