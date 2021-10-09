export const FETCH_ALL_CHAMPIONS = 'FETCH_ALL_CHAMPIONS';
export const FETCH_ONE_CHAMPION = 'FETCH_ONE_CHAMPION';
export const SAVE_CHAMPION = 'SAVE_CHAMPION';
export const STATE_NAME = 'STATE_NAME';
export const CHAMPION_IS_LOAD = 'CHAMPION_IS_LOAD';
export const SET_CHAMPION_IS_LOAD = 'SET_CHAMPION_IS_LOAD';

export const fetchAllChampions = () => ({
  type: FETCH_ALL_CHAMPIONS,
});

export const fetchOneChampion = () => ({
  type: FETCH_ONE_CHAMPION,
});

export const saveChampion = (champion) => ({
  type: SAVE_CHAMPION,
  champion,
});

export const stateName = (name) => ({
  type: STATE_NAME,
  name,
});

export const setChampionIsLoad = () => ({
  type: SET_CHAMPION_IS_LOAD,
});

export const championIsLoad = () => ({
  type: CHAMPION_IS_LOAD,
});
