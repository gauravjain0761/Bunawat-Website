import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineCheck } from 'react-icons/ai';

const SavedAddressModule = () => {
  return (
    <>
      <Container>
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
                    <Form.Control type="text" name="city" placeholder="City" />
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

              <div
                  style={{
                    display: "grid",
                  }}
                >
                  <Button type="submit" className="savedAddressModule_btn">
                    Update Address
                    <AiOutlineCheck />
                  </Button>
                </div>
            </Form>
            <div className="savedAddressModule_bottom">
            This address will be used by default the next time you order. You can edit it at checkout.
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SavedAddressModule;
