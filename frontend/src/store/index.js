import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter/counterSlice'
import pageReducer from './slices/page'
import projectsReducer from './slices/projects'
import userReducer from './user'
import thunk from 'redux-thunk'

export default configureStore({
  reducer: {
    counter: counterReducer,
    page: pageReducer,
    projects: projectsReducer,
    user: userReducer,
  },
  middleware: [thunk],
})
