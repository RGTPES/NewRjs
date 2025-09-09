import React from 'react'
type User = {
    id?: number;
    name?: string;
    email?: string;
}
export default function Ex1({name}: User) {
  return (
    <div>
      <h1>Ho va Ten : {name}</h1>
    </div>
  )
}
