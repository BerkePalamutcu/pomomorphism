import { configureStore } from '@reduxjs/toolkit';
import timerSlice from './slices/timerSlice';
import todoInputSlice from './slices/todoInputSlice';
import todosSlice from './slices/todosSlice';
export const store = configureStore({
  reducer: {
    timerSlice,
    todoInputSlice,
    todosSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
