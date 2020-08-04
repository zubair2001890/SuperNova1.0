import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counterSlice";
import pageReducer from "./slices/page";
import projectsReducer from "./slices/projects";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import profileReducer from "./slices/profile";

export default configureStore({
  reducer: {
    counter: counterReducer,
    page: pageReducer,
    projects: projectsReducer,
    form: formReducer,
    profile: profileReducer,
  },
  middleware: [thunk],
});
