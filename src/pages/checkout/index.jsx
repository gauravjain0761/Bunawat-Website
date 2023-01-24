import React,{ useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./checkout.css";
import FooterStrip from "../../components/footer/footerStrip";
import ApplyCouponModal from "../../components/checkout/ApplyCouponModal";
import { FormControlLabel, Radio } from "@mui/material";
import CodConfirmationModal from "../../components/checkout/CodConfirmationModal";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import MakePayment from "../../components/checkout/MakePayment";
import { Box } from "@mui/system";

const Checkout = () => {
  const [showCoupon, setShowCoupon] = useState(false);
  const [showCodModal, setShowCodModal] = useState(false);

  const handleCloseCodModal = () => setShowCodModal(false);
  const handleShowCodModal = () => setShowCodModal(true);

  const handleClose = () => setShowCoupon(false);
  const handleShow = () => setShowCoupon(true);

  return (
    <>
    <div id="checkout">
      <Container className="desktop_view">
        <div className="checkout_great">
          <h3>Great Picks 👌</h3>
          <span>Let’s get these to you as soon as we can</span>
        </div>
        <Row>
          <Col xs={12} md={5}>

            <MakePayment />

            <div className="checkout_box" style={{ marginTop: "2rem" }} onClick={handleShow}>
              <div
                className="checkout_box_heading"
                style={{ paddingBottom: "2rem", cursor: "pointer" }}
              >
                <img src="../img/haveacoupon.png" alt="haveacoupon" width="22" style={{marginRight: "8px"}} />
                Have a coupon?
              </div>
            </div>

            <div className="checkout_box" style={{ marginTop: "2rem" }}>
              <div
                className="checkout_box_heading"
                style={{
                  paddingBottom: "2rem",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                <FormControlLabel value="male" control={<Radio />} style={{margin: "0", padding: "0", height: "10px"}} />
                Use Store credit
                </div>
                <span style={{ fontWeight: "600", fontSize: "14px" }}>
                  ₹500{" "}
                </span>
              </div>
            </div>
          </Col>
          <Col xs={12} md={7}>

            <CheckoutForm />

            <div className="checkout_box" style={{ marginTop: "1rem", padding: "0 1rem 1rem 1rem"}}>
              <div className="checkout_box_heading">
              <img src="../img/shipping-options.png" alt="shipping-options" width="22" style={{marginRight: "8px"}} />
                 Shipping Options
              </div>
              <div className="checkout_box_list" style={{ background: "#EDF0FF", borderRadius: "4px", paddingTop: "1rem", cursor: "pointer" }}>
                <div>
                  <h3 style={{ color: "#2A3592" }}>Regular Shipping</h3>
                  <span style={{ color: "#2A3592" }}>Delivers 17—20th June</span>
                </div>
                <div>
                  <h3 style={{ color: "#2A3592" }}>Free </h3>
                </div>
              </div>

              <div className="checkout_box_list" onClick={handleShowCodModal} style={{cursor: "pointer"}}>
                <div>
                  <h3>Cash on Delivery</h3>
                  <span>Delivers 17—20th June</span>
                </div>
                <div>
                  <h3>₹100 </h3>
                </div>
              </div>

              <div className="checkout_box_list" style={{cursor: "pointer"}}>
                <div>
                  <h3>Expedited Shipping</h3>
                  <span>Delivers Monday</span>
                </div>
                <div>
                  <h3>₹250 </h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>


      {/* Mobile view code start */}
      <Container className="mobile_view">
        <div className="checkout_great">
          <h3>Great Picks 👌</h3>
          <span>Let’s get these to you as soon as we can</span>
        </div>
        <Row>
          <Col xs={12} md={7}>

          <CheckoutForm />

            <div className="checkout_box" style={{ marginTop: "1rem", padding: "0 1rem 1rem 1rem"}}>
              <div className="checkout_box_heading">
              <img src="../img/shipping-options.png" alt="shipping-options" width="22" style={{marginRight: "8px"}} />
                 Shipping Options
              </div>
              <div className="checkout_box_list" style={{ background: "#EDF0FF", borderRadius: "4px", paddingTop: "1rem", cursor: "pointer" }}>
                <div>
                  <h3 style={{ color: "#2A3592" }}>Regular Shipping</h3>
                  <span style={{ color: "#2A3592" }}>Delivers 17—20th June</span>
                </div>
                <div>
                  <h3 style={{ color: "#2A3592" }}>Free </h3>
                </div>
              </div>
              <div className="checkout_box_list" onClick={handleShowCodModal} style={{cursor: "pointer"}}>
                <div>
                  <h3>Cash on Delivery</h3>
                  <span>Delivers 17—20th June</span>
                </div>
                <div>
                  <h3>₹100 </h3>
                </div>
              </div>
              <div className="checkout_box_list" style={{cursor: "pointer"}}>
                <div>
                  <h3>Expedited Shipping</h3>
                  <span>Delivers Monday</span>
                </div>
                <div>
                  <h3>₹250 </h3>
                </div>
              </div>
            </div>
            
          </Col>
          <Col xs={12} md={5}>
          <div className="checkout_box" style={{ marginTop: "2rem" }} onClick={handleShow}>
              <div
                className="checkout_box_heading"
                style={{ paddingBottom: "2rem", cursor: "pointer" }}
              >
                <img src="../img/haveacoupon.png" alt="haveacoupon" width="22" style={{marginRight: "8px"}} />
                Have a coupon?
              </div>
            </div>

            <div className="checkout_box" style={{ marginTop: "2rem" }}>
              <div
                className="checkout_box_heading"
                style={{
                  paddingBottom: "2rem",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                <FormControlLabel value="male" control={<Radio />} style={{margin: "0", padding: "0", height: "10px"}} />
                Use Store credit
                </div>
                <span style={{ fontWeight: "600", fontSize: "14px" }}>
                  ₹500{" "}
                </span>
              </div>
            </div>

            <Box sx={{marginTop: "1rem"}}>
              <MakePayment />
            </Box>

          </Col>
        </Row>
      </Container>
    </div>
      <ApplyCouponModal showCoupon={showCoupon} handleClose={handleClose} />
      <CodConfirmationModal showCodModal={showCodModal} handleCloseCodModal={handleCloseCodModal} />
      <FooterStrip />
      </>
  );
};

export default Checkout;
