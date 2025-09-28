import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBook  = createAsyncThunk("book/getAllBook", async () => {
  const response = await axios.get("http://localhost:3000/books");
  console.log("API data:", response.data);
   console.log("hi");
   return response.data
});
