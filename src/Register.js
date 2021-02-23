import React, { useState } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:3000/user/register")
        }

    return(
        <div>
            <h1>Register</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value ={password}/>
                </FormGroup>
                <Button type="submit">Register</Button>
            </Form>
        </div>
    )
}

export default Register