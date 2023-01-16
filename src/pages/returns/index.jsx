import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./return.css";

const Returns = () => {
  return (
    <>
    <div className='returns_page'>
    <Container>
       <div className='returns_page_top'>
          <h3>Returns</h3>
          <p>If a garment isn’t working for you, just tell us within <br />
          <strong>14 days</strong> and we’ll take care of the rest.</p>
       </div>
    <div className='returns_page_butons'>
        <Button className="active">Pack</Button>
        <Button>Return</Button>
        <Button>get Credit</Button>
    </div>
    <Row>
        <Col md={6}>
            <div className='returns_page_packing_img'>
              <img src='./img/return-page.png' alt="return packing" />
            </div>
        </Col>
        <Col md={6}>
            <div className='returns_page_packing_text'>
              <h6>save the packaging</h6>
              <p>Pack your garment the same way that it arrived. Make sure it is unused & all tags are attached. If you have the original box, use it to keep the clothes packed and ready for pickup.</p>
            </div>
        </Col>
    </Row>
    </Container>
    </div>
    </>
  );
}

export default Returns;
