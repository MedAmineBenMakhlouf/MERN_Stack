import { useState ,useEffect} from 'react'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import AllJobs from './components/AllJobs'
import axios from 'axios'
import Create from './components/Create'
import ShowJob from './components/ShowJob'
import EditJob from './components/EditJob'
function App() {
  const baseUrl = "http://localhost:8000/api/"
  

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<AllJobs baseUrl={baseUrl}/>} />
        <Route path='/jobs/create' element={<Create baseUrl={baseUrl}/>} />
        <Route path='/jobs/show/:id' element={<ShowJob baseUrl={baseUrl}/>}/>
        <Route path='/jobs/:id/edit' element={<EditJob baseUrl={baseUrl}/>}/>
      </Routes>
    </>
  )
}

export default App
