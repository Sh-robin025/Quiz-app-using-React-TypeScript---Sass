import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../asset/images/dummy-logo-5b.png';

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/" className="m-auto">
                    <img src={logo} alt="" height="70" />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavBar;