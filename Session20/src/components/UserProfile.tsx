import React, { useState } from 'react'

export default function UserProfile() {
    const [form,setForm] = useState({
        name: '',
        email: ''
    });
    const [submitted,setSubmitted] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };
    const submit = () => {
        if (form.name && form.email) {
            setSubmitted(true);
        }
    }
  return (
    <div>
        <h1>Thong tin nguoi dung</h1>
        <input type="text"  placeholder='Ho va ten' name='name' onChange={handleChange}/>
        <br />
        <input type="text"  placeholder='Nhap email' name='email' onChange={handleChange}/>
        <button onClick={submit}>Gui</button>
        {submitted && 
        <div>
            Ten: {form.name}
            <br />
            Email: {form.email}
        </div>
        }
    </div>
  )
}
