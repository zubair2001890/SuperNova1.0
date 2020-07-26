import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counterSlice";
import pageReducer from "./slices/page";
import projectsReducer from "./slices/projects";
import thunk from "redux-thunk";
<<<<<<< HEAD
import { reducer as formReducer } from "redux-form";
=======
>>>>>>> ccbf5ffce662cdf806fd924dcfc1f90c6587b09f

export default configureStore({
  reducer: {
    counter: counterReducer,
    page: pageReducer,
    projects: projectsReducer,
    form: formReducer,
  },
  middleware: [thunk],
});
