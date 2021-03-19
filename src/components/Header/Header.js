import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className='container'>
            <Link className="navbar-brand" to="/">React-Bootstrap</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/">Destination</Link>
                <Nav.Link href="#features">Blog</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
                <Link to="/login"><button className="btn btn-danger">Log in</button></Link>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
        </div>
    );
};

export default Header;