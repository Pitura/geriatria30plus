import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ModalFooter} from "react-bootstrap";

function Register() {

    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(true);
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
                                <label htmlFor='firstName' className='form-label'>Imię</label>
                                <input type="text" className='form-control' id='firstName' required/>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='lastName' className='form-label'>Nazwisko</label>
                                <input type="text" className='form-control' id='lastName' required/>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='login' className='form-label'>Login</label>
                                <input type="text" className='form-control' id='login' required/>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='password' className='form-label'>Hasło</label>
                                <input type="password" className='form-control' id='password' required/>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='check-password' className='form-label'>Potwierdź hasło</label>
                                <input type="password" className='form-control' id='check-password' required/>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='emailInfo' className='form-label'>E-mail</label>
                                <input type="email" className='form-control' id='emailInfo' required/>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='phoneNumber' className='form-label'>Telefon</label>
                                <input type="text" className='form-control' id='phoneNumber' placeholder='+48 123 456 789'/>
                            </div>
                        </form>
                    </section>
                </Modal.Body>
                <ModalFooter>
                    <div className='col-md-3'>
                        <button style={{marginLeft:'auto', width:'100%'}} type='submit' className='btn btn-primary'>Zarejestruj</button>
                    </div>
                </ModalFooter>
            </Modal>
        </>
    )
}
// fullscreen={fullscreen}
export default Register;