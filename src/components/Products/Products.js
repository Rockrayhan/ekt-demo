import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Products.css' ;
import productIMG from '../../images/products/product-banner.png' ;
import pic1 from '../../images/products/pic1.png' ;
import pic2 from '../../images/products/pic2.png' ;
import pic3 from '../../images/products/pic3.png' ;
import pic4 from '../../images/products/pic4.png' ;

const Products = () => {
    return (
        <Container>
            



        <Row className='g-5 mb-5 mt-3'>
        <h1 className='header-font mb-5 mt-5'>
            Here's Our Products
           </h1>

        <Col className='mt-2' sm={6}>
            <img className='img-fluid' src={productIMG} alt="" />
        </Col>


        <Col className='' sm={6}>
        
            <Row>
                <Col sm={6}>
                    <div className='product-about shadow-lg p-3'>
                        <Row>
                            <Col sm={6}> <img className='img-fluid' style={{width: "80px", height:'100px'}} src={pic1} alt="" />  </Col>
                            <Col sm={6}>  Separete Computer For Each Student </Col>
                        </Row>
                    </div>
                </Col>
                <Col sm={6}>
                <div className='product-about shadow-lg p-3'>
                        <Row>
                            <Col sm={6}> <img className='img-fluid' style={{width: "80px", height:'100px'}} src={pic2} alt="" />  </Col>
                            <Col sm={6}>  Project Based Teaching </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className='g-5 mt-1'>
                <Col sm={6}>
                <div className='product-about shadow-lg p-3'>
                        <Row>
                            <Col sm={6}> <img className='img-fluid' style={{width: "80px", height:'100px'}} src={pic3} alt="" />  </Col>
                            <Col sm={6}>  Regular Online and Offline support </Col>
                        </Row>
                    </div>
                </Col>
                <Col sm={6}>
                <div className='product-about shadow-lg p-3'>
                        <Row>
                            <Col sm={6}> <img className='img-fluid' style={{width: "80px", height:'100px'}} src={pic4} alt="" />  </Col>
                            <Col sm={6}>  Provide Cirtificate End of the course </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

        </Col>

        </Row>

       
        </Container>

        
    );
};

export default Products;