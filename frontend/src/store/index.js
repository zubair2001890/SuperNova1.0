import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counterSlice";
import headerReducer from "./slices/header";

export default configureStore({
  reducer: {
    counter: counterReducer,
    header: headerReducer,
  },
});
