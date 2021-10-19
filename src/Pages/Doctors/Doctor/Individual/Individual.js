import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Individual.css'

const Individual = () => {

    const { id } = useParams();
    // const [indiv, setIndiv] = useState([]);

    // useEffect(() => {
    //     fetch('./description.json')
    //         .then(res => res.json())
    //         .then(data => setIndiv(data))
    // }, [])



    return (
        <div>
            <Container className="individual-dctr">
                <Card className="text-center">
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Doctor Details: {id}</Card.Title>
                        <Card.Text>
                            Doctor Details are comming soon
                        </Card.Text>
                        <Link to="/doctors">
                            <Button variant="primary">Back</Button>
                        </Link>
                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>


            </Container>
        </div>
    );
};

export default Individual;