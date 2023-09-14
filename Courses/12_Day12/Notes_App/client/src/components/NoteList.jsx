import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './Note'
const NoteList = (props) => {
  const [notes, setNotes] = useState([])
  const deleteNote = (id) => {
    console.log("NOTE ID = ",id, "WILL Be deleted");
    axios.delete(`http://localhost:8000/api/notes/${id}`)
    .then(response=> {
      console.log(response)
      const filteredNotes = notes.filter(note => note._id != id)
      setNotes(filteredNotes)
    })
    .catch(error => console.log(error))
  }
  useEffect(() => {
    axios.get('http://localhost:8000/api/notes')
      .then(serverResponse => {
        console.log("SERVER RESPONSE : ", serverResponse.data);
        setNotes(serverResponse.data)
      })
      .catch(serverError => {
        console.log("SERVER ERROR : ", serverError);
      })
  }, [])
  return (
    <div className=''>
      {/* <h2>{JSON.stringify(notes)}</h2> */}
      {notes.map(note=> <Note key={note._id} note={note} deleteNote={deleteNote}/>)}
      {/* <Note /> */}
    </div>
  )
}

export default NoteList