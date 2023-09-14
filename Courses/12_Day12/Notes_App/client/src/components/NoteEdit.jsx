import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const NoteEdit = (props) => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [note, setNote] = useState({ title: "", content: ""})
  const [errors, setErrors] = useState({ title: "", content: "" })
  const updateNote = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/notes/${id}`, note)
      .then(response => {
        console.log(response.data)
        navigate('/notes')
      })
      .catch(error => {
        console.log("Errors from Backend", error.response.data);
        console.log(Object.keys(error.response.data));
        const errs = { title: "", content: "" }
        for (let key of Object.keys(error.response.data)) {
          errs[key] = error.response.data[key].message
        }
        console.log(errs);
        setErrors({ ...errors, ...errs })
      })
  }
  useEffect(()=> {
    axios.get(`http://localhost:8000/api/notes/${id}`)
    .then(response => {
      console.log(response);
      setNote(response.data)
    })
    .catch(error => console.log(error))
  }, [id])
  return (
    <div>
      {/* <h4 className='bg-warning text-danger'>Note From State : {JSON.stringify(note)}</h4>
      <hr />
      <h4 className='bg-secondary text-light'>Backend Errors : {JSON.stringify(errors)}</h4> */}
      <form onSubmit={updateNote}>
        <div className="form-group mb-3">
          <label htmlFor="">Title</label>
          <input type="text" className="form-control"
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            value={note.title}
          />
          {errors.title && <span className='text-danger h5'> {errors.title}</span>}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="">Content</label>
          <textarea className="form-control"
            onChange={(e) => setNote({ ...note, content: e.target.value })}
            value={note.content}
          ></textarea>
          {errors.content && <span className='text-danger h5'> {errors.content}</span>}

        </div>
        <div className="form-group mb-3">
          <input type="checkbox" className='form-check-input mx-3'
            onChange={(e) => setNote({ ...note, isImportant: e.target.checked })}
            checked={note.isImportant}
          />
          <label className='form-check-label'>Is Important ?</label>
        </div>
        <div className='text-center'>
          <button className='btn btn-outline-primary w-50'>Create</button>
        </div>
      </form>
    </div>
  )
}

export default NoteEdit