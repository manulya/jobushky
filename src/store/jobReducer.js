let defaultState = {
  jobs: [],
  found: false,
  skills: [],
};

const DELETE_JOB = "DELETE_JOB";
const FETCH_JOBS = "FETCH_JOBS";
const ADD_JOB = "ADD_JOB";
const FETCH_SKILLS = "FETCH_SKILLS";
const ADD_SKILLS = "ADD_SKILLS";
const SET_FOUND = "SET_FOUND";

export const jobReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return { ...state, jobs: action.payload };
    case SET_FOUND:
      return { ...state, found: action.payload };
    case ADD_JOB:
      return {
        ...state,
        companies: [...state.jobs, action.payload],
      };
      case ADD_SKILLS:
        return {
          ...state,
          skills: [...state.skills, action.payload],
        };
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
export const addJobAC = (payload) => ({ type: ADD_JOB, payload });
export const deleteJobAC = (payload) => ({ type: DELETE_JOB, payload });
export const addSkillsAC = (payload) => ({type: ADD_SKILLS, payload,});
export const fetchSkillsAC = (payload) => ({type: FETCH_SKILLS, payload,});