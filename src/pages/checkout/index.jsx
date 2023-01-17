import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./checkout.css";
import FooterStrip from "../../components/footer/footerStrip";

const Checkout = () => {
  return (
    <>
    <div id="checkout">
      <Container>
        <div className="checkout_great">
          <h3>Great Picks 👌</h3>
          <span>Let’s get these to you as soon as we can</span>
        </div>
        <Row>
          <Col xs={12} md={5}>
            <div className="checkout_box">
              <div className="checkout_box_heading"> <img src="../img/reviewyourorder.png" alt="reviewyourorder" width="22" style={{marginRight: "8px"}} /> Review your order</div>
              <div className="checkout_box_list">
                <div>
                  <h3>Synthetic Floral Print Sari</h3>
                  <span>Lemon Yellow • Medium • 1 unit</span>
                </div>
                <div>
                  <h3>₹4,500</h3>
                </div>
              </div>
              <div className="checkout_box_list">
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
              <div className="checkout_box_list">
                <div>
                  <h3>Regular Shipping</h3>
                  <span>Delivers 17—20th June</span>
                </div>
                <div>
                  <h3>Free </h3>
                </div>
              </div>
              <div className="checkout_box_list">
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
              <Link to="/orderConfirmation">
              <div className="checkout_box_footer">
                <div className="checkout_box_list">
                  <div>
                    <h3>Make Payment</h3>
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
                        ₹18,700{" "}
                      </del>
                      ₹13,230{" "}
                    </h3>
                  </div>
                </div>
              </div>
              </Link>
            </div>

            <div className="checkout_box" style={{ marginTop: "2rem" }}>
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
                <img src="../img/usestorecredit.png" alt="usestorecredit" width="22" style={{marginRight: "8px"}} />
                Use Store credit
                </div>
                <span style={{ fontWeight: "600", fontSize: "14px" }}>
                  ₹500{" "}
                </span>
              </div>
            </div>
          </Col>
          <Col xs={12} md={7}>
            <Row>
              <Col>
                <Form className="checkout_form">
                  <Row>
                    <Col>
                      <Form.Group controlId="validationFormik01">
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Name"
                        />
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="validationFormik01">
                        <Form.Control
                          type="text"
                          name="number"
                          placeholder="Phone Number"
                        />
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="validationFormik01">
                        <Form.Control
                          type="email"
                          name="name"
                          placeholder="Email"
                        />
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="validationFormik01">
                        <Form.Control
                          type="text"
                          name="compony"
                          placeholder="Compony"
                        />
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="validationFormik01">
                        <Form.Control
                          type="text"
                          name="flatNoBuilding"
                          placeholder="Flat No. & Building"
                        />
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="validationFormik01">
                        <Form.Control
                          type="text"
                          name="streetAddress"
                          placeholder="Street Address"
                        />
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="validationFormik01">
                        <Form.Control
                          type="text"
                          name="PINCode"
                          placeholder="PIN Code"
                        />
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="validationFormik01">
                        <Form.Control
                          type="text"
                          name="city"
                          placeholder="City"
                        />
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="validationFormik01">
                        <Form.Control
                          type="text"
                          name="state"
                          placeholder="State"
                        />
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button type="submit" className="input_file_button">
                    Publish
                  </Button>
                </div> */}
                </Form>
              </Col>
            </Row>

            <div className="checkout_box" style={{ marginTop: "1rem", padding: "0 1rem 1rem 1rem"}}>
              <div className="checkout_box_heading">
              <img src="../img/shipping-options.png" alt="shipping-options" width="22" style={{marginRight: "8px"}} />
                 Shipping Options
              </div>
              <div className="checkout_box_list" style={{ background: "#EDF0FF", borderRadius: "4px", paddingTop: "1rem" }}>
                <div>
                  <h3 style={{ color: "#2A3592" }}>Regular Shipping</h3>
                  <span style={{ color: "#2A3592" }}>Delivers 17—20th June</span>
                </div>
                <div>
                  <h3 style={{ color: "#2A3592" }}>Free </h3>
                </div>
              </div>
              <div className="checkout_box_list">
                <div>
                  <h3>Cash on Delivery</h3>
                  <span>Delivers 17—20th June</span>
                </div>
                <div>
                  <h3>₹100 </h3>
                </div>
              </div>
              <div className="checkout_box_list">
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
    </div>
      <FooterStrip />
      </>
  );
};

export default Checkout;
