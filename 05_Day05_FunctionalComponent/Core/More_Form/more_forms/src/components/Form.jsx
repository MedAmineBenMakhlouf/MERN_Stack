import React,{useState} from 'react'

const Form = () => {
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [first_nameError, setFirst_nameError] = useState('');
    const [last_nameError, setLast_nameError] = useState('');
    const [emailError, setEmailError] = useState('');
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
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if (e.target.value.length < 3) {
            setEmailError("Email must be 3 characters or longer!");
        } else {
            setEmailError("");
        }
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
            <form onSubmit={(e) => e.preventDefault()}>
                <p>First Name: <input type="text" name="first_name" id="first_name"
                    onChange={handleFirstName} value={first_name} />
                    {
                        first_nameError ?
                            <p style={{ color: 'red' }}>{first_nameError}</p> :
                            ''
                    }
                </p>

                <p>Last Name: <input type="text" name="last_name" id="last_name"
                    onChange={handleLastName}
                    value={last_name} />
                    {
                        last_nameError ?
                            <p style={{ color: 'red' }}>{last_nameError}</p> :
                            ''
                    }
                </p>

                <p>Email: <input type="text" name="email" id="email"
                    onChange={handleEmail}
                    value={email} />
                    {
                        emailError ?
                            <p style={{ color: 'red' }}>{emailError}</p> :
                            ''
                    }
                </p>

                <p>Password: <input type="password" name="password" id="password"
                    onChange={handlePassword}
                    value={password} />
                    {
                        passwordError ?
                            <p style={{ color: 'red' }}>{passwordError}</p> :
                            ''
                    }
                </p>

                <p>Confirm Password: <input type="password" name="confirm_password" id="confirm_password"
                    onChange={handleConfirmPassword}
                    value={confirm_password}/>
                    {
                        confirm_passwordError ?
                            <p style={{ color: 'red' }}>{confirm_passwordError}</p> :
                            ''
                    }
                    </p>
                    <input type="submit" value="Send" />
            </form>
        </>
    )
}

export default Form