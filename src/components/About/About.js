import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about_us from '../../images/about-us.png';

import './About.css';

const About = () => {
    return (
        <div className='mt-5'>

            <h1 className='header-font'>
                About US
            </h1>


            <Container className='mt-3 about-section'>
                <Row>
                    <Col sm={6}>

                        <img className='img-fluid' src={about_us} alt="" />
                    </Col>
                    <Col className='mt-5' sm={6}>
                        <h2>
                            Ektu khani Tech is Information <br />
                            and  <br /> Technology related Service Provider
                        </h2>
                        <br />
                        <h5 className='mb-5'>
                            Our services are included but not limited to :
                            <br />
                            <br />
                            <li> E-Commerce Website</li> 
                                <br />
                            <li> Blog Website </li>
                            <br />
                          <li>  Portfolio Website</li>
                            <br />
                         <li>   Digital Marketing</li>


                        </h5>
                    </Col>
                </Row>
            </Container>



        </div>
    );
};

export default About;