import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Form from '../components/Form'

const Edit = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [note, setNote] = useState({ title: "", content: ""})
  const [errors, setErrors] = useState({ title: "", content: "" })
  const updateNote = (note) => {
    // e.preventDefault()
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
        <Form  note={note} setter={setNote} errors={errors} operation={updateNote}>Update</Form>
    </div>
  )
}

export default Edit