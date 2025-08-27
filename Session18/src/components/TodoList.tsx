import TodoHeader from './TodoHeader'
import TaskEmpty from './TaskEmpty'
import TaskComplete from './TaskComplete'
import TaskList from './TaskList'
import TodoInput from './TodoInput'


export default function TodoList() {
  return (
    <div>
      <div className="container todo-container">
  {/*phan tie de*/}
  <TodoHeader />
  {/*phan todoInput*/}
  <TodoInput />
  {/*phan danh sach todo*/}
 <TaskList/>
  {/* Hiển thị khi chưa có công việc hoàn thành */}
  {/* <div class="text-center text-danger fw-medium">
  Chưa có công việc nào hoàn thành
</div> */}
  {/* Hiển thị khi tất cả công việc hoàn thành */}
  <TaskComplete />
  <TaskEmpty />
</div>
    
    </div>
  )
}
