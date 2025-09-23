import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useHook";
import { Change } from "../slices/DarkLight";

export default function DarkLight() {
  const mode = useAppSelector((state) => state.DarkLight);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`${
        mode === "sang" ? "bg-white" : "bg-black"
      } min-h-screen flex items-center justify-center`}
    >
      <button
        onClick={() => dispatch(Change())}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Change
      </button>
    </div>
  );
}
