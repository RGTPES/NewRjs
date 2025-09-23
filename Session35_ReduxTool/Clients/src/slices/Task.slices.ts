import {   createSlice } from "@reduxjs/toolkit";
import { getAllTask } from "../apis/task.api";



 type Task = {
    id:number,
    name:string,
    status:"ACTIVE" | "INACTIVE"
}

 type initialStateType = {
 status:"idle"|"pending"|"Success"|"Failed",
 data:[],
    error:null|undefined|string,
}
const initialState:initialStateType = {
    status:"idle",
     data: [] ,
    error:null,
}
const TaskSlice = createSlice({
    name: "task",
    initialState,
    reducers:{

    },
    extraReducers(builder) {
        builder.addCase(getAllTask.pending, (state) =>{
            state.status = "pending"
        })
        .addCase(getAllTask.fulfilled, (state,action) =>{
            state.status = "Success"
            state.data = action.payload
        })
        .addCase(getAllTask.rejected,(state,action)=>{
            state.status = "Failed"
            state.error = action.error.message
        })
    }
})
export default TaskSlice.reducer;
