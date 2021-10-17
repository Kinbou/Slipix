import {
  STATE_NAME_LANE,
  SAVE_ALL_LANE,
  SET_LANE_IS_LOAD,
  SET_LANE_IS_LOAD2,
  SAVE_SOON_LANE,
} from '@/actions/lanes';

const initialState = {
  listLaneActif: [],
  listLaneSoon: [],
  name: '',
  laneIsLoad: false,
  laneIsLoad2: false,
};

const lanesReducer = (state = initialState, action = {}) => {
  // @ts-ignore
  switch (action.type) {
    case STATE_NAME_LANE:
      return {
        ...state,
        // @ts-ignore
        name: action.name,
      };

    case SAVE_ALL_LANE:
      return {
        ...state,
        // @ts-ignore
        listLaneActif: action.listLane,
      };

    case SAVE_SOON_LANE:
      return {
        ...state,
        // @ts-ignore
        listLaneSoon: action.listLaneSoon,
      };

    case SET_LANE_IS_LOAD:
      return {
        ...state,
        // @ts-ignore
        laneIsLoad: action.value,
      };

    case SET_LANE_IS_LOAD2:
      return {
        ...state,
        // @ts-ignore
        laneIsLoad2: action.value,
      };

    default: return state;
  }
};

export default lanesReducer;
