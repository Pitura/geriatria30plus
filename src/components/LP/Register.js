import React, {useState} from 'react';
import {Button, Card} from 'react-bootstrap';
import Container from "react-bootstrap/Container";

function Register() {

    // const [newName, setNewName] = useState('');
    // const [newSurname, setNewSurname] = useState('');
    // const [newPhoneNumber, setNewPhoneNumber] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    // const usersCollectionRef = collection(db, 'users');

    // const createUser = async () => {
    //     await addDoc(usersCollectionRef, { email: newEmail, password: newPassword})
    // }




    return (
        <>
            <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '80vh'}}>
                <Card className='w-100' style={{maxWidth:'650px'}}>
                    <Card.Body>
                        <h2 className="text-center mb-4">Rejestracja</h2>
                        <form className='row g-3'>
                            {/*<div className='col-md-12'>*/}
                            {/*    <label htmlFor="firstName" className='form-label'>Imię</label>*/}
                            {/*    <input onChange={e => {setNewName(e.target.value)}}  type="text" className='form-control' id='firstName' required/>*/}
                            {/*</div>*/}
                            {/*<div className='col-md-12'>*/}
                            {/*    <label htmlFor='lastName' className='form-label'>Nazwisko</label>*/}
                            {/*    <input onChange={e => {setNewSurname(e.target.value)}} type="text" className='form-control' id='lastName' required/>*/}
                            {/*</div>*/}
                            <div className='col-md-12'>
                                <label htmlFor='password' className='form-label'>Hasło</label>
                                <input onChange={e => {setNewPassword(e.target.value)}} type="password" className='form-control' id='password' required/>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='emailInfo' className='form-label'>E-mail</label>
                                <input onChange={e => {setNewEmail(e.target.value)}} type="email" className='form-control' id='emailInfo' required/>
                            </div>
                            {/*<div className='col-md-12'>*/}
                            {/*    <label htmlFor='phoneNumber' className='form-label'>Telefon</label>*/}
                            {/*    <input onChange={e => {setNewPhoneNumber(e.target.value)}} type="text" className='form-control' id='phoneNumber' placeholder=''/>*/}
                            {/*</div>*/}
                            <Button type='submit' className='mt-4 float-end btn-lg w-100'>Zarejestruj</Button>
                        </form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Register;
