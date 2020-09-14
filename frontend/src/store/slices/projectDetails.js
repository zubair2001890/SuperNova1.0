import { getProjectDetails } from "./middlewareAPI/fetchAPI";
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProjectDetails,
  createProject,
  sendUpdateProject,
} from "./middlewareAPI/middlewareAPI";

export const projectSlice = createSlice({
  name: "project",
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
    [fetchProjectDetails.fulfilled]: (state, action) => {
      state.projectDetails = action.payload;
    },
    [createProject.fulfilled]: (state, action) => {
      state.projectDetails = action.payload;
    },
    [sendUpdateProject.fulfilled]: (state, action) => {
      state.projectDetails = action.payload;
    },
  },
});

export const { setData, setLoading, setError } = projectSlice.actions;

export const fetchProject = (projectId) => async (dispatch) => {
  dispatch(setLoading(true));
  const project = await getProjectDetails(projectId);
  dispatch(setData(project));
};

export const selectData = (state) => state.project.data;
export const selectLoading = (state) => state.project.loading;
export const selectError = (state) => state.project.error;

export default projectSlice.reducer;

