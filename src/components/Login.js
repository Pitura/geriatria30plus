import React, { useState } from 'react';
import {Modal, Nav, Form, Button } from "react-bootstrap";

function Login() {

    const [login, setLogin] = useState(false)
    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(true);
    }

    return (
        <>
            <Nav.Link onClick={handleShow}>{login ? 'Wyloguj' : 'Zaloguj'}</Nav.Link>

            <Modal show={show} size='lg' aria-labelledby='contained-modal-title-vcenter' centered onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title id='contained-modal-title-vcenter'>Logowanie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='container'>
                        <Form.Group id='email' >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' required/>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control type='password' required/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='col-md-3' style={{marginLeft:'auto', width:'100%'}} type='submit'>Zaloguj</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

//     const [login, setLogin] = useState(false)
//     const [show, setShow] = useState(false);
//
//     function handleShow() {
//         setShow(true);
//     }
//
//     return (
//         <>
//             <Nav.Link onClick={handleShow}>{login ? 'Wyloguj' : 'Zaloguj'}</Nav.Link>
//             <Modal show={show} size='lg' aria-labelledby='contained-modal-title-vcenter' centered onHide={() => setShow(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title id='contained-modal-title-vcenter'>Logowanie</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <section className='container' style={{margin:'2rem 0 2rem 0'}}>
//                         <form className='row g-3'>
//                             <div className='col-md-12'>
//                                 <label htmlFor='login' className='form-label'>Login</label>
//                                 <input type="text" className='form-control' id='login' required/>
//                             </div>
//                             <div className='col-md-12'>
//                                 <label htmlFor='password' className='form-label'>Hasło</label>
//                                 <input type="password" className='form-control' id='password' required/>
//                             </div>
//                         </form>
//                     </section>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <div className='col-md-3'>
//                         <button style={{marginLeft:'auto', width:'100%'}} type='submit' className='btn btn-primary'>Zaloguj</button>
//                     </div>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )
// }

export default Login;
