import React from 'react';

const Footer = () => {
    return (
        <footer className='mx-auto fw-bold shadow-lg p-3' style={{height: '50px'}} >
            <small>
            &#169; Ektu Khani Tech {new Date().getFullYear()} All Right Reserved. 
            </small>
        </footer>
    );
};

export default Footer;