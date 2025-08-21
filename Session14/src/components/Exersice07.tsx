import React, { useState, useRef } from "react";

interface student{
    fullName:string;
    email:string;
    password:string;
    phone:string;
}

const Exercise07: React.FC = () => {
  const [formData, setFormData] = useState<student>({
    fullName: "",
    email: "",
    password: "",
    phone:"",
  });



const [message, setMessage] = useState<string>("");
  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.password) {
      setMessage("Tên sinh viên, Email và Mật khẩu không được để trống!");
      return;
    }
    const users: student[] = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((user) => user.email === formData.email)) {
      setMessage("Email đã tồn tại!");
      return;
    }
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    setFormData({ fullName: "", email: "", password: "", phone: "", });
    setMessage("Đăng ký tài khoản thành công!");
    nameInputRef.current?.focus();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Đăng ký tài khoản</h2>
        <div className="fullName">
            <label htmlFor="fullName">Ten sinh vien</label><br />
            <input type="text" id="fullName" name="fullName" ref={nameInputRef} value={formData.fullName} onChange={handleChange}/>
        </div>
        <br />
        <div className="email">
            <label htmlFor="email">Email</label><br />
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
        </div>
        <br />
        <div className="password">
            <label htmlFor="password">Mat khau</label><br />
            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
        </div>
        <br />
        <div className="phone">
            <label htmlFor="phone">So dien thoai</label><br />
            <input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <br />
        <button type="submit">Đăng ký</button>
      </form>

      {message && <p style={{ color: message.includes("thành công") ? "green" : "red" }}>{message}</p>}
    </div>
  );
};



export default Exercise07