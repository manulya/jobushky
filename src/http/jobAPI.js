import { addJobAC, fetchJobsAC, setFoundAC } from "../store/jobReducer";
import { $authHost, $host } from "./index";

export const createJob = async (formData) => {
  const { data } = await $authHost.post("/api/job/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const getOneJob = async () => {
  const { data } = await $host.get("/api/job/");
  return data;
};

export const fetchJobs = (name, companyId, city, sortOrder) => {
  return async (dispatch) => {
    try {
      const { data } = await $host.get(`/api/job/`, {
        params: {
          name,
          companyId,
          city,
          sortOrder,
        },
      });
      dispatch(fetchJobsAC(data.jobs));
      dispatch(setFoundAC(data.found));
    } catch (error) {
      console.log(error);
    }
  };
};
