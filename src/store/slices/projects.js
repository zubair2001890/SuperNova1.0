
import { createSlice } from "@reduxjs/toolkit";
import projectsMockData from "../../mockData/projects.json";
import sleep from "../../helpers/sleep";
import { fetchFeaturedProjects, fetchProjects, fetchSubFields, fetchProjectDetails, createProject, sendUpdateProject } from './middlewareAPI/middlewareAPI';

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchFeaturedProjects.fulfilled]: (state, action) => {
      state.featured = action.payload;
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.projects = action.payload;
    },
    [fetchSubFields.fulfilled]: (state, action) => {
      state.subfields = action.payload;
    },
    [fetchProjectDetails.fulfilled]: (state, action) => {
      state.projectDetails = action.payload;
    },
    [createProject.fulfilled]: (state, action) => {
      state.projectDetails = action.payload;
    },
    [sendUpdateProject.fulfilled]: (state, action) => {
      state.projectDetails = action.payload;
    }
  }
});

export const { setData, setLoading, setError } = projectsSlice.actions;


// Can be removed?
const fetchMockProjects = () => (dispatch) => {
  dispatch(setLoading(true));
  sleep(1000);
  dispatch(setData(projectsMockData));
  dispatch(setLoading(false));
};

export { fetchFeaturedProjects as fetchProjects};

export const selectData = (state) => state.projects.data;
export const selectLoading = (state) => state.projects.loading;
export const selectError = (state) => state.projects.error;

export default projectsSlice.reducer;
