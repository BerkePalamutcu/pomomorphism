import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface inputState {
  inputIsOn: boolean;
}

const initialState: inputState = {
  inputIsOn: false,
};

export const todoInputSlice = createSlice({
  name: 'inputSlice',
  initialState,
  reducers: {
    toggleInputReducer: (state, action: PayloadAction<boolean>) => {
      state.inputIsOn = action.payload;
    },
  },
});

export const { toggleInputReducer } = todoInputSlice.actions;
export default todoInputSlice.reducer;
