const defaultState={
    isAuth : false,
    isAdmin: false,
    users:{}
}

const SET_IS_AUTH="SET_IS_AUTH"
const ADD_USER="ADD_USER"
const DELETE_USER="DELETE_USER"
const SET_IS_ADMIN ="SET_IS_ADMIN"

export const userReducer = (state=defaultState, action)=>{
    switch(action.type){
        case SET_IS_AUTH:
            return {...state, isAuth:action.payload}
            case SET_IS_ADMIN:
            return {...state, isAdmin:action.payload}
        case ADD_USER:
            return{...state,users:[...state.users, action.payload]}
        case DELETE_USER:    
        return{...state,users: state.users.filter(user=>user.id!==action.payload)}
        default:
            return state
    }
}

export const setIsAuthAC=(payload)=>({type:SET_IS_AUTH, payload})
export const setIsAdminAC=(payload)=>({type:SET_IS_ADMIN, payload})
export const addUserAC=(payload)=>({type:ADD_USER, payload})
export const deleteUserAC=(payload)=>({type:DELETE_USER, payload})