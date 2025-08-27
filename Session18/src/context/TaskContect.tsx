import React from 'react'
import TodoList from '../components/TodoList'
import type { Task } from '../interface/Task.interface';

interface TaskContextType {
  tasks: Task[];
  handleAddTask?:(task: Task) => void;
  handleUpdateTask?:(id: number | string ,newTask: Task) => void;
  handleDeleteTask?:(id: number | string) => void;
  handleToggleTask?:(id: number | string) => void;
}

const TaskContext = React.createContext<TaskContextType | undefined>(undefined)
export default function TaskContextProvider() {
  const [tasks,setTasks] = React.useState<Task[]>([])
  return (
    <TaskContext.Provider value={{ tasks }}> 
      <TodoList />
    </TaskContext.Provider>
  )
}
