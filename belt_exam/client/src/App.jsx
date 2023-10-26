import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddPirate from './components/AddPirate'
import {Routes,Route} from 'react-router-dom'
import AllPirates from './components/AllPirates'
import ShowOne from './components/ShowOne'
import LoginRegister from './components/LoginRegister'
// import './App.css'

function App() {
  const baseUrl = "http://localhost:8000/api/pirates"
  return (
    <>
      <Routes>
      <Route path='/' element={<LoginRegister baseUrl={baseUrl}/>}/>
      <Route path='/pirates/new' element={<LoginRegister baseUrl={baseUrl}/>}/>
      <Route path='/pirates' element={<AllPirates baseUrl={baseUrl}/>}/>
      <Route path='/pirates/:id' element={<ShowOne baseUrl={baseUrl}/>}/>
      </Routes>
    </>
  )
}

export default App
