import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import AddTest from "./AddTest";
import ListComponent from "./ListComponent";


function List( {loggedIn} ) {

    return (
        <Card className='container ' style={{height: '80vh', padding:'0', overflow:'auto', marginTop:'3rem'}}>
            <Card.Header className='text-center d-flex justify-content-between' style={{fontSize:'2rem'}}>
                <h3>Lista badań </h3>
                <AddTest loggedIn={loggedIn}/>
            </Card.Header>
            <Card.Header className='' style={{fontSize:'1.5rem'}}>Nadchodzące badanie: (nazwa + termin)</Card.Header>
            <ListGroup variant="flush">
                <Accordion alwaysOpen>
                    <ListComponent loggedIn={loggedIn}/>
                </Accordion>
            </ListGroup>
        </Card>
    )
}

export default List;
