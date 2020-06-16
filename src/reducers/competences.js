import { SAVE_COMPETENCE } from 'src/actions/competences';


const initialState = {
  competence: [],
};

const competencesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_COMPETENCE:
      return {
        ...state,
        competence: action.competence,
      };

    default: return state;
  }
};

export default competencesReducer;
