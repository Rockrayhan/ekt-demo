import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  
  const logout = () => {
    signOut(auth);
  };

  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand to='/home'>  Ektu Khani Tech  </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto mt-4">
              <Nav.Link>  <NavLink className='header-link' to='/home'> Home  </NavLink> </Nav.Link>

              <Nav.Link> <NavLink className='header-link' to='/products'> Products  </NavLink>  </Nav.Link>
              <Nav.Link>  <NavLink className='header-link' to='/about'> About  </NavLink> </Nav.Link>
              <Nav.Link>  <NavLink className='header-link' to='/contact'> Contact  </NavLink> </Nav.Link>


            </Nav>
            <Nav>
              <Nav.Link href="">Call Now <br /> +880 1839-758926 </Nav.Link>

            </Nav>
            <Nav className='ms-5'>
              
                
               {user ? <Button onClick={logout} variant="info">SignOut</Button>  :  <Button variant="primary">
                <Link className='text-white text-decoration-none' to='/login'> Login </Link>
                </Button>}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;