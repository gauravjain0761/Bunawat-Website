import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import { TiDeleteOutline } from 'react-icons/ti';


const ApplyCouponModal = ({showCoupon, handleClose}) => {
  return (
    <>
      <Modal
        show={showCoupon}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="applyCouponModal_body">
            <div className="checkout_box">
              <div
                className="checkout_box_heading"
                style={{ paddingBottom: "2rem", cursor: "pointer" }}
              >
                <img src="../img/haveacoupon.png" alt="haveacoupon" width="22" style={{marginRight: "8px"}} />
                Have a coupon?
              </div>
            </div>

            <div className="checkout_box applyCouponModal_box" style={{ marginTop: "1rem" }}>
              <div
                className="checkout_box_heading"
                style={{ cursor: "pointer" }}
              >
                <img src="../img/haveacoupon.png" alt="haveacoupon" width="22" style={{marginRight: "8px"}} />
                      {/* <Form> */}
                      {/* <Form.Group controlId="validationFormik01"> */}
                        <Form.Control
                          type="text"
                          name="coupon"
                          placeholder="BCLUB |"
                          className='applyCouponModal_box_input'
                        />
                      {/* </Form.Group> */}
                      {/* </Form> */}
              </div>
              <div className='applyCouponModal_box_btn'>
                Apply
              </div>
            </div>

            <div className="checkout_box applyCouponModal_box" style={{ marginTop: "1rem" }}>
              <div
                className="checkout_box_heading"
                style={{ cursor: "pointer" }}
              >
                <img src="../img/haveacoupon.png" alt="haveacoupon" width="22" style={{marginRight: "8px"}} />
                 BCLUB
              </div>
              <div>
                <span>Get 10% off all orders <TiDeleteOutline style={{fontSize: "20px", cursor: "pointer"}} /></span>
              </div>
            </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default ApplyCouponModal;
