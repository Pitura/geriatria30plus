import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Footer() {
    return (
        <>
            <section className='container czarny-humor'></section>
            <section className='container contact mt-5'>
                <h3><strong>W razie pytań, zapraszam do kontaktu!</strong></h3>
                <form className='row g-3'>
                    <div className='col-md-6'>
                        <label htmlFor='firstName' className='form-label'>Imię</label>
                        <input type="text" className='form-control' id='firstName' required/>
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='lastName' className='form-label'>Nazwisko</label>
                        <input type="text" className='form-control' id='lastName' required/>
                    </div>
                    <div className='col-md-8'>
                        <label htmlFor='emailInfo' className='form-label'>E-mail</label>
                        <input type="email" className='form-control' id='emailInfo' required/>
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor='phoneNumber' className='form-label'>Telefon</label>
                        <input type="text" className='form-control' id='phoneNumber' placeholder='+48 123 456 789'/>
                    </div>
                    <div className='col-md-12'>
                        <label htmlFor='comments' className='form-label'>Miejsce na Twoje pytanie</label>
                        <textarea className='form-control' id="comments" rows="3" required></textarea>
                    </div>
                    <div className='col-md-12'>
                        <button type='submit' className='btn btn-primary'>Wyślij</button>
                    </div>
                </form>
            </section>
            <footer className='container footer'>
                <div className='footer-components'>
                    <Navbar.Brand href="#" className='footer-title'>
                        <i className="fa-solid fa-heart-pulse"></i>
                        {' '}
                        <strong>Geriatria 30+</strong>
                    </Navbar.Brand>
                    <div className='footer-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, voluptates.
                    </div>
                    <div className='footer-images'></div>
                </div>
                <div className='footer-footer'>
                    <Navbar.Brand href="#" className='header'>
                        <i className="fa-solid fa-heart-pulse"></i>
                        {' '}
                        Geriatria 30+
                    </Navbar.Brand>
                    <div className='footer-text'> - No rights reserved. Designed By Pitura</div>
                </div>
            </footer>
        </>
    )
}