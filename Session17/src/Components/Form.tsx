import React, { use, useState } from 'react'

export default function Form() {
    const [value,setValue] = useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
  return (
    <div>
      <input type="text" onChange={handleChange}/>
      <p>{value}</p>
    </div>
  )
}
