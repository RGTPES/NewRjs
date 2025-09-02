import React, { useReducer } from 'react'

export default function DemoUseReducer() {
    const initialState = 0;
    const reducer = (state:number, action:string) =>{
        switch(action){
            case 'increase':
                return state + 1;
            case 'decrease':
                return state - 1;
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const HandleIncrease = () => {
        dispatch('increase');
    }
    const HandleDecrease = () => {
        dispatch('decrease');
    }
  return (
    <div>
      <h1>Current State : {state}</h1>
      <button onClick={HandleIncrease}>Increase</button>
      <button onClick={HandleDecrease}>Decrease</button>
    </div>
  )
}
