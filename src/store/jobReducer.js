let defaultState = {
  jobs: [],
  found: false,
  skills: [],
};

const DELETE_JOB = "DELETE_JOB";
const FETCH_JOBS = "FETCH_JOBS";
const FETCH_SKILLS = "FETCH_SKILLS";

const SET_FOUND = "SET_FOUND";

export const jobReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return { ...state, jobs: action.payload };
    case SET_FOUND:
      return { ...state, found: action.payload };

      
        case FETCH_SKILLS:
      return { ...state, skills: action.payload };
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
      };
    default:
      return state;
  }
};

export const fetchJobsAC = (payload) => ({ type: FETCH_JOBS, payload });
export const setFoundAC = (payload) => ({ type: SET_FOUND, payload });

export const deleteJobAC = (payload) => ({ type: DELETE_JOB, payload });

export const fetchSkillsAC = (payload) => ({type: FETCH_SKILLS, payload,});