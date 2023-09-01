import React from 'react'

const Show = (props) => {
    return (
        <div>

            <p>First Name: {props.first_name}</p>
            <p>Last Name: {props.last_name}</p>
            <p>Email: {props.email}</p>
            <p>Password: {props.password}</p>
        </div>
    )
}

export default Show