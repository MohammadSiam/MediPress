import React from 'react';
import { Container } from 'react-bootstrap';
import AvilableService from './AvilableService/AvilableService';
import Grettings from './Grettings/Grettings';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Container>
                <Grettings></Grettings>
                <AvilableService></AvilableService>
            </Container>
        </div>
    );
};

export default Home;