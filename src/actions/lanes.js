export const FETCH_ALL_LANE = 'FETCH_ALL_LANE';
export const STATE_NAME_LANE = 'STATE_NAME_LANE';
export const SAVE_ALL_LANE = 'SAVE_ALL_LANE';
export const SET_LANE_IS_LOAD = 'SET_LANE_IS_LOAD';
export const FETCH_SOON_LANE = 'FETCH_SOON_LANE';
export const SAVE_SOON_LANE = 'SAVE_SOON_LANE';

export const fetchAllLane = () => ({
  type: FETCH_ALL_LANE,
});

export const stateNameLane = (name) => ({
  type: STATE_NAME_LANE,
  name,
});

export const saveAllLane = (listLane) => ({
  type: SAVE_ALL_LANE,
  listLane,
});

export const setLaneIsLoad = () => ({
  type: SET_LANE_IS_LOAD,
});

export const fetchSoonLane = () => ({
  type: FETCH_SOON_LANE,
});

export const saveSoonLane = (listLaneSoon) => ({
  type: SAVE_SOON_LANE,
  listLaneSoon,
});
