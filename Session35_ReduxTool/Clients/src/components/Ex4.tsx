import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useHook";
import { toggleView } from "../slices/Ex4.slices";

const data = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
];

export default function Ex4() {
  const mode = useAppSelector((state) => state.viewMode);
  const dispatch = useAppDispatch();

  return (
    <div className="p-6">
      <button
        onClick={() => dispatch(toggleView())}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        {mode === "list" ? "Chuyển sang Grid" : "Chuyển sang List"}
      </button>

      {mode === "list" ? (
        <ul className="space-y-2">
          {data.map((item) => (
            <li
              key={item.id}
              className="flex justify-between p-4 border rounded"
            >
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="p-4 border rounded shadow text-center bg-gray-100"
            >
              <h2 className="font-bold">{item.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
