import React, { useRef } from 'react';
import './Contact.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import contact_img from '../../images/contact.png';
import emailjs from '@emailjs/browser';


const Conatct = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3oh5686', 'template_wzpjiyp', form.current, '4ftb586H58KCnF-1R')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          alert('Message Delivered Successfully');
          e.target.reset();
        }

    
    return (
        <div>
            <h4>
                Don't forgate to contact us
            </h4>



            <Container>
                <Row>
                    <Col sm={6}>
                        <div>
                            <form ref={form} onSubmit={sendEmail}>
                                <input name="client_name" type="text" class="feedback-input" placeholder="Name" />
                                <input name="client_email" type="text" class="feedback-input" placeholder="Email" />
                                {/* <input name="client_subject" type="text" class="feedback-input" placeholder="Subject" /> */}
                                <textarea name="client_message" class="feedback-input" placeholder="Your Message"></textarea>
                                <input type="submit" value="SUBMIT" />
                            </form>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <img className='img-fluid' src={contact_img} alt="" />
                    </Col>
                </Row>

            </Container>




        </div>
    );
};

export default Conatct;