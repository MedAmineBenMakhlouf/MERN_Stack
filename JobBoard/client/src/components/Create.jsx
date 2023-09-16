import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Create = ({baseUrl}) => {
  const navigate = useNavigate()
  const [job, setJob] = useState({ title: "", company: "", remote: false })
  const [errors,setErrors] = useState({title:"",company:""})

  const formHandler =(e)=>{
    e.preventDefault()
    axios.post(baseUrl+"jobs",job)
    .then(res=> {
      
      console.log("id Created",res.data._id)
      navigate(`/Jobs/Show/${res.data._id}`)
      })
    .catch(error => {
      const errs = { title: "", company: "" }
      for (let key of Object.keys(error.response.data.errors)) {
        errs[key] = error.response.data.errors[key].message
      }
      setErrors({ ...errors, ...errs })
    })
  }
  const handleTitle = (e)=>{
    setJob({ ...job, title: e.target.value })
        if (e.target.value.length < 1) {
          return errors["title"] ="The Title is required"
        } else if (e.target.value.length < 2) {
          return errors["title"] ="The Title must be at least three characters"
        } else {
          return errors["title"] =""
        }
  }

  const handleCompany = (e)=>{
    setJob({ ...job, company: e.target.value })
        if (e.target.value.length < 1) {
          return errors["company"] ="Company Name is required"
        } else if (e.target.value.length < 2) {
          return errors["company"] ="The company name must be at least three characters"
        } else {
          return errors["company"] =""
        }
  }
  return (
    <form onSubmit={formHandler}>
      <div className="form-group mb-3">
        <label htmlFor="">Title</label>
        <input type="text" className="form-control"
          onChange={(e) => handleTitle(e)}
          value={job.title}
        />
        {errors.title && <span className='text-danger h5'> {errors.title}</span>}
      </div>
      <div className="form-group mb-3">
        <label htmlFor="">Company</label>
        <input type="text" className="form-control"
          onChange={(e) => handleCompany(e)}
          value={job.company}
        />
        {errors.company && <span className='text-danger h5'> {errors.company}</span>}
      </div>
      <div className="form-group mb-3">
        <input type="checkbox" className='form-check-input mx-3'
          onChange={(e) => setJob({ ...job, remote: e.target.checked })}
          value={job.remote}
        />
        <label className='form-check-label'>Remote ?</label>
      </div>
      <button>Send</button>
    </form>
  )
}

export default Create