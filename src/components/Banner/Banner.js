import React from 'react';
import './Banner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import banner from '../../images/banner.png'


const Banner = () => {
    return (
        <div >
            <Container>
                <Row className='banner-container'>
                    <Col sm={6}>
                        <div className='img-bg'>
                        <img className='img-fluid banner-img' src={banner} alt="" />
                        </div>
                        
                    </Col>
                    <Col sm={6}>
                            <h3>
                                Get Your 
                            </h3>
                            <br />
                            <h1>
                                Website
                            </h1>
                            <br />
                            <div className='banner-box'>
                            <Row>
                                <Col sm={8}></Col>
                                <Col sm={4}></Col>
                            </Row>
                            </div>
                    </Col>
                </Row>

            </Container>


        </div>
    );
};

export default Banner;