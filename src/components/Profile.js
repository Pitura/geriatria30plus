import React, {useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from "react-bootstrap/Container";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

export default function Profile( { loggedIn } ) {

  const [name, setName] = useState('-');
  const [lastName, setLastName] = useState('-');
  const [gender, setGender] = useState('-');
  const [birth, setBirth] = useState('-');
  const [email, setEmail] = useState('-');

  useEffect( () => {
    const fetchData = async () => {
      let usersList = [];
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        querySnapshot.forEach( doc => {
          usersList.push({ id: doc.id, ...doc.data() })
        });

        function test(usersList) {
          const userData = usersList.filter( user => user.email === loggedIn)
          setName(userData[0].name);
          setLastName(userData[0].lastName);
          setGender(userData[0].gender);
          setBirth(userData[0].birth);
          setEmail(userData[0].email);
        }
        test(usersList);

      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [loggedIn]);

  return (
      <Container className='d-flex justify-content-center align-items-center ' style={{height:'80vh'}}>
        <Card style={{maxWidth: '90%', minWidth:'80%'}}>
          <Card.Body className='d-flex justify-content-between'>
            <Card.Title>Dane użytkownika</Card.Title>
            <button disabled={true} className='btn btn-sm btn-success'><span>Edytuj dane</span>{' '}<i className="fa-solid fa-gear"></i></button>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><span>Imię:</span><span style={{float:'right'}}>{name}</span></ListGroup.Item>
            <ListGroup.Item><span>Nazwisko:</span><span style={{float:'right'}}>{lastName}</span></ListGroup.Item>
            <ListGroup.Item><span>Płeć:</span><span style={{float:'right'}}>{gender}</span></ListGroup.Item>
            <ListGroup.Item><span>Data urodzenia:</span><span style={{float:'right'}}>{birth}</span></ListGroup.Item>
            <ListGroup.Item><span>Email:</span><span style={{float:'right'}}>{email}</span></ListGroup.Item>
          </ListGroup>
          <Card.Footer className='d-flex justify-content-end'>
            <button disabled={true} className='btn btn-sm btn-danger' ><span>Usuń konto</span>{' '}<i className="fa-solid fa-circle-minus"></i></button>
          </Card.Footer>
        </Card>
      </Container>
  );
}
