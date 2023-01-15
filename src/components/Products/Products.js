import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import template1 from '../../images/web-template.jpg' ;
import './Products.css' ;


const Products = () => {
    return (
        <Container>
            
        <Row>
          <Col sm={4}>
            <div className='product-card'>
                <img className='img-fluid' src={template1} alt="" />
                <h2>
                    One Page <br />
                    price : TK 1000
                </h2>
            </div>
          </Col>
          <Col sm={4}>
                
          <div className='product-card'>
                <img className='img-fluid' src={template1} alt="" />
                <h2>
                    Three Page <br />
                    price : TK 2000
                </h2>
            </div>

          </Col>
          <Col sm={4}>

          <div className='product-card '>
                <img className='img-fluid' src={template1} alt="" />
                <h2>
                    Five Page <br />
                    price : TK 3000
                </h2>
            </div>

          </Col>
        </Row>

       
        </Container>

        
    );
};

export default Products;