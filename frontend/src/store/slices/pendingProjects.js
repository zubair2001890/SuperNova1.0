import {fetchPendingProjects} from "./middlewareAPI/middlewareAPI"
import { projectsSlice } from "./projects";
import { getPendingProjects } from "./middlewareAPI/fetchAPI";

export const pendingProjectsSlice = createSlice({
    name: "pendingProjects",
    initialState: {
        data: []
    },
    reducers: {
        setData: (state, action) => {
          state.data = action.payload;
        },
    },
    extraReducers: {
        [fetchPendingProjects.fulfilled]: (state, action) => {
            state.pendingProjects = action.payload;
        }
    }
}) // The createSlice() function ends here

export const {setData} = pendingProjectsSlice.actions;

export const fetchPendingProjects = () => async (dispatch) => {
    const projects = await getPendingProjects();
    dispatch(setData(projects));
}

export const selectData = (state) => state.pendingProjects.data;

export default pendingProjectsSlice.reducer;