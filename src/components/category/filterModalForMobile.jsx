import React, { useState } from "react";
import { Modal } from "react-bootstrap";


const FilterModalForMobile = ({showFilter, handleClose}) => {

  return (
    <>
      <Modal
        show={showFilter}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="login_body">
          Filter option
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FilterModalForMobile;
