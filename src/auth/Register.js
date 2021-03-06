import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'
import APIURL from '../helpers/environment';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${APIURL}/user/register`, {
            method: 'POST',
            body: JSON.stringify({ user: { email: email, password: password } }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return (
        <div>
            <Container>
                <h1>Gather Sign Up</h1>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input required onChange={(e) => setEmail(e.target.value)} name="email" value={email} type='text' pattern='.+@.+.com' title='Must be in standard email format. Ex: youremail@email.com' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input required onChange={(e) => setPassword(e.target.value)} name="password" value={password} type='password' pattern='[a-zA-Z0-9]+' minLength='5' maxLength='15'
                            title='Password must contain one number, one capital letter, and be 5-15 characters in length.' />
                    </FormGroup>
                    <Button type="submit" color='success' >Sign Up</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Register;