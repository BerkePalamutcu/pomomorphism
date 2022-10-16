import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface sessions {
    currentSession: string
}

const initialState: sessions = {
    currentSession: "Pomodoro"
}

export const sessionSlice = createSlice({
    name: 'sessionSlice',
    initialState,
    reducers: {
        changeSession: (state, action: PayloadAction<string>) => {
            state.currentSession = action.payload
        }
    }
})

export const {changeSession} = sessionSlice.actions
export default sessionSlice.reducer