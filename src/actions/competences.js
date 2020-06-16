
export const FETCH_ONE_COMPETENCE = 'FETCH_ONE_COMPETENCE';
export const SAVE_COMPETENCE = 'SAVE_COMPETENCE';


export const fetchOneCompetence = () => ({
  type: FETCH_ONE_COMPETENCE,
});

export const saveCompetence = (competence) => ({
  type: SAVE_COMPETENCE,
  competence,
});
