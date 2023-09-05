import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const MyForm = () => {
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [first_nameError, setFirst_nameError] = useState('');
    const [last_nameError, setLast_nameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirm_passwordError, setConfirmPasswordError] = useState('');

    const handleFirstName = (e) => {
        setFirst_name(e.target.value);
        if (e.target.value.length < 1) {
            setFirst_nameError("First Name is required!");
        } else if (e.target.value.length < 3) {
            setFirst_nameError("First Name must be 3 characters or longer!");
        } else {
            setFirst_nameError("");
        }
    }
    const handleLastName = (e) => {
        setLast_name(e.target.value);
        if (e.target.value.length < 1) {
            setLast_nameError("Last Name is required!");
        } else if (e.target.value.length < 3) {
            setLast_nameError("Last Name must be 3 characters or longer!");
        } else {
            setLast_nameError("");
        }
    }
    const handleEmail = (e) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isValidEmail = emailRegex.test(e.target.value);
        setEmail(e.target.value);
        setIsValid(isValidEmail);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if (e.target.value.length < 3) {
            setPasswordError("Password must be 3 characters or longer!");
        } else {
            setPasswordError("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (password != e.target.value) { setPasswordError('Passwords do not match!'); }
        else {setPasswordError('')}

        if (e.target.value.length < 1) {
            setConfirmPasswordError("Confirm Password is required!");
        } else if (e.target.value.length < 3) {
            setConfirmPasswordError("Confirm Password must be 3 characters or longer!");
        } else {
            setConfirmPasswordError("");
        }
    }
    return (
        <>
            <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group as={Row} className="mb-3" controlId="first_name">
                    <Form.Label column sm="4">
                        First Name
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="text" name='first_name' placeholder="First Name"
                            onChange={(e)=>handleFirstName(e)} value={first_name} />
                        {
                            first_nameError ?
                                <p style={{ color: 'red' }}>{first_nameError}</p> :
                                ''
                        }
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="last_name">
                    <Form.Label column sm="4">
                        Last Name
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="text" placeholder="Last Name"
                            onChange={(e)=>handleLastName(e)}
                            value={last_name} />
                        {
                            last_nameError ?
                                <p style={{ color: 'red' }}>{last_nameError}</p> :
                                ''
                        }
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="email">
                    <Form.Label column sm="4">
                        Email
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="email" placeholder="Email"
                            onChange={(e)=>handleEmail(e)}
                            value={email} />
                        {
                            isValid
                                ? ''
                                : <p style={{ color: 'red' }}>Invalid email</p>
                        }
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="email">
                    <Form.Label column sm="4">
                        Password
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="password" placeholder="Password"
                            onChange={handlePassword}
                            value={password} />
                        {
                            passwordError ?
                                <p style={{ color: 'red' }}>{passwordError}</p> :
                                ''
                        }
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="email">
                    <Form.Label column sm="4">
                        Confirm Password
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="password" placeholder="Confirm Password"
                            onChange={handleConfirmPassword}
                            value={confirm_password} />
                        {
                            confirm_passwordError ?
                                <p style={{ color: 'red' }}>{confirm_passwordError}</p> :
                                ''
                        }
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}

export default MyForm