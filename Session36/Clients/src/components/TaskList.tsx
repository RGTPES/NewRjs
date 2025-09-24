import { useEffect } from "react";
import TaskItem from "./TaskItem";
import { getAllTask } from "../apis/Task.apis";
import { useAppDispatch, useAppSelector } from "../hook/useRedux";

const TaskList = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((store) => store.tasks);

  useEffect(() => {
    dispatch(getAllTask());
  }, [dispatch]);

  console.log("Tasks from Redux:", data);

  if (!data || data.length === 0) {
    return <p className="text-gray-500">Không có task nào</p>;
  }

  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center py-4">
          <div className="w-6 h-6 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-2 text-green-500">Loading...</span>
        </div>
      )}

      {data.map((task: any) => (
        <TaskItem
          key={task.id}
          id={task.id}
          name={task.name}
          status={task.status}
          important={task.important}
        />
      ))}
    </div>
  );
};

export default TaskList;
