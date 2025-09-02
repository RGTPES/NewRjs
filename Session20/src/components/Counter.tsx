import React, { useReducer } from 'react'
const initialState = 0;
function reducer(state: number, action: { type: string }) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}
export default function Counter() {
    const [ count,dispatch] = useReducer(reducer,initialState)
    const handleChange = (type: 'increment' | 'decrement') => {
        dispatch({ type });
    };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => handleChange('increment')}>Increment</button>
      <button onClick={() => handleChange('decrement')}>Decrement</button>
    </div>
  )
}
