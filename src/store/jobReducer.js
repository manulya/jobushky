let defaultState ={
    jobs: []
  }

  const DELETE_JOB="DELETE_JOB"
  const FETCH_JOBS = "FETCH_JOBS"

  
  export const jobReducer = (state=defaultState, action)=>{
      switch(action.type){

        case FETCH_JOBS:
            console.log("state", state)
              return{...state,jobs:action.payload}
        
          case DELETE_JOB:    
          return{...state,jobs: state.jobs.filter(job=>job.id!==action.payload)}
          default:
              return state
      }
  }
  
  export const fetchJobsAC=(payload)=>({type:FETCH_JOBS, payload})
  export const deleteJobAC=(payload)=>({type:DELETE_JOB, payload})
  