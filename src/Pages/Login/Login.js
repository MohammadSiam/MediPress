import React from 'react';
import './Login.css'
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleLogin,handleLoginPasswordChange,handleLoginEmailChange,error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    // const handleEmailPasswordLogin = () => {
    //     handleLogin()
    //         .then(result => {
    //             history.push(redirect_uri)
    //         })
    //         .catch(error => {
    //             const errormessage = error.message;
    //         })
    // }
    return (
        <div>
            <Container className="login-content">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  onBlur={handleLoginEmailChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onBlur={handleLoginPasswordChange}/>
                    </Form.Group>
                    {error.message}

                    <Button variant="success" type="submit" onClick={handleLogin}>
                        Sign in
                    </Button>
                    <span> Or</span>
                    <Link to="/signup" className="login-link">
                        Create Account?
                    </Link>
                    <hr />
                    <Button variant="primary" className="signin-btn" onClick={handleGoogleLogin}> Sign in with Google</Button>

                </Form>
            </Container>
        </div>
    );
};

export default Login;