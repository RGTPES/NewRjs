import axios from "axios";
import React, { useEffect, useState } from "react";

interface User {
  id?: number;
  name?: string;
  dateOfBirth?: string;
  email?: string;
}

export default function ListUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = (id: number) => {
    setIsLoading(true);
    axios
      .delete(`http://localhost:8080/user/${id}`)
      .then(() => {
        setUsers((prev) => prev.filter((u) => u.id !== id));
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8080/user?name_like=${searchValue}`)
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [searchValue]);

  return (
    <>
      <input
        type="text"
        placeholder="Tìm kiếm theo tên"
        onChange={(e) => setSearchValue(e.target.value)}
        style={{ marginBottom: "10px" }}
      />

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Tên</th>
            <th>Ngày Sinh</th>
            <th>Email</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                Đang tải dữ liệu...
              </td>
            </tr>
          ) : users.length > 0 ? (
            users.map((u, index) => (
              <tr key={u.id}>
                <td>{index + 1}</td>
                <td>{u.name}</td>
                <td>{u.dateOfBirth}</td>
                <td>{u.email}</td>
                <td>
                  <button>Sửa</button>
                  <button onClick={() => handleDelete(u.id!)}>Xóa</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                Không có dữ liệu
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={{ marginTop: "10px" }}>
        <button>Prev</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>Next</button>
      </div>
    </>
  );
}
