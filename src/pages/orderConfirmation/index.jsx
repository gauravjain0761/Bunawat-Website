import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./style.css";

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
    <div className='footer_strip'>
    <div className="footer_header_wrap">
            <ul>
              <li>
                <Link to="/" className="d-flex align-items-center">
                  <p>Blog</p>
                  <span className="new_text">New</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p>Help & Support</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p>Returns</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p>Terms</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p>Track Order</p>
                </Link>
              </li>
            </ul>

            <div className="social_media_wrap">
              <Link to="/">
                <p>Follow us on Instagram</p>
                <span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.465 0.066C7.638 0.012 8.012 0 11 0C13.988 0 14.362 0.013 15.534 0.066C16.706 0.119 17.506 0.306 18.206 0.577C18.939 0.854 19.604 1.287 20.154 1.847C20.714 2.396 21.146 3.06 21.422 3.794C21.694 4.494 21.88 5.294 21.934 6.464C21.988 7.639 22 8.013 22 11C22 13.988 21.987 14.362 21.934 15.535C21.881 16.705 21.694 17.505 21.422 18.205C21.146 18.9391 20.7133 19.6042 20.154 20.154C19.604 20.714 18.939 21.146 18.206 21.422C17.506 21.694 16.706 21.88 15.536 21.934C14.362 21.988 13.988 22 11 22C8.012 22 7.638 21.987 6.465 21.934C5.295 21.881 4.495 21.694 3.795 21.422C3.06092 21.146 2.39582 20.7133 1.846 20.154C1.28638 19.6047 0.853315 18.9399 0.577 18.206C0.306 17.506 0.12 16.706 0.066 15.536C0.012 14.361 0 13.987 0 11C0 8.012 0.013 7.638 0.066 6.466C0.119 5.294 0.306 4.494 0.577 3.794C0.853723 3.06008 1.28712 2.39531 1.847 1.846C2.39604 1.2865 3.06047 0.853443 3.794 0.577C4.494 0.306 5.294 0.12 6.464 0.066H6.465ZM15.445 2.046C14.285 1.993 13.937 1.982 11 1.982C8.063 1.982 7.715 1.993 6.555 2.046C5.482 2.095 4.9 2.274 4.512 2.425C3.999 2.625 3.632 2.862 3.247 3.247C2.88205 3.60205 2.60118 4.03428 2.425 4.512C2.274 4.9 2.095 5.482 2.046 6.555C1.993 7.715 1.982 8.063 1.982 11C1.982 13.937 1.993 14.285 2.046 15.445C2.095 16.518 2.274 17.1 2.425 17.488C2.601 17.965 2.882 18.398 3.247 18.753C3.602 19.118 4.035 19.399 4.512 19.575C4.9 19.726 5.482 19.905 6.555 19.954C7.715 20.007 8.062 20.018 11 20.018C13.938 20.018 14.285 20.007 15.445 19.954C16.518 19.905 17.1 19.726 17.488 19.575C18.001 19.375 18.368 19.138 18.753 18.753C19.118 18.398 19.399 17.965 19.575 17.488C19.726 17.1 19.905 16.518 19.954 15.445C20.007 14.285 20.018 13.937 20.018 11C20.018 8.063 20.007 7.715 19.954 6.555C19.905 5.482 19.726 4.9 19.575 4.512C19.375 3.999 19.138 3.632 18.753 3.247C18.3979 2.88207 17.9657 2.60121 17.488 2.425C17.1 2.274 16.518 2.095 15.445 2.046V2.046ZM9.595 14.391C10.3797 14.7176 11.2534 14.7617 12.0669 14.5157C12.8805 14.2697 13.5834 13.7489 14.0556 13.0422C14.5278 12.3356 14.7401 11.4869 14.656 10.6411C14.572 9.79534 14.197 9.00497 13.595 8.405C13.2112 8.02148 12.7472 7.72781 12.2363 7.54515C11.7255 7.36248 11.1804 7.29536 10.6405 7.34862C10.1006 7.40187 9.57915 7.57418 9.1138 7.85313C8.64846 8.13208 8.25074 8.51074 7.9493 8.96185C7.64786 9.41296 7.45019 9.92529 7.37052 10.462C7.29084 10.9986 7.33115 11.5463 7.48854 12.0655C7.64593 12.5847 7.91648 13.0626 8.28072 13.4647C8.64496 13.8668 9.09382 14.1832 9.595 14.391ZM7.002 7.002C7.52702 6.47698 8.15032 6.0605 8.8363 5.77636C9.52228 5.49222 10.2575 5.34597 11 5.34597C11.7425 5.34597 12.4777 5.49222 13.1637 5.77636C13.8497 6.0605 14.473 6.47698 14.998 7.002C15.523 7.52702 15.9395 8.15032 16.2236 8.8363C16.5078 9.52228 16.654 10.2575 16.654 11C16.654 11.7425 16.5078 12.4777 16.2236 13.1637C15.9395 13.8497 15.523 14.473 14.998 14.998C13.9377 16.0583 12.4995 16.654 11 16.654C9.50046 16.654 8.06234 16.0583 7.002 14.998C5.94166 13.9377 5.34597 12.4995 5.34597 11C5.34597 9.50046 5.94166 8.06234 7.002 7.002V7.002ZM17.908 6.188C18.0381 6.06527 18.1423 5.91768 18.2143 5.75397C18.2863 5.59027 18.3248 5.41377 18.3274 5.23493C18.33 5.05609 18.2967 4.87855 18.2295 4.71281C18.1622 4.54707 18.0624 4.39651 17.936 4.27004C17.8095 4.14357 17.6589 4.04376 17.4932 3.97652C17.3275 3.90928 17.1499 3.87598 16.9711 3.87858C16.7922 3.88119 16.6157 3.91965 16.452 3.9917C16.2883 4.06374 16.1407 4.1679 16.018 4.298C15.7793 4.55103 15.6486 4.88712 15.6537 5.23493C15.6588 5.58274 15.7992 5.91488 16.0452 6.16084C16.2911 6.40681 16.6233 6.54723 16.9711 6.5523C17.3189 6.55737 17.655 6.42669 17.908 6.188V6.188Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          </div>
    </div>
    
  );
}

export default OrderConfirmation;
