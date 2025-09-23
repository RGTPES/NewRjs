import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useHook";
import { random } from "../slices/Randome.slices";

export default function Random() {
  const dispatch = useAppDispatch();
  const numbers = useAppSelector((state: any) => state.random);
  const handleRandom = () => {
    const value = Math.ceil(Math.random() * 100);
    dispatch(random(value));
  };
  return (
    <div>
      <h1>Random: {numbers}</h1>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}
