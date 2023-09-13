import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const AllAuthors = () => {
    const Navigate = useNavigate()
    const [authors, setAuthors] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8003/api/authors')
            .then(author => {
                console.log(author.data)
                setAuthors(author.data)
            }
            )
            .catch(serverError => {
                console.log("SERVER ERROR : ", serverError);
            })
    }, [])

    const DeleteHandle = (id) => {
        axios.delete(`http://localhost:8003/api/authors/${id}`)
            .then(response => {
                console.log(response)
                const filteredAuthors = authors.filter(note => note._id != id)
                setAuthors(filteredAuthors)
            })
            .catch(error => console.log(error))
    }
    return (
        <>

            <Link to='/api/create' >Create Author</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>

                    </tr>
                </thead>
            </table>
            {authors.map(p =>
                <table>
                    <tbody  >
                        <tr>
                            <td key={p._id}>{p.name}</td>
                            <td>
                                <Link to={`/api/authors/${p._id}/edit`}>Edit</Link> <button onClick={() => DeleteHandle(p._id)}>delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            )}
        </>
    )
}

export default AllAuthors