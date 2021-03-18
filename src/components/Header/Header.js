import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className='container'>
            <Navbar.Brand  href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">Destination</Nav.Link>
                <Nav.Link href="#features">Blog</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
                <button className="btn btn-danger">Log in</button>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
        </div>
    );
};

export default Header;