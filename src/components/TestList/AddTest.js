import React, { useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import {db} from "../../firebase-config";

function AddTest( { id } ) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [test, setTest] = useState('brak informacji');
    const [lastTest, setLastTest] = useState('brak informacji');
    const [nextTest, setNextTest] = useState('brak informacji');
    const [medFacility, setMedFacility] = useState('brak informacji');
    const [annotation, setAnnotation] = useState('brak informacji');

    const updateTest = async (e) => {
        e.preventDefault();
        try {
            const userDocRef =  doc(db, 'users', id)

            await updateDoc( userDocRef, {
                tests: arrayUnion(
                    {name: test,
                        lastTest: lastTest,
                        nextTest: nextTest,
                        medFacility: medFacility,
                        annotation: annotation}
                )})
        } catch (err) {
            console.log(err);
        }
        handleClose();
    }

    return (
        <>
            <button onClick={handleShow} className='btn btn-success d-flex justify-content-between gap-2'><span >Dodaj badanie</span>{' '}<i className="fa-solid fa-circle-plus" style={{fontSize:'1.5rem'}}></i></button>
            <Modal show={show} onHide={handleClose} centered style={{minWidth:'80%'}}>
                <Modal.Header closeButton>
                    <Modal.Title>Wpisz badanie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={updateTest}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nazwa badania</Form.Label>
                                    <Form.Control type="text" onChange={e => setTest(e.target.value)}/>
                                    <Form.Text className="text-muted" >
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3 date" controlId="date" data-provide="datepicker">
                                    <Form.Label>Ostatnie badanie</Form.Label>
                                    <Form.Control type="date" placeholder="Wpisz datę" onChange={e => setLastTest(e.target.value)}/>
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3 date" controlId="date" data-provide="datepicker">
                                    <Form.Label>Następne badanie</Form.Label>
                                    <Form.Control type="date" placeholder="Wpisz datę" onChange={e => setNextTest(e.target.value)}/>
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="text">
                                    <Form.Label>Placówka</Form.Label>
                                    <Form.Control type="text" onChange={e => setMedFacility(e.target.value)}/>
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Dodatkowe informacje</Form.Label>
                                    <Form.Control as="textarea" rows={3} onChange={e => setAnnotation(e.target.value)}/>
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <button type='submit' className='btn btn-success d-flex justify-content-between gap-2' style={{float:'right'}}><span  >Dodaj</span>{' '}<i className="fa-solid fa-circle-plus" style={{fontSize:'1.5rem'}}></i></button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddTest;
