import React from 'react';

const ApplyCoupon = () => {
  return (
    <>
      <Modal
        show={showCoupon}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="review_body">
          hello
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ApplyCoupon;
