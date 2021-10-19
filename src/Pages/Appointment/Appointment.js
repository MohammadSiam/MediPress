import React from 'react';
import dct from '../../Images/dctr.png';
import { Form, Button, Container } from 'react-bootstrap';
import './Appointment.css'

const Appointment = () => {
    return (
        <Container>
            <div className="appointment-content">
                <div className="left-appointment">
                    <h4>Appointment Form</h4>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="name" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="phone" placeholder="Phone Number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="name" placeholder="Patient Number" />
                        </Form.Group>


                        <div className="date">
                            <div>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Date Form</Form.Label>
                                    <Form.Control type="date" placeholder="Date Form" />
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Date To</Form.Label>
                                    <Form.Control type="date" placeholder="Date To" />
                                </Form.Group>
                            </div>
                        </div>

                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="right">
                    <img src={dct} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Appointment;