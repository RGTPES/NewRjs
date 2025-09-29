import { createSlice } from "@reduxjs/toolkit";
import getAllBook from ""


const initialState = {
    data:[
    ],
    loading:false
}
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(getAllBook.pending,(state)=>{
        state.loading = true ;

    })
  }

});
