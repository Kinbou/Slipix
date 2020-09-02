import {
  STATE_NAME_LANE,
  SAVE_ALL_LANE,
  SET_LANE_IS_LOAD,
  SET_LANE_IS_LOAD2,
  SAVE_SOON_LANE,
} from 'src/actions/lanes';

const initialState = {
  listLaneActif: [],
  listLaneSoon: [],
  name: '',
  laneIsLoad: false,
  laneIsLoad2: false,
};

const lanesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STATE_NAME_LANE:
      return {
        ...state,
        name: action.name,
      };

    case SAVE_ALL_LANE:
      return {
        ...state,
        listLaneActif: action.listLane,
      };

    case SAVE_SOON_LANE:
      return {
        ...state,
        listLaneSoon: action.listLaneSoon,
      };

    case SET_LANE_IS_LOAD:
      return {
        ...state,
        laneIsLoad: action.value,
      };

      case SET_LANE_IS_LOAD2:
        return {
          ...state,
          laneIsLoad2: action.value,
        };

    default: return state;
  }
};

export default lanesReducer;
