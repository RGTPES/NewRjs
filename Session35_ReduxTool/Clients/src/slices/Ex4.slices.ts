import { createSlice } from "@reduxjs/toolkit";

type ViewMode = "grid" | "list";

const initialState: ViewMode = "list";

const Ex4 = createSlice({
  name: "viewMode",
  initialState,
  reducers: {
    toggleView(state) {
      return state === "list" ? "grid" : "list";
    },
   
  },
});

export const { toggleView } = Ex4.actions;
export default Ex4.reducer;
