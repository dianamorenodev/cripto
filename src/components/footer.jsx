import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import icon from '../img/icon.png'

const Footer = () => {
  return (
    <Container fluid className='footer'>
      <Row>
        <Col>
          <img src={icon} />
          dianamorenodev
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
