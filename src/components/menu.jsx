import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.png'

const Menu = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand className='navText'>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{''}
            Cripto
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
