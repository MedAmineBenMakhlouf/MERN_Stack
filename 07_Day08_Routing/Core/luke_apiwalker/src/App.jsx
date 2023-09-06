import { useState } from 'react'
import './App.css'
import axios from 'axios'
import {Routes,Route,Link} from 'react-router-dom'
import FormComponent from './components/FormComponent'

function App() {
  return (
    <>
    <Link to='/'></Link>
    <Routes>
    <Route path='/' element={<FormComponent/>}/>
    </Routes>
    </>
  )
}

export default App
