let defaultState ={
    requests: [ ]
  }

  const DELETE_REQUEST="DELETE_JOB"
  const FETCH_REQUESTS = "FETCH_REQUESTS"
  const ADD_REQUEST = "ADD_REQUEST"
  
  export const requestReducer = (state=defaultState, action)=>{
      switch(action.type){

        case FETCH_REQUESTS:
              return{...state,requests:action.payload}

              case ADD_REQUEST:
                return{
                  ...state,
                  requests:[
                    ...state.requests, action.payload
                  ]
                }
     
          case DELETE_REQUEST:    
          return{...state,requests: state.requests.filter(request=>request.id!==action.payload)}
          default:
              return state
      }
  }
  
  export const fetchRequestsAC=(payload)=>({type:FETCH_REQUESTS, payload})
  export const addRequestAC=(payload)=>({type:ADD_REQUEST, payload})
  export const deleteRequestAC=(payload)=>({type:DELETE_REQUEST, payload})
  