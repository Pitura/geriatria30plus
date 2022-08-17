import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from "react-bootstrap/Container";

export default function Profile() {
  return (
      <Container className='d-flex justify-content-center align-items-center ' style={{height:'80vh'}}>
        <Card style={{maxWidth: '90%', minWidth:'80%'}}>
          <Card.Body className='d-flex justify-content-between'>
            <Card.Title>Dane użytkownika</Card.Title>
            <button className='btn btn-sm btn-success'><span>Edytuj dane</span>{' '}<i className="fa-solid fa-gear"></i></button>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><span>Imię:</span><span style={{float:'right'}}>placeholder</span></ListGroup.Item>
            <ListGroup.Item><span>Nazwisko:</span><span style={{float:'right'}}>placeholder</span></ListGroup.Item>
            <ListGroup.Item><span>Płeć:</span><span style={{float:'right'}}>placeholder</span></ListGroup.Item>
            <ListGroup.Item><span>Data urodzenia:</span><span style={{float:'right'}}>placeholder</span></ListGroup.Item>
            <ListGroup.Item><span>Email:</span><span style={{float:'right'}}>placeholder</span></ListGroup.Item>
          </ListGroup>
          <Card.Footer className='d-flex justify-content-end'>
            <button disabled={true} className='btn btn-sm btn-danger' ><span>Usuń konto</span>{' '}<i className="fa-solid fa-circle-minus"></i></button>
          </Card.Footer>
        </Card>
      </Container>

  );
}
