import { fetchCompaniesAC } from "../store/companyReducer";
import { deleteRequestAC, fetchRequestsAC } from "../store/requestReducer";
import { $authHost, $host } from "./index";


export const createRequest = async(userid, jobid) => {
    const {data} = await $authHost.post('/api/request', {userid,jobid})
    return data;
  }

  export const fetchRequests = (userId) => {
    return async (dispatch) => {
      try {
        const { data } = await $authHost.get(`/api/request/${userId}`);
        dispatch(fetchRequestsAC(data));
      } catch (error) {
        console.log(error);
      }
    };
  };
 
  export const deleteRequest = (id) => {
    return async (dispatch) => {
      try {
        await $authHost.delete(`/api/request/${id}`);
        dispatch(deleteRequestAC(id));
      } catch (error) {
        console.log(error);
      }
    };
  };