import React, { useReducer } from 'react'

export default function RandomNumberReducer() {
    const initialState:number[] = []
    const reducer = (state:number[],action)=>{
        
        
       switch(action.type){
        case 'RANDOM_NUMBER':
            return [...state, action.payload];
       }
        
        return state;


    }
    const [number, dispatch] = useReducer(reducer,initialState)
    const handleRandom =()=>{
        const RandomNumber = Math.floor(Math.random() * 100) ;
        dispatch({
            type: 'RANDOM_NUMBER',
            payload: RandomNumber
        });
    }
    
  return (
    <div>
      <h1>Number:{JSON.stringify(number)}</h1>
      <button onClick={handleRandom}>Random</button>
    </div>
  )
}
