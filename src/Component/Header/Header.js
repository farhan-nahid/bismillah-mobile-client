import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser, ] = useContext(UserContext);
    const {id,name} = loggedInUser;
    return (
        <Navbar bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand as={Link} className="title" to="/">Bismillah Mobile Zone</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/orders">Orders</Nav.Link> 
                                <Nav.Link as={Link} to="/adminPanel">Admin</Nav.Link>
                                <Nav.Link as={Link} to="/deals">Deals</Nav.Link>     
                                {
                                     loggedInUser.name|| loggedInUser.email
                                     ?<Nav.Link  className="user">{name}</Nav.Link>   
                                     : <Button variant="success" as={Link} to="/login" className="btn btn-success" >Log In</Button>  
                                }
                            </Nav>  
                        </Navbar.Collapse>
             </div>
        </Navbar>
    );
};

export default Header;