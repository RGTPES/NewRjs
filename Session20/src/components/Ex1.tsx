import React, { useState } from 'react'

export default function Ex1() {
    const [inputLength,setInputLength] = useState(0);
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setInputLength(event.target.value.length);
    }
  return (
    <div>
      <h1>Kiem tra do dai chuoi nhap vao</h1>
      <input type="text" placeholder='Nhap vao day' onChange={handleChange} />
      {inputLength > 5 && <p style={{color: 'red'}}>Do dai chuoi nhap vao lon hon 5</p>}
    </div>
  )
}
