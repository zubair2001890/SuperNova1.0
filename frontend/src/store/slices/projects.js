import { createSlice } from "@reduxjs/toolkit";
import projectsMockData from "../../mockData/projects";

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
});

export const { setData, setLoading, setError } = projectsSlice.actions;

export const fetchProjects = () => (dispatch) => {
  dispatch(setLoading(true));
  setTimeout(() => {
    dispatch(setData(projectsMockData));
    dispatch(setLoading(false));
  }, 1000);
};

export const selectData = (state) => state.data;
export const selectLoading = (state) => state.loading;
export const selectError = (state) => state.error;

export default projectsSlice.reducer;
