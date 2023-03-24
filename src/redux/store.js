import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './component/language';

export const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
});
