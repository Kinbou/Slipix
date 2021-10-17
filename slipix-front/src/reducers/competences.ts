import { SAVE_COMPETENCE } from '@/actions/competences';


const initialState = {
  competence: [],
};

const competencesReducer = (state = initialState, action = {}) => {
  // @ts-ignore
  switch (action.type) {
    case SAVE_COMPETENCE:
      return {
        ...state,
        // @ts-ignore
        competence: action.competence,
      };

    default: return state;
  }
};

export default competencesReducer;
