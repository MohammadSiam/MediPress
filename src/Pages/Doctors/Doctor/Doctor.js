import React from 'react';
import './Doctor.css'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
    const { id, name, image, position } = props.doctor;
    return (
        <div className="doctor-content">
            <Card style={{ width: '20rem', height: '38rem' }}>
                <Card.Img style={{ height: '42rem' }} variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {position}
                    </Card.Text>
                    <Link to={`/doctors/${id}`}>
                        <Button variant="primary">View Details</Button>
                        
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Doctor;