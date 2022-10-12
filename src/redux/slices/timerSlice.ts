import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  pomodoroTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15,
  sessions: 4,
  sessionPointer: 4
};

export const timerSlice = createSlice({
  name: 'timerSliceReducer',
  initialState,
  reducers: {
    changePomodoroTime: (state, action: PayloadAction<number>) => {
      state.pomodoroTime = action.payload;
    },

    setShortBreakTime: (state, action: PayloadAction<number>) => {
      state.shortBreakTime = action.payload;
    },
    setLongBreakTime: (state, action: PayloadAction<number>) => {
      state.longBreakTime= action.payload;
    },
    setSessions: (state, action: PayloadAction<number>) => {
      state.sessions= action.payload;
    },
    sessionCounter: (state) => {
      state.sessionPointer -= 1;
    },
    sessionReplacer: (state) => {
      state.sessionPointer = state.sessions
    }
  },
});

export const {
  changePomodoroTime,
  setLongBreakTime,
  setSessions,
  setShortBreakTime,
  sessionCounter,
  sessionReplacer
} = timerSlice.actions;
export default timerSlice.reducer;
