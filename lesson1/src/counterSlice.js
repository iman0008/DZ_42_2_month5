import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if (state.value > 0) state.value -= 1; // Ограничение: не меньше 0
        },
        incrementBy10: (state) => {
            state.value += 10;
        },
        decrementBy10: (state) => {
            state.value = state.value >= 10 ? state.value - 10 : 0; // Ограничение: не меньше 0
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

export const { increment, decrement, incrementBy10, decrementBy10, reset } = counterSlice.actions;

export default counterSlice.reducer;
