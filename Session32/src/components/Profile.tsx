import React from "react";
import { useDispatch } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();

  const handleLog = () => {
    dispatch({ type: "LOG" });
  };

  return (
    <div>
      <button onClick={handleLog}>Log ra USER</button>
    </div>
  );
}
