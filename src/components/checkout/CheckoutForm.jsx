import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const CheckoutForm = ({ formData, setFormData }) => {

  const handleChange = (event) => {
    if (event.target.name == "phone") {
      const onlyNums = event.target.value.replace(/[^0-9]/g, '');
      if (onlyNums.length < 10) {
        setFormData({ ...formData, [event.target.name]: onlyNums });
      } else if (onlyNums.length === 10) {
        setFormData({ ...formData, [event.target.name]: onlyNums });
      }
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value })
    }
  }

  return (
    <>
      {console.log("formData", formData)}
      <Row>
        <Col>
          <Form className="checkout_form">
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control type="text" name="name" placeholder="Name" value={formData?.name ?? ''} onChange={handleChange} />
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
                      name="phone"
                      value={formData?.phone ?? ''} onChange={handleChange}
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
                  <Form.Control type="email" name="email" placeholder="Email" value={formData?.email ?? ''} onChange={handleChange} />
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
                    value={formData?.address_1 ?? ''} onChange={handleChange}
                    name="address_1"
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
                    value={formData?.address_2 ?? ''} onChange={handleChange}
                    name="address_2"
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
                    value={formData?.pincode ?? ''} onChange={handleChange}
                    name="pincode"
                    placeholder="PIN Code"
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control type="text" name="city" placeholder="City" value={formData?.city ?? ''} onChange={handleChange} />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="validationFormik01">
                  <Form.Control type="text" name="state" placeholder="State" value={formData?.state ?? ''} onChange={handleChange} />
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
