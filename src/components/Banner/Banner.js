import React from 'react';
import './Banner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import banner from '../../images/banner.png'


const Banner = () => {
    return (
        <div >
            <Container className=''>
                <Row className='banner-container mt-5'>
                    <Col sm={6}>
                        <div className='img-bg'>
                            <img className='img-fluid banner-img' src={banner} alt="" />
                        </div>

                    </Col>
                    <Col sm={6}>
                        <h3 id='banner-header-1'>
                            Get Your
                        </h3>

                        <h1 id='banner-header-2'>
                            Website
                        </h1>
                        <br />
                        <h1 id='banner-rotated-text'>
                            now
                        </h1>
                        <div className='banner-box mx-auto'>
                            <Row>
                                <Col className='banner-box-left' sm={8}> <p className='mt-3 p-1'>
                                    For New Year</p></Col>
                                <Col className='banner-box-right' sm={4}> 30% <br /> Off </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

            </Container>


        </div>
    );
};

export default Banner;