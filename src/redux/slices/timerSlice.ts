import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    pomodoroTime: 25
}

export const timerSlice = createSlice({
    name: 'timerSliceReducer',
    initialState,
    reducers:{
        changePomodoroTime: (state, action: PayloadAction<number>) => {
            state.pomodoroTime = action.payload
        }
    }
})

export const {changePomodoroTime} = timerSlice.actions;
export default timerSlice.reducer