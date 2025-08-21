import React, { useState } from "react";

interface Student {
  fullName: string;
  email: string;
  password: string;
  phone: string;
}

const Exercise08: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setMessage("Email và Mật khẩu không được để trống!");
      return;
    }
    const users: Student[] = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (foundUser) {
      setMessage("Đăng nhập thành công!");
    } else {
      setMessage("Đăng nhập thất bại!");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Đăng nhập tài khoản</h2>
        <div>
          <label htmlFor="email">Email</label><br />
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Mật khẩu</label><br />
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit">Đăng nhập</button>
      </form>

      {message && <p style={{ color: message.includes("thành công") ? "green" : "red" }}>{message}</p>}
    </div>
  );
};

export default Exercise08;