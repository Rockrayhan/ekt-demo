import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about_us from '../../images/about-us.png';

import './About.css' ;

const About = () => {
    return (
        <div>

           
            <h1>
                About US
            </h1>

            <Container className='mt-5 about-section'>
                <Row>
                    <Col sm={6}>
                        <img className='img-fluid' src={about_us} alt="" />
                    </Col>
                    <Col className='mt-5' sm={6}>
                        <h2>
                            Ektu khani Tech is Information   and  Technology Service Provider
                        </h2>
                        <br />
                        <h5>
                            Our services are included but not limited to :
                            <br />
                            <br />
                            E-Commerce Website <br />
                            <br />
                            Blog Website <br />
                            <br />
                            Portfolio Website 
                        </h5>
                    </Col>
                </Row>
            </Container>

            

        </div>
    );
};

export default About;