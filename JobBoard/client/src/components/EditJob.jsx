import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditJob = ({baseUrl}) => {
    const navigate = useNavigate()
    const { id } = useParams()
    console.log(id)
    const [job, setJob] = useState({ title: "", company: "", remote: false, status: "" })
    const [errors, setErrors] = useState({ title: "", company: "" })


    useEffect(() => {
        console.log(baseUrl+'jobs/'+id)
        axios.get(baseUrl+'jobs/'+id)
            .then(res => setJob(res.data))
            .catch(error => console.log(error))
    }, [id])


    const handleTitle = (e) => {
        setJob({ ...job, title: e.target.value })
        if (e.target.value.length < 1) {
            return errors["title"] = "The Title is required"
        } else if (e.target.value.length < 2) {
            return errors["title"] = "The Title must be at least three characters"
        } else {
            return errors["title"] = ""
        }
    }

    const handleCompany = (e) => {
        setJob({ ...job, company: e.target.value })
        if (e.target.value.length < 1) {
            return errors["company"] = "Company Name is required"
        } else if (e.target.value.length < 2) {
            return errors["company"] = "The company name must be at least three characters"
        } else {
            return errors["company"] = ""
        }
    }

    const formEdit = (e) => {
        e.preventDefault()
        axios.put(baseUrl + "jobs/" + id,job)
            .then(res => {
                navigate('/')
            })
            .catch(error => {
                const errs = { title: "", company: "" }
                console.log(Object.keys(error.response.data.errors))
                for (let key of Object.keys(error.response.data.errors)) {
                    errs[key] = error.response.data.errors[key].message
                }
                setErrors({ ...errors, ...errs })
            })
    }
    return (
        <form onSubmit={formEdit}>
            {JSON.stringify(job)}
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
                    checked={job.remote}
                />
                <label className='form-check-label'>Remote ?</label>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="">Status:</label>
                <select className="form-control" onChange={(e) => setJob({ ...job, status: e.target.value })}
                    value={job.status}>
                    <option value="Pending">Pending</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview(s) Scheduled">Interview(s) Scheduled</option>
                    <option value="Interview(s) complete">Interview(s) complete</option>
                </select>
            </div>
            <button>Edit</button>
        </form>
    )
}

export default EditJob