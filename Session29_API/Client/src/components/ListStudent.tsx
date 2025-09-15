import axios from "axios";
import React, { useEffect, useState } from "react";
interface Student {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  create_at: string;
}
export default function ListStudent() {
  const [student, setStudent] = useState<Student[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/student")
      .then((res) => setStudent(res.data))
      .catch((err) => console.error("Lỗi khi lấy dữ liệu:", err));
  }, []);

  const handleDelete = (id: number) => {
    axios
      .delete(`http://localhost:8080/student/${id}`)
      .then(() => {
        setStudent((prev) => prev.filter((u) => u.id !== id));
      })
      .catch((error) => console.log(error));
  };
  const getStudentById = () => {
    axios
      .get("http://localhost:8080/student/1")
      .then((res) => console.log(res.data))
      .catch(() => console.log("Loi ban ghi"));
  };
  const createStudent = () => {
    const newStudent = {
      id: 7,
      name: "Nguyen Van E",
      email: "nguyenvane@gmail.com",
      address: "Hue",
      phone: "0911112222",
      status: true,
      create_at: "2025",
    };

    axios
      .post("http://localhost:8080/student", newStudent)
      .then((res) => {
        console.log("Tạo thành công:", res.data);
      })
      .catch((err) => {
        console.error("Lỗi khi tạo sinh viên:", err);
      });
  };
  return (
    <>
      {student.map((e) => {
        return (
          <div>
            <span>{e.id}</span>
            <br />
            <span>{e.name}</span>
            <br />
            <span>{e.email}</span>
            <br />
            <span>{e.address}</span>

            <button onClick={() => handleDelete(e.id!)}>Xóa</button>
          </div>
        );
      })}
    </>
  );
}
