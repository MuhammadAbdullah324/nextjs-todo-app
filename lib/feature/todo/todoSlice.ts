import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  todo: string;
  completed:boolean
  userId:number
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.unshift(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<{ id: string; todo: string }>) => {
      const { id, todo } = action.payload;
      const todoToUpdate = state.find(todo => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.todo = todo;
      }
    },
    completeTodo: (state, action: PayloadAction<string>) => {
      const todoId = action.payload;
      const todoToComplete = state.find(todo => todo.id === todoId);
      if (todoToComplete) {
        todoToComplete.completed = !todoToComplete.completed;

      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo,completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
