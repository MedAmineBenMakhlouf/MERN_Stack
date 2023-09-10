import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import FormPerson from './components/FormPerson'
import ShowPerson from './components/ShowPerson'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to ='/'></Link>
      <Link to ='/api/products/:id'></Link>


      <Routes>
        <Route path='/api/products/:id' element={<ShowPerson/>}/>
        <Route path='/' element={<FormPerson/>} />
      </Routes>
    </>
  )
}

export default App
