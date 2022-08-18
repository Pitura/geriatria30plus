import React, { useState } from 'react';
import { Form, Button, Card} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { app } from "../firebase-config";
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth(app);

    function signIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                sessionStorage.setItem('user', user.email);
                sessionStorage.setItem('id', user.uid);

                alert('Zalogowano pomyślnie');
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                alert(errorCode);
                console.log(errorCode);
            })
    }

    return (
    <>
        <Container className='d-flex  align-items-center justify-content-center' style={{minHeight: '80vh'}}>
            <Card className='w-100' style={{maxWidth:'650px'}}>
                <Card.Body >
                    <h2 className="text-center mb-4">Logowanie</h2>
                    <h5 style={{color:'blue', textAlign:'center'}}>Przykładowe konto: maklowicz@gmail.com / 123123</h5>
                    <Form className='container' style={{height:''}} onSubmit={signIn} >
                        <Form.Group id='email' >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' required onChange={e => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control type='password' required onChange={e => setPassword(e.target.value)}/>
                        </Form.Group>
                        <div>
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
