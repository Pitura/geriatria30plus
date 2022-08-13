import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// const userIcon = <i className="fa-solid fa-user"></i>;

export default function Menu() {
    return (
        <Navbar bg="light" expand="lg">
            <Container className='navigation-container'>
                <Navbar.Brand href="#home" className='header'>
                    <i className="fa-solid fa-heart-pulse"></i>
                    {' '}
                    <strong>Geriatria 30+</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Twoja lista</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Profil</Nav.Link>
                        <Nav.Link href="#link">Zaloguj</Nav.Link>
                        <Nav.Link href="#link">Wyloguj</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

// <NavDropdown title='Użytkownik' id="basic-nav-dropdown" >
//     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//     <NavDropdown.Item href="#action/3.2">
//         Another action
//     </NavDropdown.Item>
//     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//     <NavDropdown.Divider />
//     <NavDropdown.Item href="#action/3.4">
//         Wyloguj
//     </NavDropdown.Item>
// </NavDropdown>