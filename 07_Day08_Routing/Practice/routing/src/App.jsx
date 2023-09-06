import { useState } from 'react'
import './App.css'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Routes,Route,Link } from 'react-router-dom'
import Home from './components/Home'
import Word from './components/Word'
import WordWithColor from './components/WordWithColor'


function App() {
  
  return (
    <>
      {/* <Link to="/" className='btn btn-info'>Back</Link> */}
      <Link to="/home"></Link>
      <Link to="/hello"></Link>
      <Link to="/"></Link>
      <Routes>
        <Route path={'/home'} element={<Home/>}/>
        <Route path={'/:word'} element={<Word/>}/>
        <Route path={'/:word/:col1/:col2'} element={<WordWithColor/>}/>
      </Routes>
    </>
  )
}

export default App
