import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <div>
                        <Navbar.Brand as={Link} to="/home">MediPress</Navbar.Brand>
                    </div>
                    <div>
                        <Nav className="me-auto links">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                            <Nav.Link as={Link} to="/appointment">Appointment</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            {
                                user.email ?
                                    <Button onClick={logOut} variant="primary">Log out</Button> :
                                    <Nav.Link as={Link} to="/login">
                                        <Button variant="primary">Login</Button>
                                    </Nav.Link>
                            }
                            <Navbar.Text>
                                {
                                    user.email && <img className="login-photo" src={user.photoURL} alt="" />
                                }
                            </Navbar.Text>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;