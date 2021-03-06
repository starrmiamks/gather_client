import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify({ user: { email: email, password: password } }),
            headers: new Headers({
                'Content-Type': 'application/json'

            })
        }).then((response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
        })
    }

    return (
        <div>
            <Container>
                <h1>Gather Login</h1>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input required onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input required onChange={(e) => setPassword(e.target.value)} name="password" value={password} type='password' />
                    </FormGroup>
                    <Button type="submit" color='success'>Login</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Login;