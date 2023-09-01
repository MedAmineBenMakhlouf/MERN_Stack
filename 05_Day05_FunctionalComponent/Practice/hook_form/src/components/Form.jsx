import React, { useState } from 'react'
import Show from './Show';

const Form = () => {
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const formHandler = (event) => {

    }
    return (
        <>
            <form onSubmit={formHandler}>
                <p>First Name: <input type="text" name="first_name" id="first_name" 
                onChange={(e)=> {setFirst_name(e.target.value)}}
                value={first_name}
                /></p>

                <p>Last Name: <input type="text" name="last_name" id="last_name" 
                onChange={(e)=> {setLast_name(e.target.value)}}
                value={last_name}
                /></p>

                <p>Email: <input type="text" name="email" id="email" 
                onChange={(e)=> {setEmail(e.target.value)}}
                value={email}
                /></p>
                
                <p>Password: <input type="password" name="password" id="password" 
                onChange={(e)=> {setPassword(e.target.value)}}
                value={password}
                /></p>

                <p>Confirm Password: <input type="password" name="confirm_password" id="confirm_password"/></p>
            </form>
            <Show first_name={first_name} last_name={last_name} email={email} password={password}/>
        </>
    )
}

export default Form