
import './App.css'
import ListPost from './components/ListPost';
function App() {

  return (
    <>
      <ListPost id={1} title='Tại sao nên học ReactJS' Content='Học ReactJS để đi làm' Author='David' />
       <ListPost id={2} title='Props trong ReactJS' Content='Props giúp truyền dữ liệu từ component con xuống component cha' Author='Linda' />
        <ListPost id={3} title='State trong ReactJS là gì?' Content='State giúp trữ trạng thái dữ liệu bên trong một component' Author='David' />


    </>
  )
}

export default App
