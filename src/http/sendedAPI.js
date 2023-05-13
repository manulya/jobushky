
import { fetchSendedAC, updateAC } from "../store/requestReducer";
import { $authHost} from "./index";


export const createSended = async(user_id,job_id, message) => {
    const {data} = await $authHost.post('/api/send', {user_id,job_id, message})
    return data;
  }

  export const fetchSended = (user_id) => {
    return async (dispatch) => {
        console.log(user_id)
      try {
        const { data } = await $authHost.get(`/api/send/`,{params: {
            user_id
        }
       
    });
    console.log(data)
        dispatch(fetchSendedAC(data));
      } catch (error) {
        console.log(error);
      }
    };
  };
 
  export const updateSended = ( id, message ) => {
    return async (dispatch) => {
      try {
        await $authHost.put(`/api/send/`,{ id, message });
        // dispatch(updateAC());
      } catch (error) {
        console.log(error);
      }
    };
  };