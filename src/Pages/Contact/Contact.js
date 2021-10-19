import React from 'react';
import hospital from '../../Images/hospital.jpg'
import './Contact.css'
import { Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

    const env = <FontAwesomeIcon icon={faEnvelope} size="1x" />
    const call = <FontAwesomeIcon icon={faPhoneAlt} size="1x" />
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
    return (
        <Container>
            <div className="contact-container">
                <div className="contact-left">
                    <img src={hospital} alt="" />
                </div>

                <div className="contact-right">
                    <Card style={{ width: '24rem', height: '400px',backgroundColor: '#a890d3' }}>
                        <Card.Body>
                            <Card.Title>Quick Contact</Card.Title>
                            <Card.Subtitle className="mb-2">If you have any questions simply use the following contact details.</Card.Subtitle>
                            <Card.Text>
                                <div className="address">
                                    <p>{location} 121, Park Drive, Varick Str New York, NY 10012, USA</p>
                                    <p>{call} +(123) 0200 12345</p>
                                    <p>{env} Mailus@hospitalteam.com</p>
                                    <hr />
                                </div>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    );
};

export default Contact;