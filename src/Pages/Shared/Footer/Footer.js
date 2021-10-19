import React from 'react';
import './Footer.css'
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer-main">
            <Container className="footer-content">
                <div className="footer">
                    <div className="footer-about">
                        <h3>About Hospitals</h3>
                        <p>The relentless service of Hospitals in the past 25 years taken health care to the most modern levels in the region catering to urban & rural.A Health Care Provider of Western Approach, Hospitals is the most trusted multispecialty hospital.</p>
                    </div>
                    <div className="footer-links">
                        <h3>Useful Links</h3>
                        <p>About Us</p>
                        <p>Consultant</p>
                        <p>Working Hours</p>
                        <p>Procedures</p>
                        <p>Special Offer</p>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Details</h3>
                        <p>Park Drive, Varick Str NY 10012, USA</p>
                        <p>Getwell@Hospitals.com</p>
                        <p>(123) 0200 12345 & 7890</p>
                        <p>Mon-Friday: 9am to 18pm</p>
                        <p>Sat-Sunday: 10am to 16pm</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;