import { createSlice } from "@reduxjs/toolkit";

const RandomeNumber: number[] = [];

const RandomSlice = createSlice({
  name: "random",
  initialState: RandomeNumber,
  reducers: {
    random(state, action) {
      state.push(action.payload);
    },
  },
});

export default RandomSlice.reducer;
export const { random } = RandomSlice.actions;
