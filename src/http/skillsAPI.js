import { addRequestCountAC, addSkillsAC, fetchRequestCountAC, fetchSkillsAC } from "../store/jobReducer";
import { $authHost, $host } from "./index";

export const createSkill = async ({name, level, job_id }) => {
  const { data } = await $authHost.post("/api/skills/", {name, level, job_id });
  return data;
};

export const fetchSkills = (job_id) => {
  return async (dispatch) => {
    try {
      const { data } = await $host.get(`/api/skills/`, {
        params: {
          job_id,
        },
      });
      dispatch(fetchSkillsAC(data));
    } catch (error) {
      console.log(error);
    }
  };
};
