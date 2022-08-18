import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { db } from "../../firebase-config";
import {arrayUnion, doc, updateDoc} from "firebase/firestore";

const Main = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateDoc(doc(db, 'questions', 'questionsAsked'), {
                questions: arrayUnion(
                    {
                        name: name,
                        email: email,
                        message: message,
                    }
                )
            })
        } catch (err) {
            console.log(err);
        }
        e.target.reset();
    }

    return (
        <>
            <section className='section-background-style'>
                <Container>
                    <article className='section-article'>
                        <h1 style={{padding:'20px'}}>Przechowaj wszystkie swoje badania w jednym miejscu!</h1>
                        <p>Wszyscy doskonale wiemy, że pozornie te same kontuzje przed 30'stką i po 30'stce mają zupełnie inny wpływ na nasz organizm. Jeżeli zdarzyło Ci się już zbyt mocno kichnąć i poczuć obijające się płuca o klatkę piersiową to warto zacząć interesować się własyn zdrowiem.</p>
                        <p>Monitorowanie zdrowia jest ważnym aspektem życia dlatego strona ta została stworzona, aby przechowywać swoje badania w jednym miejscu do którego będziesz miał dostęp w każdym miejsu na świecie!</p>
                    </article>
                    <Button href='/register' className='landingpage-button' variant="primary" size="lg">Zarejestruj się!</Button>
                </Container>
            </section>
            <section className='czarny-humor'></section>
            <section>
                <section className='container mt-5 d-flex justify-content-center align-items-center' style={{minWidth:'80%'}}>
                    <Card className='contact'>
                        <Card.Title className='text-center'><h4 style={{padding:'20px'}}>Masz pytanie lub chcesz podzielić się opinią? Zapraszam do kontaktu!</h4></Card.Title>
                        <Card.Body>
                            <form className='row g-3' onSubmit={handleSubmit}>
                                <div className='col-md-12'>
                                    <label htmlFor='firstName' className='form-label'>Imię</label>
                                    <input onChange={e => {setName(e.target.value)}} type="text" className='form-control' id='firstName' required/>
                                </div>
                                <div className='col-md-12'>
                                    <label htmlFor='emailInfo' className='form-label'>E-mail</label>
                                    <input onChange={e => {setEmail(e.target.value)}} type="email" className='form-control' id='emailInfo' required/>
                                </div>
                                <div className='col-md-12'>
                                    <label htmlFor='comments' className='form-label'>Miejsce na Twoje pytanie</label>
                                    <textarea onChange={e => {setMessage(e.target.value)}} className='form-control' id="comments" rows="3" required></textarea>
                                </div>
                                <div className='col-md-12'>
                                    <button style={{float:'right'}} type='submit' className='btn btn-primary'>Wyślij</button>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </section>

                <footer className='container footer'>
                    <div className='footer-footer d-flex justify-content-center flex-column align-items-center flex-wrap'>
                        <Navbar.Brand href="#" className='header'>
                            <i className="fa-solid fa-heart-pulse"></i>
                            {' '}
                            Geriatria 30+
                        </Navbar.Brand>
                        <div className='footer-text'> No rights reserved. Designed By Pitura</div>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default Main;
