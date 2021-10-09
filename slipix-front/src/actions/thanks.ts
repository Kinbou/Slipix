export const FETCH_ALL_THANKS = 'FETCH_ALL_THANKS';
export const SAVE_ALL_THANKS = 'SAVE_ALL_THANKS';
export const SET_THANKS_IS_LOAD = 'SET_THANKS_IS_LOAD';

export const fetchAllThanks = () => ({
  type: FETCH_ALL_THANKS,
});

export const saveAllThanks = (listThanks) => ({
  type: SAVE_ALL_THANKS,
  listThanks,
});

export const setThanksIsLoad = (value) => ({
  type: SET_THANKS_IS_LOAD,
  value,
});
