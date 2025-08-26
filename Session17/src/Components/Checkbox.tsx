import React, { useState } from 'react'

export default function Checkbox() {
    const [hobbies, setHobbies] = useState<string[]>([]);

  return (
    <div>
      <h1>So thich:{hobbies.join(", ")}</h1>
        <input type="checkbox" value={"Di choi"}  onChange={(e) => {
          if (e.target.checked) {
            setHobbies([...hobbies, e.target.value]);
          } else {
            setHobbies(hobbies.filter(hobby => hobby !== e.target.value));
          }
        }}/>Di choi
        <input type="checkbox" value={"Code"} onChange={(e) => {
          if (e.target.checked) {
            setHobbies([...hobbies, e.target.value]);
          } else {
            setHobbies(hobbies.filter(hobby => hobby !== e.target.value));
          }
        }}/>Code
        <input type="checkbox" value={"Boi loi"} onChange={(e) => {
          if (e.target.checked) {
            setHobbies([...hobbies, e.target.value]);
          } else {
            setHobbies(hobbies.filter(hobby => hobby !== e.target.value));
          }
        }}/>Boi loi
        <input type="checkbox" value={"Nhay day"} onChange={(e) => {
          if (e.target.checked) {
            setHobbies([...hobbies, e.target.value]);
          } else {
            setHobbies(hobbies.filter(hobby => hobby !== e.target.value));
          }
        }}/>Nhay day

    </div>
  )
}
