import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Doctor from './Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    console.log(doctors);
    return (
        <div>
            <Container className="doctors-content">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
                
            </Container>
        </div>
    );
};

export default Doctors;