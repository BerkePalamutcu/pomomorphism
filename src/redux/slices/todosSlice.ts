import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface todo {
  id: string;
  todoText: string;
}

const initialState = {
  todoData: [
    { id: '1', todoText: 'slide me left to remove from the list' },
    { id: '2', todoText: 'slide me right to complete' },
    { id: '3', todoText: 'you are amazing you completed the tutorial!' },
  ],
};

export const todosSlice = createSlice({
  name: 'todolistData',
  initialState,
  reducers: {
    postTodo: (state, action: PayloadAction<todo>) => {
      state.todoData = [...state.todoData, action.payload];
    },
  },
});

export const { postTodo } = todosSlice.actions;
export default todosSlice.reducer;
