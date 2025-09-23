import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:0
}
const CounterSlice = createSlice({

    name:"counter",
    initialState,
    reducers:{
        increase(state) {
            state.value += 1;
        },
        decrease(state) {
            state.value -= 1;
        },
        reset(state) {
            state.value = 0;
        }
    }

})
export default CounterSlice.reducer;

export  const {increase,decrease,reset} = CounterSlice.actions;