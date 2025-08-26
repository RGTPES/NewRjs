import React from 'react'
type User = {
    id?: number;
    name?: string;
    email?: string;
}
export default function Ex1({name}: User) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
