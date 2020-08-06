import { createSlice } from '@reduxjs/toolkit'
import projectsMockData from '../../mockData/projects.json'
import sleep from '../../helpers/sleep'
import {
  fetchFeaturedProject,
  fetchProjects,
  fetchSubFields,
  fetchProjectDetails,
  createProject,
  sendUpdateProject,
} from './middlewareAPI/middlewareAPI'
import { getProjects, getFeaturedProjects } from './middlewareAPI/fetchAPI'

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
  extraReducers: {
    [fetchFeaturedProject.fulfilled]: (state, action) => {
      state.featured = action.payload
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.projects = action.payload
    },
    [fetchSubFields.fulfilled]: (state, action) => {
      state.subfields = action.payload
    },
    [fetchProjectDetails.fulfilled]: (state, action) => {
      state.projectDetails = action.payload
    },
    [createProject.fulfilled]: (state, action) => {
      state.projectDetails = action.payload
    },
    [sendUpdateProject.fulfilled]: (state, action) => {
      state.projectDetails = action.payload
    },
  },
});

export const { setData, setLoading, setError } = projectsSlice.actions

// Can be removed?
const fetchMockProjects = () => async (dispatch) => {
  console.log("fetchMockProjects function called");
  console.log("env backend URL =" + process.env.REACT_APP_BACKEND_URL);
  console.log(await getFeaturedProjects());
  dispatch(setLoading(true))
  const projects = await getFeaturedProjects();
  dispatch(setData(projects));
  dispatch(setLoading(false));
}

// export const fetchProjectsFromApi = () => (dispatch) => {
//   dispatch(setLoading(true))
//   dispatch(fetchProjects())
//   dispatch(setLoading(false))
// }

export { fetchMockProjects as fetchProjects }

export const selectData = (state) => state.projects.data
export const selectFeaturedData = (state) => state.projects.featured
export const selectLoading = (state) => state.projects.loading
export const selectError = (state) => state.projects.error

export default projectsSlice.reducer;
