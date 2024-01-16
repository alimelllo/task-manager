import { configureStore } from '@reduxjs/toolkit';
import TaskReducers from './Reducers/Settings/Profile/TaskReducers.ts';

export default configureStore({
  reducer: {
    TaskReducers
  },
})