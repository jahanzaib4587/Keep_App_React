import React from 'react';
import './Header.css'
import { Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import keep_app_logo from './images/keep_app_logo.png';
const Header = (props) => {
    return (
        <>

            <Navbar className="navbar col-lg-12  " >
                <Navbar.Brand href="#" className="navBar_Brand">Keep App</Navbar.Brand>
                <img alt="pic" src={keep_app_logo} height="60" className="logo"></img>
            </Navbar>

        </>
    )
}

export default Header;