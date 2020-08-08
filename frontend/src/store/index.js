import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import counterReducer from "./slices/counter/counterSlice";
import pageReducer from "./slices/page";
import projectsReducer from "./slices/projects";
import thunk from "redux-thunk";
import profileReducer from "./slices/profile";
import { reduceAccount as accountReducer } from "./account";

export default configureStore({
  reducer: {
    counter: counterReducer,
    page: pageReducer,
    projects: projectsReducer,
    form: formReducer,
    profile: profileReducer,
    account: accountReducer,
  },
  middleware: [thunk],
});
