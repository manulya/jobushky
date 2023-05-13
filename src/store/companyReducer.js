let defaultState ={
    companies: [],
    selectedCompanyID:null
  }



  const SELECT_COMPANY="SELECT_COMPANY"
  const FETCH_COMPANIES="FETCH_COMPANIES"

  export const companyReducer = (state=defaultState, action)=>{
      switch(action.type){
            case SELECT_COMPANY:
                return {
                  ...state,
                  selectedCompany: action.payload
                };

                case FETCH_COMPANIES:
                    return {
                      ...state,
                      companies:action.payload
                    };
          default:
              return state
      }
  }

  
  export const selectCompanyAC=(payload)=>({type:SELECT_COMPANY, payload})
  export const fetchCompaniesAC=(payload)=>({type:FETCH_COMPANIES, payload})
  