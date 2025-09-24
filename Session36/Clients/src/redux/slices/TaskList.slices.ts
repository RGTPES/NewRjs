import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllTask = createAsyncThunk("task/getAllTask", async () => {
  const res = await axios.get("http://localhost:3000/tasks");
  return res.data;
});
export const addTask = createAsyncThunk(
  "task/addTask",
  async (task: { name: string; important: string }) => {
    const res = await axios.post("http://localhost:3000/tasks", task);
    return res.data;
  }
);
export const delTask = createAsyncThunk(
  "task/delTask",
  async (id: number) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    return id; 
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    data: [] as any[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTask.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.data.push(action.payload); 
      })
      .addCase(delTask.fulfilled,(state,action)=>{
        state.data= state.data.filter((task) => task.id !== action.payload);
      })
  },
});


export default taskSlice.reducer;
