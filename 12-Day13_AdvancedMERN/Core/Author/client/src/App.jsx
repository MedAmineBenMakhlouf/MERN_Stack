import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import { Routes,Route,Navigate } from 'react-router-dom'
import AllAuthors from './components/AllAuthors'
import CreateAuthor from './components/CreateAuthor'
import EditAuthor from './components/EditAuthor'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<AllAuthors />}/>
        <Route path='/api/create' element={<CreateAuthor />}/>
        <Route path='/api/authors/:id/edit' element={<EditAuthor />}/>
        {/* <Route path='*' element={<Navigate to='/' replace/>}/>  */}
      </Routes>
    </>
  )
}

export default App
