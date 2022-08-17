import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function AddTest() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleSubmit(e) {
        e.preventDefault();
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
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nazwa badania</Form.Label>
                                    <Form.Control type="text" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3 date" controlId="date" data-provide="datepicker">
                                    <Form.Label>Ostatnie badanie</Form.Label>
                                    <Form.Control type="date" placeholder="Wpisz datę"/>
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3 date" controlId="date" data-provide="datepicker">
                                    <Form.Label>Następne badanie</Form.Label>
                                    <Form.Control type="date" placeholder="Wpisz datę" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="text">
                                    <Form.Label>Placówka</Form.Label>
                                    <Form.Control type="text" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="text">
                                    <Form.Label>Dodatkowe informacje</Form.Label>
                                    <Form.Control type="text" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <button type='submit' className='btn btn-success d-flex justify-content-between gap-2' ><span  >Dodaj</span>{' '}<i className="fa-solid fa-circle-plus" style={{fontSize:'1.5rem'}}></i></button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddTest;