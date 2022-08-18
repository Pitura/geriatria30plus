import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import AddTest from "./AddTest";
import ListComponent from "./ListComponent";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";

function List( {loggedIn, id } ) {

    const [test, setTest] = useState([]);

    useEffect( () => {
        const getUser = async () => {
            const usersCollectionRef = await collection(db, 'users');
            const data = await getDocs(usersCollectionRef);
            setTest(data.docs.map( doc =>
                ({...doc.data()})).filter( user => user.email === loggedIn))
        }
        getUser();

    }, [loggedIn]);

    if (test[0] <= 0) {
        return (
            <Card className='container ' style={{height: '80vh', padding:'0', overflow:'auto', marginTop:'3rem'}}>
                <Card.Header className='text-center d-flex justify-content-between' style={{fontSize:'2rem'}}>
                    <h3>Lista badań </h3>
                    <AddTest loggedIn={loggedIn} user={test} id={id}/>
                </Card.Header>
                <Card.Header className='' style={{fontSize:'1.5rem'}}><span>Nadchodzące badanie:</span> <span style={{float:'right'}}>Ładowanie...</span></Card.Header>
                <ListGroup variant="flush">
                    <Accordion alwaysOpen>
                    </Accordion>
                </ListGroup>
            </Card>
        )
    } else {
        return (
            <>
                <Card className='container ' style={{height: '80vh', padding:'0', overflow:'auto', marginTop:'3rem'}}>
                    <Card.Header className='text-center d-flex justify-content-between' style={{fontSize:'2rem'}}>
                        <h3>Lista badań </h3>
                        <AddTest loggedIn={loggedIn} user={test} id={id}/>
                    </Card.Header>
                    <Card.Header className='' style={{fontSize:'1.5rem'}}>
                        <span>Nadchodzące badanie:</span>
                        <span style={{float:'right'}}>
                            work in progres...
                        </span>
                    </Card.Header>
                    <ListGroup variant="flush">
                        <Accordion alwaysOpen>
                            <ListComponent loggedIn={loggedIn} test={test}/>
                        </Accordion>
                    </ListGroup>
                </Card>
            </>
        )
    }
}

export default List;
