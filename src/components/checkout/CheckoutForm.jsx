import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const CheckoutForm = () => {
  return (
    <>
      <Row>
        <Col>
          <Form className="checkout_form">
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control type="text" name="name" placeholder="Name" />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <div style={{ position: "relative" }}>
                    <Form.Control
                      type="text"
                      name="number"
                      placeholder="Phone Number"
                      style={{ paddingLeft: "3rem" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "12px",
                        color: "#737576",
                        fontSize: "16px",
                      }}
                    >
                      +91
                    </span>
                  </div>
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control type="email" name="name" placeholder="Email" />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <div style={{ position: "relative" }}>
                    <Form.Control
                      type="text"
                      name="compony"
                      placeholder="Compony"
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "16px",
                        right: "24px",
                        color: "#2A3592",
                        fontSize: "16px",
                      }}
                    >
                      Optional
                    </span>
                  </div>
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
                  <Form.Control type="text" name="city" placeholder="City" />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control type="text" name="state" placeholder="State" />
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
    </>
  );
};

export default CheckoutForm;
