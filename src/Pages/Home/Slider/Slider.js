import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'

const Slider = () => {
    return (
        <div>
            <Carousel fade className="customize">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://emerging-europe.com/wp-content/uploads/2018/01/bigstock-Male-Doctor-In-The-Hospital-190586731.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4 className="text-black">Provide Qualified Doctor</h4>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.imgbin.com/18/1/11/imgbin-health-professional-nurse-health-system-medicine-master-universitario-doctors-and-nurses-d76pMqNCC3nHBuf81FiyX2U56.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-black">Free Consultation</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.deccanherald.com/sites/dh/files/articleimages/2021/08/08/istock-1218508931-1-1017550-1628431884.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className="text-black">ProFessional Staff</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;