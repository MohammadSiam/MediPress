import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import './Signup.css';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
    const { signInUsingGoogle,email,password,handlePasswordChange,handleEmailChange,handleRegistration,error } = useAuth();    
    const history=useHistory();
    return (
        <div>
            <Container className="account-content">
                <h4>Create an Account</h4>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <br />
                            <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailChange} required />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <br />
                            <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange} required />
                        </Form.Group>
                    </Row>
                    <div className="text-danger">{error}</div>
                    <br />
                    
                    <Button variant="success" type="submit" onClick={handleRegistration}>
                        Sign up
                    </Button>

                    <Link to="/login" className="login-link"> Already Have an Account</Link>
                    <hr />
                    <center>Or</center>
                    <Button variant="primary" className="signin-btn" onClick={signInUsingGoogle}> Sign in with Google</Button>
                </Form>
            </Container>
        </div>
    );
};

export default Signup;