import React, { useEffect, useState } from 'react'

export default function PageTitle() {
    const [text,setText] = useState("");
    useEffect(() => {
        document.title = text;
    }, [text]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
  return (
    
    <div>
      <h1>Chao mung den voi trang cua chung toi</h1>
      <input type="text" placeholder='Nhap ten trang' onChange={handleChange} />
      <p>Tieu de trang se thay doi khi ban nhap</p>
    </div>
  )
}
