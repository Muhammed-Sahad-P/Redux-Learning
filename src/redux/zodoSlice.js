import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  zodos: [],
};

export const zudoSlice = createSlice({
  name: "zodos",
  initialState,
  reducers: {
    addZodo: (state, action) => {
      state.zodos.push({ id: Date.now(), title: action.payload });
    },
    deleteZodo: (state, action) => {
      state.zodos = state.zodos.filter((zodo) => zodo.id !== action.payload);
    },
  },
});

export const {addZodo,deleteZodo}= zudoSlice.actions;
export default zudoSlice.reducer;