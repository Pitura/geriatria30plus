import React, { useState } from 'react';
import { Form, Button, Card} from "react-bootstrap";
import Container from "react-bootstrap/Container";


function Login() {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        console.log('test');
    }

    return (
    <>
        <Container className='d-flex  align-items-center justify-content-center' style={{minHeight: '80vh'}}>
            <Card className='w-100' style={{maxWidth:'650px'}}>
                <Card.Body >
                    <h2 className="text-center mb-4">Logowanie</h2>
                    <Form className='container' style={{height:''}} onSubmit={handleLogin}>
                        <Form.Group id='email' >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' required onChange={e => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control type='password' required onChange={e => setPassword(e.target.value)}/>
                        </Form.Group>
                        <div>
                            {error && <div style={{color:'tomato',padding:'10px', margin:'0 auto', alignContent:'center'}}>Błędny login lub hasło!</div>}
                            <Button className='mt-4 float-end btn-lg w-100' type='submit'>Zaloguj</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    </>
    )
}

export default Login;
