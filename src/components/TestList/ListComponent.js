import React, {useEffect, useState} from 'react';
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import { db } from "../../firebase-config";
import { getDocs, collection } from 'firebase/firestore';

function ListComponent( {loggedIn} ) {

    const [test, setTest] = useState([]);
    const usersCollectionRef = collection(db, 'users');

    useEffect( () => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            const temp = data.docs.map( doc => ({...doc.data()})).filter( user => user.email === loggedIn)
            setTest(temp);
        }
        getUsers();
    }, [loggedIn]);

    if (test.length <= 0) {

        return <h1>Ładowanie...</h1>
    } else {
        return (

            <>
                {test[0].tests.map( (element, index) => {
                        return (
                            <Accordion.Item key={index} eventKey={index.toString()}>
                                <Accordion.Header>{element.name}</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                        <ListGroup.Item><span>Ostatnie badanie</span><span style={{float:'right'}}>{element.lastTest}</span></ListGroup.Item>
                                        <ListGroup.Item><span>Następne badanie</span><span style={{float:'right'}}>{element.nextTest}</span></ListGroup.Item>
                                        <ListGroup.Item><span>Placówka</span><span style={{float:'right'}}>{element.medBay}</span></ListGroup.Item>
                                        <ListGroup.Item><span>Dodatkowe informacje</span><span style={{float:'right'}}>{element.annotation}</span></ListGroup.Item>
                                        <ListGroup.Item disabled={true}>Ustaw przypomnienie - temat do ewentualnego rozwoju<span style={{float:'right'}}>placeholder</span></ListGroup.Item>
                                        <ListGroup.Item disabled={true}>Dodaj załącznik - temat do ewentualnego rozwoju<span style={{float:'right'}}>placeholder</span></ListGroup.Item>
                                        <ListGroup.Item className='d-flex justify-content-end'>
                                            <button disabled={true} className='btn btn-danger'><span>Usuń badanie</span>{' '}<i className="fa-solid fa-circle-minus"></i></button>
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
