import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import FormPerson from './components/FormPerson'
import ShowPerson from './components/ShowPerson'
import Dashbord from './components/Dashbord'

function App() {

  return (
    <>
      <Link to ='/'></Link>
      <Link to ='/api/products/:id'></Link>


      <Routes>
        <Route path='/api/products/:id' element={<ShowPerson/>}/>
        <Route path='/' element={<Dashbord/>} />
      </Routes>
    </>
  )
}

export default App
