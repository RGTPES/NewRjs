import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllTask  = createAsyncThunk("task/getAllTask", async () => {
  const response = await axios.get("http://localhost:3000/tasks");
  console.log("API data:", response.data);
  return response.data;
});
