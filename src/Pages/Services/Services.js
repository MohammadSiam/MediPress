import React from 'react';
import './Services.css'
import { Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Services = () => {

    const find = <FontAwesomeIcon icon={faUserPlus} size="3x" />
    const call = <FontAwesomeIcon icon={faPhoneAlt} size="3x" />
    return (
        <div>
            <Container className="services-container">
                <div className="left-service">
                    <h2><span className="medipress">Welcome</span> MediPress Hospital</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cumque sed consequatur expedita beatae, dolorem dolor repellendus quis itaque magnam aliquid, molestias laudantium eum ad vitae adipisci fuga quo ex praesentium impedit amet labore eos? Molestiae esse quis accusantium similique commodi eius corporis atque! Vero eligendi quam similique neque facere!</p>
                </div>
                <div className="cards">
                    <div className="card-content">
                        <Card border="info" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    <div>
                                        {find}
                                    </div>
                                    Find Search
                                </Card.Text>
                                <Card.Title><h3>A Doctor</h3> </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card-content">
                        <Card border="info" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    <div>
                                        {call}
                                    </div>
                                    Book Appointment
                                </Card.Text>
                                <Card.Title><tel><h3>+44 12245 12545</h3></tel></Card.Title>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Services;