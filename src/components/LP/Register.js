import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../firebase-config";


function Register() {

    const [show, setShow] = useState(false);
    function handleShow() {
        setShow(true);
    }

    const [newName, setNewName] = useState('');
    const [newSurname, setNewSurname] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPhoneNumber, setNewPhoneNumber] = useState(0);
    const [newPassword, setNewPassword] = useState('');

    const usersCollectionRef = collection(db, 'users');

    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: newName, surname: newSurname, email: newEmail, phone: newPhoneNumber, password: newPassword})
        setShow(false);
    }


    return (
        <>
            <Button onClick={handleShow} className='landingpage-button' variant="primary" size="lg">Zarejestruj się!</Button>

            <Modal show={show} size='lg' aria-labelledby='contained-modal-title-vcenter' centered onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title id='contained-modal-title-vcenter'>Rejestracja</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <section className='container' style={{margin:'2rem 0 2rem 0'}}>
                        <form className='row g-3'>
                            <div className='col-md-12'>
                                <label htmlFor="firstName" className='form-label'>Imię</label>
                                <input onChange={event => {setNewName(event.target.value)}}  type="text" className='form-control' id='firstName' required/>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='lastName' className='form-label'>Nazwisko</label>
                                <input onChange={event => {setNewSurname(event.target.value)}} type="text" className='form-control' id='lastName' required/>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='password' className='form-label'>Hasło</label>
                                <input onChange={event => {setNewPassword(event.target.value)}} type="password" className='form-control' id='password' required/>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='emailInfo' className='form-label'>E-mail</label>
                                <input onChange={event => {setNewEmail(event.target.value)}} type="email" className='form-control' id='emailInfo' required/>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='phoneNumber' className='form-label'>Telefon</label>
                                <input onChange={event => {setNewPhoneNumber(event.target.value)}} type="text" className='form-control' id='phoneNumber' placeholder=''/>
                            </div>
                        </form>
                    </section>
                </Modal.Body>
                <Modal.Footer>
                    <div className='col-md-3'>
                        <button onClick={createUser} style={{marginLeft:'auto', width:'100%'}} type='submit' className='btn btn-primary'>Zarejestruj</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Register;
