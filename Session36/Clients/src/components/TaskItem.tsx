import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../hook/useRedux";
import { delTask } from "../redux/slices/TaskList.slices";

interface TaskItemProps {
  id: number;
  name: string;
  status: boolean;
  important: string;
}

const TaskItem = ({ name, status, important, id }: TaskItemProps) => {
  const dispatch = useAppDispatch();
  const handleDel = (id: number) => {
    dispatch(delTask(id));
  };
  return (
    <div className="flex items-center justify-between bg-white shadow rounded-xl p-4 mb-3">
      <div className="flex items-center gap-3">
        <span className={status ? "line-through text-gray-400" : ""}>
          {name}
        </span>
        <span
          className={`${
            important === "HIGH" ? "bg-red-500" : "bg-orange-500"
          } text-white text-xs px-2 py-1 rounded-full`}
        >
          {important}
        </span>
      </div>

      <div className="flex gap-3 text-lg">
        <DeleteOutlined
          className="text-red-500 cursor-pointer"
          onClick={() => handleDel(id)}
        />
        <EditOutlined className="text-blue-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default TaskItem;
