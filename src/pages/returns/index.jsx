import { FormControlLabel, Radio } from '@mui/material';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./return.css";
import { VscDeviceCamera } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import FooterStrip from '../../components/footer/footerStrip';


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

    <div className='returns_page_schedule_section'>
      <Row>
        <Col md={6}>
          <div className='schedule_section1_text'>
            <h6>Schedule a return</h6>
            <p>Go to your order page from your email, or by using your order number. If it’s within the return window, you’ll see a return button. Select the clothes you want to send back, and we’ll pick them up within the next 3 days.</p>
            <Button>Track Order</Button>
          </div>
        </Col>
        <Col md={6}>
          <div className='schedule_section2'>
            <div className='schedule_section2_text'>
            <div className="checkout_box">
              <div className="checkout_box_heading"> 
              <img src="../img/returnpolicy.png" alt="reviewyourorder" width="22" style={{marginRight: "8px"}} /> Schedule a Return
              </div>
              <div className='checkout_box_heading2'>Select the items you would like to return. A pickup will be scheduled for 19th June, 7am—7pm.</div>
              <div className="checkout_box_list">
                <div style={{display: "flex"}}>
                  <FormControlLabel value="female" control={<Radio />} style={{marginRight: "0"}} />
                  <div>
                    <h3>Synthetic Floral Print Sari</h3>
                    <span>Lemon Yellow • Medium • 1 unit</span>
                  </div>
                </div>
                <div>
                  <h3>₹4,500</h3>
                </div>
              </div>
              <div className="checkout_box_list">
              <div style={{display: "flex"}}>
                  <FormControlLabel value="female" control={<Radio />} style={{marginRight: "0"}}/>
                  <div>
                    <h3>Pink Floral Sari & Jacket</h3>
                    <span>Medium • 2 units</span>
                  </div>
                </div>
                <div>
                  <h3>
                    ₹10,200
                  </h3>
                </div>
              </div>
              <div className="checkout_box_footer">
                <div className="checkout_box_list">
                  <div>
                    <h3>Return</h3>
                  </div>
                  <div>
                    <h3>
                      Get ₹4,500 Store Credit
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>

    <div className='returns_page_schedule_section returns_page_schedule_section_mobile'>
      <Row>
        <Col md={6}>
          <div className='schedule_section2'>
            <div className='schedule_section2_text'>
            <div className="checkout_box">
              <div className="checkout_box_heading"> 
              <img src="../img/returnpolicy.png" alt="reviewyourorder" width="22" style={{marginRight: "8px"}} /> Schedule a Return
              </div>
              <div className='checkout_box_heading2'>Select the items you would like to return. A pickup will be scheduled for 19th June, 7am—7pm.</div>
              <div className="checkout_box_list">
                <div style={{display: "flex"}}>
                  <FormControlLabel value="female" control={<Radio />} style={{marginRight: "0"}} />
                  <div>
                    <h3>Synthetic Floral Print Sari</h3>
                    <span>Lemon Yellow • Medium • 1 unit</span>
                  </div>
                </div>
                <div>
                  <h3>₹4,500</h3>
                </div>
              </div>
              <div className="checkout_box_list">
              <div style={{display: "flex"}}>
                  <FormControlLabel value="female" control={<Radio />} style={{marginRight: "0"}}/>
                  <div>
                    <h3>Pink Floral Sari & Jacket</h3>
                    <span>Medium • 2 units</span>
                  </div>
                </div>
                <div>
                  <h3>
                    ₹10,200
                  </h3>
                </div>
              </div>
              <div className="checkout_box_footer">
                <div className="checkout_box_list">
                  <div>
                    <h3>Return</h3>
                  </div>
                  <div>
                    <h3>
                      Get ₹4,500 Store Credit
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className='schedule_section1_text'>
            <h6>Schedule a return</h6>
            <p>Go to your order page from your email, or by using your order number. If it’s within the return window, you’ll see a return button. Select the clothes you want to send back, and we’ll pick them up within the next 3 days.</p>
            <Button>Track Order</Button>
          </div>
        </Col>
      </Row>
    </div>

    <div className='returns_page_getscore_section'>
      <div className='returns_page_getscore_section_text'>
        <img src='../img/Get-store-credit.png' alt="Store Credit" />
        <h6>Get store credit</h6>
        <p>Once we receive the return, our team will inspect it to make sure it’s OK to clean & restock. We’ll issue store credit in the full amount of the order immediately after the inspection is cleared.</p>
      </div>
    </div>

    <div className='returns_page_unfortunately_section'>
        <div className='returns_page_unfortunately_section_box'>
          <h6><VscDeviceCamera /> Unfortunately, we are not able to offer refunds to your original payment mode at this time</h6>
        </div>
    </div>

    <div className='returns_page_getscore_section'>
      <div className='returns_page_getscore_section_text'>
        <p>Still have a question about returns?</p>
        <Link to="/returns" style={{ fontSize: "14px", color: "#2A3592", textDecoration: "revert" }}>Talk to us on Whatsapp</Link>
      </div>
    </div>
    </Container>
    </div>
    <FooterStrip />
    </>
  );
}

export default Returns;
