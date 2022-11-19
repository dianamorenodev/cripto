import React from 'react';
import { Container } from 'react-bootstrap';
import icon from '../img/icon.png'

const Footer = () => {
  return (
    <Container fluid className='footer'>
      <img src={icon} alt="git hub icon" />
      <span>dianamorenodev</span>
    </Container>
  );
}

export default Footer;
