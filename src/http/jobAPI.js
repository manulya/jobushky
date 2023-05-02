import { addJobAC, fetchJobsAC, setFoundAC } from "../store/jobReducer";
import { $authHost, $host } from "./index";

export const createJob = async({name, description, salary, city, companyId})=>{
    const {data} = await $authHost.post('/api/job/', {name, description, salary, city, companyId})
    return data
}


export const getOneJob = async()=>{
    const {data} = await $host.get('/api/job/', )
    return data
}

export const fetchJobs = (name, companyId, city) => {
    return async (dispatch) => {
      try {
          const {data} = await $host.get(`/api/job/`, {params: {
            name, companyId, city
        }
    })
    console.log(data)
          dispatch(fetchJobsAC(data.jobs))
          dispatch(setFoundAC(data.found))
      } catch (error) {
          console.log(error)
      }
    };
  };