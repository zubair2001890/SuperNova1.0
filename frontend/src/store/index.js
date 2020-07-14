import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counterSlice";
import pageReducer from "./slices/page";

export default configureStore({
  reducer: {
    counter: counterReducer,
    page: pageReducer,
  },
});
