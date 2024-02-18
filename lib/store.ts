// store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './feature/todo/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
