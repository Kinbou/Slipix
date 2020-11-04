export const FETCH_ONE_TROLLPICK = 'FETCH_ONE_TROLLPICK';
export const SAVE_TROLLPICK = 'SAVE_TROLLPICK';
export const TROLLPICK_IS_LOAD = 'TROLLPICK_IS_LOAD';
export const SET_TROLLPICK_IS_LOAD = 'SET_TROLLPICK_IS_LOAD';
export const STATE_NAME_TROLLPICK = 'STATE_NAME_TROLLPICK';
export const FETCH_TROLLPICK_ACTIF = 'FETCH_TROLLPICK_ACTIF';
export const SAVE_TROLLPICK_ACTIF = 'SAVE_TROLLPICK_ACTIF';
export const SET_TROLLPICK_ACTIF_IS_LOAD = 'SET_TROLLPICK_ACTIF_IS_LOAD';
export const FETCH_TROLLPICK_SOON = 'FETCH_TROLLPICK_SOON';
export const SAVE_TROLLPICK_SOON = 'SAVE_TROLLPICK_SOON';
export const SET_TROLLPICK_SOON_IS_LOAD = 'SET_TROLLPICK_SOON_IS_LOAD';

export const fetchOneTrollpick = () => ({
  type: FETCH_ONE_TROLLPICK,
});

export const saveTrollpick = (trollpick) => ({
  type: SAVE_TROLLPICK,
  trollpick,
});

export const setTrollpickIsLoad = () => ({
  type: SET_TROLLPICK_IS_LOAD,
});

export const trollpickIsLoad = () => ({
  type: TROLLPICK_IS_LOAD,
});

export const stateNameTrollpick = (nameTrollpick) => ({
  type: STATE_NAME_TROLLPICK,
  nameTrollpick,
});

export const fetchTrollpickActif = () => ({
  type: FETCH_TROLLPICK_ACTIF,
});

export const saveTrollpickActif = (trollpicksActif) => ({
  type: SAVE_TROLLPICK_ACTIF,
  trollpicksActif,
});

export const setTrollpickActifIsLoad = (value) => ({
  type: SET_TROLLPICK_ACTIF_IS_LOAD,
  value,
});

export const fetchTrollpickSoon = () => ({
  type: FETCH_TROLLPICK_SOON,
});

export const saveTrollpickSoon = (trollpicksSoon) => ({
  type: SAVE_TROLLPICK_SOON,
  trollpicksSoon,
});

export const setTrollpickSoonIsLoad = (value) => ({
  type: SET_TROLLPICK_SOON_IS_LOAD,
  value,
});
