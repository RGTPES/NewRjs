import { Button, Modal, Input, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface list {
  id: number;
  name: string;
  status: boolean;
}

export default function ToDoList() {
  const [list, setList] = useState<list[]>([]);
  const [newJob, setNewJob] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewJob(e.target.value);
  };

  const handleAdd = () => {
    const job = { name: newJob, status: false };
    axios.post("http://localhost:3000/todoList", job).then((res) => {
      setList((prev) => [...prev, res.data]);
      setNewJob("");
    });
  };

  const handleDel = (id: number) => {
    axios.delete(`http://localhost:3000/todoList/${id}`).then(() => {
      setList((prev) => prev.filter((u) => u.id !== id));
    });
  };

  const handleToggle = (id: number, status: boolean) => {
    axios
      .patch(`http://localhost:3000/todoList/${id}`, { status: !status })
      .then((res) => {
        setList((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, status: res.data.status } : item
          )
        );
      });
  };

  const handleEdit = (id: number, name: string) => {
    setEditId(id);
    setEditName(name);
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    axios
      .patch(`http://localhost:3000/todoList/${editId}`, { name: editName })
      .then((res) => {
        setList((prev) =>
          prev.map((item) =>
            item.id === editId ? { ...item, name: res.data.name } : item
          )
        );
        setIsModalOpen(false);
        setEditId(null);
        setEditName("");
        message.success("Cap nhat thanh cong");
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3000/todoList").then((res) => {
      setList(res.data);
    });
  }, []);

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 bg-white shadow rounded p-6">
        <h1 className="text-center text-xl font-bold mb-6">
          Quan ly cong viec
        </h1>

        <div className="flex gap-2 mb-4">
          <Input
            placeholder="Nhap ten cong viec"
            value={newJob}
            onChange={handleChange}
          />
          <Button type="primary" onClick={handleAdd}>
            Them
          </Button>
        </div>

        <ul>
          {list.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-2 border-b"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={item.status}
                  onChange={() => handleToggle(item.id, item.status)}
                />
                <span
                  className={item.status ? "line-through text-gray-500" : ""}
                >
                  {item.name}
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  icon={<EditOutlined />}
                  onClick={() => handleEdit(item.id, item.name)}
                />
                <Button
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => handleDel(item.id)}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 justify-center mx-5 mt-4">
          <Button danger className="flex-1">
            Xoa cong viec hoan thanh
          </Button>
          <Button danger className="flex-1">
            Xoa tat ca cong viec
          </Button>
        </div>
      </div>

      <Modal
        title="Sua cong viec"
        open={isModalOpen}
        onOk={handleUpdate}
        onCancel={() => setIsModalOpen(false)}
      >
        <Input value={editName} onChange={(e) => setEditName(e.target.value)} />
      </Modal>
    </>
  );
}
