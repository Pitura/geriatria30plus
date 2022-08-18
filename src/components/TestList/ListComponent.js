import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

function ListComponent( { test } ) {

    if (test.length <= 0) {
        return <h2 className='text-center'>Ładowanie...</h2>
    }
    if (!test[0].tests) {
        return (
            <h2 className='text-center'>Brak zapisanych badań</h2>
        )
    } else {
        return (
            <>
                {test[0].tests.map((element, index) => {
                    return (
                        <Accordion.Item key={index} eventKey={index.toString()}>
                            <Accordion.Header>{element.name}</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroup.Item><span>Ostatnie badanie</span><span
                                        style={{float: 'right'}}>{element.lastTest}</span></ListGroup.Item>
                                    <ListGroup.Item><span>Następne badanie</span><span
                                        style={{float: 'right'}}>{element.nextTest}</span></ListGroup.Item>
                                    <ListGroup.Item><span>Placówka</span><span
                                        style={{float: 'right'}}>{element.medFacility}</span></ListGroup.Item>
                                    <ListGroup.Item><span>Dodatkowe informacje</span><span
                                        style={{float: 'right'}}>{element.annotation}</span></ListGroup.Item>
                                    <ListGroup.Item disabled={true}>Ustaw przypomnienie - temat do ewentualnego
                                        rozwoju<span style={{float: 'right'}}>placeholder</span></ListGroup.Item>
                                    <ListGroup.Item disabled={true}>Dodaj załącznik - temat do ewentualnego rozwoju<span
                                        style={{float: 'right'}}>placeholder</span></ListGroup.Item>
                                    <ListGroup.Item className='d-flex justify-content-end'>
                                        <button disabled={true} className='btn btn-danger'>
                                            <span>Usuń badanie</span>{' '}<i className="fa-solid fa-circle-minus"></i>
                                        </button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })
                }
            </>
        )
    }
}

export default ListComponent;
