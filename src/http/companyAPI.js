import { fetchCompaniesAC } from "../store/companyReducer";
import { $authHost, $host } from "./index";


export const createCompany = async(formData) => {
    const {data} = await $authHost.post('/api/company', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      }
    });
    return data;
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