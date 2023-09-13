import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const CreateAuthor = () => {

    const navigate = useNavigate()
    const [author, setAuthor] = useState({ name: "" })
    const [errors, setErrors] = useState({ name: "" })

    const createAuthor = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8003/api/authors', author)
            .then(response => {
                console.log(response.data)
                navigate('/')
            })
            .catch(error => {
                // console.log("Errors from Backend", error.response.data);
                // console.log(Object.keys(error.response.data));
                const errs = { name: "" }
                for (let key of Object.keys(error.response.data)) {
                    // console.log(key, "*****", error.response.data[key].message);
                    errs[key] = error.response.data[key].message
                    // setErrors({...errors,[key]:error.response.data[key].message})
                }
                console.log("ERRORS ", errs);
                setErrors({ ...errors, ...errs })
            })
    }
    return (
        <>
        <Link to='/'>Back</Link>
            <div>CreateAuthor</div>
            <form onSubmit={createAuthor}>
                <div className="form-group mb-3">
                    <label htmlFor="">Name</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setAuthor({ ...author, name: e.target.value })}
                        value={author.name}
                    />
                    {errors.name && <span className='text-danger h5'> {errors.name}</span>}
                </div>
                <button>Submit</button> <Link to='/'>Cancel</Link>
            </form>
        </>

    )
}

export default CreateAuthor