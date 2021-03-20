import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css'


const Header = () => {
    const {type} =useParams();
    console.log(type);
  
    return (
        <div>
            <Navbar className="navBar" collapseOnSelect expand="lg" >
            <div className='container'>
            <Link className="navbar-brand" to="/"> <img src={logo} alt=""/> Travel The Town</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to={`/ride/${type || 'bike'}`}>Destination</Link>
                <Link className="nav-link" to="#">Blog</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="btn btn-danger " to="/login"><span className="nav-button">Log in</span></Link>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
        </div>
    );
};

export default Header;