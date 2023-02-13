import React, { useState } from "react";
import { Modal } from "react-bootstrap";


const SelectModal = ({showSelect, handleClose}) => {

  return (
    <>
      <Modal
        show={showSelect}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="login_body">
          Select option
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SelectModal;
