import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useHook";
import { getAllTask } from "../apis/task.api";

export default function TaskList() {
  const dispatch = useAppDispatch();
  const { data: tasks, error, status } = useAppSelector((store) => store.task);

  useEffect(() => {
    dispatch(getAllTask());
  }, [dispatch]);

  return (
    <>
      <div>{status === "pending" && <div className="loader"></div>}</div>
      <input type="text" placeholder="Search task..." />
      <button>Search</button>

      <ul>
        {tasks.map((task: any) => (
          <li>{task.data}</li>
        ))}
      </ul>
    </>
  );
}
