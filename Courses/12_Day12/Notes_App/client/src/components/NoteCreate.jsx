import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const NoteCreate = (props) => {
  const navigate = useNavigate()
  const [note, setNote] = useState({ title: "", content: "", isImportant: false })
  const [errors, setErrors] = useState({ title: "", content: "" })
  const createNote = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/notes', note)
      .then(response => {
        console.log(response.data)
        navigate('/notes')
      })
      .catch(error => {
        // console.log("Errors from Backend", error.response.data);
        // console.log(Object.keys(error.response.data));
        const errs = { title: "", content: "" }
        for (let key of Object.keys(error.response.data)) {
          // console.log(key, "*****", error.response.data[key].message);
          errs[key] = error.response.data[key].message
        //   // setErrors({...errors,[key]:error.response.data[key].message})
        }
        console.log("ERRORS ", errs);
        setErrors({ ...errors, ...errs })
      })
  }
  return (
    <div>
      {/* <h4 className='bg-warning text-danger'>Note From State : {JSON.stringify(note)}</h4>
      <hr />
      <h4 className='bg-secondary text-light'>Backend Errors : {JSON.stringify(errors)}</h4> */}
      <form onSubmit={createNote}>
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
            value={note.isImportant}
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

export default NoteCreate