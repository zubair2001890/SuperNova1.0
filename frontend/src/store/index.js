import { configureStore } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import counterReducer from './slices/counter/counterSlice'
import pageReducer from './slices/page'
import projectsReducer from './slices/projects'
import profileReducer from './slices/profile'

export default configureStore({
  reducer: {
    counter: counterReducer,
    page: pageReducer,
    projects: projectsReducer,
    profile: profileReducer,
    form: formReducer,
  },
})
