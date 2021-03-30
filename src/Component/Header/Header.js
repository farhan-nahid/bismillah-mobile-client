import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand as={Link} to="/">Bismillah Mobile Zone</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/orderedProduct">Orders</Nav.Link> 
                                <Nav.Link as={Link} to="/adminPanel">Admin</Nav.Link>
                                <Nav.Link as={Link} to="/deals">Deals</Nav.Link> 
                                <Button variant="success" as={Link} to="/login" className="btn btn-success" >Log In</Button>   
                            </Nav>  
                        </Navbar.Collapse>
             </div>
        </Navbar>
    );
};

export default Header;