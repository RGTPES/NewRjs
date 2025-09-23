import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useHook";
import { increase, decrease, reset } from "../slices/CounterSlice";

export default function Counter() {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const handleIncrease = () => {
    dispatch(increase());
  };
  const handleDecrease = () => {
    dispatch(decrease());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div>
      <h2>Counter {value}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
