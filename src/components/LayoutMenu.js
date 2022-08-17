import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';


export default function LayoutMenu() {
    const IS_LOGGED = sessionStorage.getItem('user');

    function clear() {
        sessionStorage.clear()
    }

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container className='navigation-container'>
                    <Navbar.Brand href="/" className='header'>
                        <i className="fa-solid fa-heart-pulse"></i>
                        {' '}
                        <strong>Geriatria 30+</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link disabled={IS_LOGGED === null} href="/list"><i className="fa-solid fa-list"></i> Twoja lista</Nav.Link>
                            <Nav.Link disabled={IS_LOGGED === null} href="/profile"><i className="fa-solid fa-user"></i> Profil</Nav.Link>
                            {IS_LOGGED === null
                                ?<Nav.Link href='/login'>{'Zaloguj'}</Nav.Link>
                                :<Nav.Link onClick={clear} href='/'>{'Wyloguj'}</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}
