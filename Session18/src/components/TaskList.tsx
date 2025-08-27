import React from 'react'
import TaskItem from './TaskItem.tsx'
export default function TodoList() {
  return (
    <div>
      <ul className="list-group my-3">
        {/* phan hien thi taskItem */}
        <TaskItem />
        <TaskItem />
      </ul>
    </div>
  )
}
