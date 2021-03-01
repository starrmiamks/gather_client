import React, { useState } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:3000/user/register", {
            method: 'POST',
            body: JSON.stringify({user:{email: email, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => response.json()
        ).then((data)=>{
            props.updateToken(data.sessionToken)
        })
        }
        
    return(
        <div>
            <h1>Register</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} type='text' pattern='.+@.+.com' title='Must be in standard email format. Ex: youremail@email.com'/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value ={password}type='password' pattern='[a-zA-Z0-9]+' minLength='5' maxLength='15'
                title='Password must contain one number, one capital letter, and be 5-15 characters in length.'/>
                </FormGroup>
                <Button type="submit" color='success' >Register</Button>
            </Form>
        </div>
    )
}

export default Register;