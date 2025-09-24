import { Input, Button, Select } from "antd";
import { useAppDispatch, useAppSelector } from "../hook/useRedux";
import { useState } from "react";
import { addTask } from "../redux/slices/TaskList.slices";

const { Option } = Select;

const Add = () => {
  const value = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const [newTask, setNewTask] = useState({
    name: "",
    important: "HIGH",
  });

  const handleAdd = () => {
    dispatch(addTask(newTask));
    setNewTask({ name: "", important: "HIGH" });
  };

  return (
    <div className="flex flex-wrap gap-3 bg-white shadow rounded-xl p-4 mb-4">
      <div className="flex flex-col flex-1">
        <span className="text-xs text-gray-500 mb-1">Công việc mới</span>
        <Input
          placeholder="Nhập công việc"
          className="rounded-lg"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        />
      </div>

      <div className="flex flex-col">
        <span className="text-xs text-gray-500 mb-1">Ưu tiên</span>
        <Select
          value={newTask.important}
          className="min-w-[120px] rounded-lg"
          onChange={(val) => setNewTask({ ...newTask, important: val })}
        >
          <Option value="HIGH">Cao</Option>
          <Option value="MEDIUM">Trung bình</Option>
          <Option value="LOW">Thấp</Option>
        </Select>
      </div>

      <div className="flex flex-col">
        <span className="text-xs text-gray-500 mb-1">&nbsp;</span>
        <Button type="primary" className="rounded-lg px-6" onClick={handleAdd}>
          Thêm
        </Button>
      </div>
    </div>
  );
};

export default Add;
