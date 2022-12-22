import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand to='/home'>  Ektu Khani Tech  </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto mt-3 mb-2">
              <Nav.Link>  <NavLink className='header-link' to='/home'> Home  </NavLink> </Nav.Link>

              <Nav.Link> <NavLink className='header-link' to='/products'> Products  </NavLink>  </Nav.Link>
              <Nav.Link>  <NavLink className='header-link' to='/about'> About  </NavLink> </Nav.Link>
              <Nav.Link>  <NavLink className='header-link' to='/contact'> Contact  </NavLink> </Nav.Link>








            </Nav>
            <Nav>
              <Nav.Link href="">Call Now <br /> +880 1839-758926 </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;