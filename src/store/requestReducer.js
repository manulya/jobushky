let defaultState ={
    requests: [ ],
    sended: [],
  }

  const DELETE_REQUEST="DELETE_JOB"
  const FETCH_REQUESTS = "FETCH_REQUESTS"
  const FETCH_SENDED = "FETCH_SENDED"
  const UPDATE_SENDED = "UPDATE_SENDED"

  export const requestReducer = (state=defaultState, action)=>{
      switch(action.type){

        case FETCH_REQUESTS:
              return{...state,requests:action.payload}     
          case DELETE_REQUEST:    
          return{...state,requests: state.requests.filter(request=>request.id!==action.payload)}
          case FETCH_SENDED:
              return{...state,sended:action.payload}     
              case UPDATE_SENDED:
                return{...state,sended:action.payload}     
          default:
                return state

      }
  }
  
  export const fetchRequestsAC=(payload)=>({type:FETCH_REQUESTS, payload})
  export const deleteRequestAC=(payload)=>({type:DELETE_REQUEST, payload})
  export const fetchSendedAC=(payload)=>({type:FETCH_SENDED, payload})
  export const updateAC=(payload)=>({type:UPDATE_SENDED, payload})