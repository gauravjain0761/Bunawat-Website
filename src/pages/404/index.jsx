import React from 'react';
import { Button, Container } from 'react-bootstrap';
import FooterStrip from '../../components/footer/footerStrip';
import "./errorPage.css";

const ErrorPage = () => {
  return (
    <>
    <div className='errorPage'>
    <Container>
      <div className='errorPage_box'>
        <img src='./img/errorPage.png' alt='Error Page'/>
        <h3>We couldn’t find that</h3>
        <p>We couldn’t find that</p>
        <Button>See our Best Sellers</Button>
        <div>
          <a href='#'>Or report a problem</a>
        </div>
      </div>
    </Container>
    </div>
    <FooterStrip />
    </>
  );
}

export default ErrorPage;
