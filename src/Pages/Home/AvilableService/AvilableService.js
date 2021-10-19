import React from 'react';
import { Card } from 'react-bootstrap';
import './AvilableService.css'

const AvilableService = () => {
    return (
        <div className="section-3">
            <h2>Availabel <span className="medipress">Service</span></h2>
            <div className="av-content">
                <div>
                    <Card border="danger" style={{ width: '18rem' }}>
                        <Card.Header>24/7 Hours</Card.Header>
                        <Card.Body>
                            <Card.Title>Ambulance Service</Card.Title>
                            <Card.Text>
                                ensures the best healthcare service comprise of professional (clinical) service
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card border="warning" style={{ width: '18rem' }}>
                        <Card.Header>24/7 Hours</Card.Header>
                        <Card.Body>
                            <Card.Title>Emergency Service</Card.Title>
                            <Card.Text>
                                Clinical excellence must be the priority for any health care service provider
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Header>24/7 Hours</Card.Header>
                        <Card.Body>
                            <Card.Title>Medical Consultant</Card.Title>
                            <Card.Text>
                                Hospital aims to provide the highest possible level of care by the qualified consultants from India,
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AvilableService;