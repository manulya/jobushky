import { addJobAC, fetchJobsAC } from "../store/jobReducer";
import { $authHost, $host } from "./index";

export const create = async(name, description, salary, city, companyId)=>{
    const {data} = await $authHost.post('/api/job/', {name, description, salary, city, companyId})
    return data
}

export const getOneJob = async()=>{
    const {data} = await $host.get('/api/job/', )
    return data
}

export const fetchJobs = () => {
    return async (dispatch) => {
      try {
          const {data} = await $host.get(`/api/job/`)
          dispatch(fetchJobsAC(data))
      } catch (error) {
          console.log(error)
      }
    };
  };