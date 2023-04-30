import { fetchCompaniesAC } from "../store/companyReducer";
import { $authHost, $host } from "./index";

export const create = async(name, description, address, img)=>{
    const {data} = await $authHost.post('/api/company/', {name, description, address, img})
    return data
}

export const fetchCompanies = () => {
    return async (dispatch) => {
      try {
          const {data} = await $host.get(`/api/company/`)
          dispatch(fetchCompaniesAC(data))
      } catch (error) {
          console.log(error)
      }
    };
  };
 
export const getAllCompanies = async()=>{
    const {data} = await $host.get('/api/company/',)
    return data
}