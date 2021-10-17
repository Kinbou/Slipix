import {
  STATE_NAME_TROLLPICK,
  SAVE_TROLLPICK,
  SET_TROLLPICK_IS_LOAD,
  SAVE_TROLLPICK_ACTIF,
  SET_TROLLPICK_ACTIF_IS_LOAD,
  SAVE_TROLLPICK_SOON,
  SET_TROLLPICK_SOON_IS_LOAD,
} from '@/actions/trollpicks';


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
  // @ts-ignore
  switch (action.type) {
    case SAVE_TROLLPICK:
      return {
        ...state,
        // @ts-ignore
        trollpick: action.trollpick,
        trollpickIsLoad: true,
      };

    case STATE_NAME_TROLLPICK:
      return {
        ...state,
        // @ts-ignore
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
        // @ts-ignore
        trollpicksActif: action.trollpicksActif,
      };

    case SET_TROLLPICK_ACTIF_IS_LOAD:
      return {
        ...state,
        // @ts-ignore
        trollpickActifIsLoad: action.value,
      };

    case SAVE_TROLLPICK_SOON:
      return {
        ...state,
        // @ts-ignore
        trollpicksSoon: action.trollpicksSoon,
      };

    case SET_TROLLPICK_SOON_IS_LOAD:
      return {
        ...state,
        // @ts-ignore
        trollpickSoonIsLoad: action.value,
      };

    default: return state;
  }
};

export default trollpicksReducer;
