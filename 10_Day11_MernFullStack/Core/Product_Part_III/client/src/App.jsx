import { useState } from 'react'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import FormPerson from './components/FormPerson'
import ShowPerson from './components/ShowPerson'
import EditPerson from './components/EditPerson'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/api/products/show/:id' element={<ShowPerson/>}/>
        <Route path='/api/products/edit/:id' element={<EditPerson/>}/>
        <Route path='/' element={<FormPerson/>} />
      </Routes>
    </>
  )
}

export default App
