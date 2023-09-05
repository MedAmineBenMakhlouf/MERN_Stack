import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add_list from './components/Add_list'
import Show_list from './components/Show_list'

function App() {
  const [listOfToDo,setListOfToDo] = useState([
    {content:"Get the Python Belt",isCompleted:true},
    {content:"Go to Mars",isCompleted:false},
    {content:"Get Married",isCompleted:true}
    
  ])
  const deleteTodo = (id) => {
    const filteredTodoList = listOfToDo.filter((todo,idx)=> idx != id)
    setListOfToDo(filteredTodoList)
  }
  const AddToList = (ToDo)=>
  {
    setListOfToDo([...listOfToDo,ToDo])
  }
  return (
    <>
      <Add_list AddToList={AddToList} />
      <Show_list ToDoList={listOfToDo} setListOfToDo={setListOfToDo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
