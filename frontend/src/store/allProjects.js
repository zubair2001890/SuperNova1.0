import { get } from "axios";
import { FETCH_ALL_PROJECTS } from "./types";

export const fetchAllProjects = () => async (dispatch) => {
  const { data } = await get("/api/projects");
  dispatch({
    type: FETCH_ALL_PROJECTS,
    payload: data,
  });
};

export const reduceProjects = (projects = [], { type, payload }) => {
  if (type === FETCH_ALL_PROJECTS) {
    return payload;
  }
  return projects;
};
