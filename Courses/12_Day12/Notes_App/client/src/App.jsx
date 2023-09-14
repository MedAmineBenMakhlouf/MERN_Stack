import {Routes, Route, Navigate} from 'react-router-dom'
import Nav from "./components/Nav"
import NoteList from './components/NoteList'
import NoteShow from './components/NoteShow'
import NoteCreate from './components/NoteCreate'
import NoteEdit from './components/NoteEdit'
import Edit from './views/Edit'
import Create from './views/Create'
function App() {
  const baseUrl = "http://localhost:8000/api"
  return (
    <div className="container mt-3">
      <Nav />
      {/* ROUTES */}
      <Routes>
        {/* Notes List route */}
        <Route path='/notes' element={<NoteList/>}/>
        {/* One Note Route */}
        <Route path='/notes/:id' element={<NoteShow baseUrl={baseUrl}/>}/>
        {/* Create Note Route */}
        {/* <Route path='/notes/new' element={<NoteCreate/>}/> */}
        <Route path='/notes/new' element={<Create/>}/>
        {/* Edit Note Route */}
        {/* <Route path='/notes/:id/edit' element={<NoteEdit/>}/> */}
        <Route path='/notes/:id/edit' element={<Edit/>}/>
        {/* GARD ROUTE */}
        <Route path='*' element={<Navigate to='/notes' replace/>}/>
      </Routes>
    </div>
  )
}

export default App
