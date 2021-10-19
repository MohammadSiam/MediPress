import React from 'react';
import { Button } from 'react-bootstrap';
import './Grettings.css'

const Grettings = () => {
    return (
        <div className="section-2">
            <div>

            </div>
            <div>
                <h2>WelCome to the <span className="medipress">MediPress</span></h2>
                <h4>Medipress Hospital isIt is a long established fact that a reader will be distracted by the readable content.</h4>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and goingered the undoubtable source.</p>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                <Button variant="outline-success">View More</Button>
            </div>
        </div>
    );
};

export default Grettings;