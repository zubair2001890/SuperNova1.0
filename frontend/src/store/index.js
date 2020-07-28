import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counterSlice";
import pageReducer from "./slices/page";
import projectsReducer from "./slices/projects";
import { reduceProjects } from "./allProjects";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

export default configureStore({
  reducer: {
    counter: counterReducer,
    page: pageReducer,
    projects: projectsReducer,
    form: formReducer,
    allProjects: reduceProjects,
  },
  middleware: [thunk],
});
