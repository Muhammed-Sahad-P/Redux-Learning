import { createSlice } from "@reduxjs/toolkit";


const kounderSlice = createSlice({
  name: "kounder",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const {increment,decrement,reset} = kounderSlice.actions;
export default kounderSlice.reducer;