import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./orderConfirmation.css";
import FooterStrip from "../../components/footer/footerStrip";
import ShippingStatus from '../../components/OrderConfirmation/shippingStatus';

const OrderConfirmation = () => {
  return (
    <div id='ordercConfirmation'>
    <Container>
      <div className='ordercConfirmation_top'>
        <h3>Order Confirmed</h3>
        <p>We’ll send you tracking details when your <br /> 
        package ships. Estimated delivery by <b>20th June.</b></p>
        <Link to="/orderConfirmation">
            <div className='ordercConfirmation_top_help'>
            <p>Get help on whatsapp </p><span>
            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span>
            </div>
        </Link>
      </div>
       
       <div style={{textAlign: "center", marginBottom: "2rem"}}>
        <img src="../img/slider.png" alt='slider' width="600px" />
       </div>
      
      <div className="orderConfirmation_box" style={{paddingBottom: "1rem"}}>
              <div className="orderConfirmation_box_heading"> 
                <div>
                <h6>
                    <img src="../img/reviewyourorder.png" alt="reviewyourorder" width="22" style={{marginRight: "8px"}} /> 
                    order #816270
                    </h6>
                </div>
               <span>15th June 2022</span>
              </div>
              <div className="orderConfirmation_box_list">
                <div>
                  <h3>Synthetic Floral Print Sari</h3>
                  <span>Lemon Yellow • Medium • 1 unit</span>
                </div>
                <div>
                  <h3>₹4,500</h3>
                </div>
              </div>
              <div className="orderConfirmation_box_list">
                <div>
                  <h3>Pink Floral Sari & Jacket</h3>
                  <span>Medium • 2 units</span>
                </div>
                <div>
                  <h3>
                    <del
                      style={{
                        fontWeight: "300",
                        color: "#999896",
                        marginRight: "8px",
                      }}
                    >
                      ₹14,200
                    </del>
                    ₹10,200{" "}
                  </h3>
                </div>
              </div>
              <div className="orderConfirmation_box_list">
                <div>
                  <h3>Regular Shipping</h3>
                  <span>Delivers 17—20th June</span>
                </div>
                <div>
                  <h3>Free </h3>
                </div>
              </div>
              <div className="orderConfirmation_box_list">
                <div>
                  <h3>Coupon: BCLUB</h3>
                  <span>Get 10% off on all orders</span>
                </div>
                <div>
                  <h3>
                    <i>-₹1,470</i>
                  </h3>
                </div>
              </div>
              <div className="orderConfirmation_box_list">
                <div>
                  <h3
                    style={{
                            color: "#2A3592",
                        }}
                  >
                  Total Paid</h3>
                  <span>with Card ending *1234</span>
                </div>
                <div>
                  <h3 
                   style={{
                        color: "#2A3592",
                      }}
                   >
                    <del
                      style={{
                        fontWeight: "300",
                        color: "#2A3592",
                        marginRight: "8px",
                      }}
                    >
                      ₹18,700 
                    </del>
                    ₹13,230
                  </h3>
                </div>
              </div>
            </div>

            <div className="orderConfirmation_box_second" style={{paddingBottom: "1rem"}}>
              <div className="orderConfirmation_box_heading"> 
                <div>
                <h6>
                    <img src="../img/shippingto.png" alt="shippingto" width="22" style={{marginRight: "8px"}} /> 
                    Shipping to
                    </h6>
                </div>
              </div>
              <div className="orderConfirmation_box_data">
                <div>
                  <h3>Jemma Bunawati</h3>
                  <h6>65/1, Mantri Lawns, Fountain Road, <br />Hadapsar, Pune 411028 MH</h6>
                  <h6><i>+91 97631 12781</i></h6>
                  <span>Delivers 17—20th June</span>
                </div>
                <div>
                  <Link to="/userProfile">
                  <h4>
                  <img src="../img/allorders.png" alt="allorders" width="22" style={{marginRight: "8px"}} /> 
                  All Orders
                  </h4>
                  </Link>
                  <Link to="/orderConfirmation">
                  <h4>
                  <img src="../img/reportaproblem.png" alt="reportaproblem" width="22" style={{marginRight: "8px"}} /> 
                  Report a Problem
                  </h4>
                  </Link>
                  <Link to="/orderConfirmation">
                  <h4>
                  <img src="../img/returnpolicy.png" alt="returnpolicy" width="22" style={{marginRight: "8px"}} /> 
                  Return Policy
                  </h4>
                  </Link>
                </div>
              </div>
            </div>
    </Container>
    <ShippingStatus />
    <FooterStrip />
    </div>
    
  );
}

export default OrderConfirmation;
