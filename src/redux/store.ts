import { configureStore } from '@reduxjs/toolkit';
import timerSlice from './slices/timerSlice';
import todoInputSlice from './slices/todoInputSlice';
import todosSlice from './slices/todosSlice';
import sessionSlice from './slices/sessionSlice';

export const store = configureStore({
  reducer: {
    timerSlice,
    todoInputSlice,
    todosSlice,
    sessionSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
