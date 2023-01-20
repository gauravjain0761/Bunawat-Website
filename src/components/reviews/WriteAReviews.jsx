import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { AiOutlineInstagram } from "react-icons/ai";

const WriteAReviews = ({ showReviewsWrite, handleClose }) => {
  const [value, setValue] = useState(2);

  return (
    <>
      <Modal
        show={showReviewsWrite}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="review_body">
          <div className="login_wrap reviews_modal">
            <div className="review_title_wrap">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2_928)">
                  <path
                    d="M14.499 9.21879V15.9168H1.10303V2.52078H7.80103"
                    stroke="#2A3990"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M15.6486 4.08176L8.22689 11.5035L5.4668 11.5532L5.51646 8.79307L12.9382 1.37134L15.6486 4.08176Z"
                    stroke="#000"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_928">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.5 0.519897)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span style={{ marginLeft: "22px", fontSize: "16px", fontWeight: "600" }}>Write a Review</span>
              <span className="review_title_wrap_proName">Brocade Kurta</span>
            </div>
            <div className="review_input_wrap">
              <div className="review_input_inner">
                <textarea
                  rows="4"
                  cols="50"
                  placeholder="What did you think of it?"
                ></textarea>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  className="review_input_stars"
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "200px",
                      fontSize: "30px",
                    }}
                  />
                </div>
                <AiOutlineInstagram style={{ fontSize: "30px" }} />
              </div>
            </div>
            <button className="btn" type="button" onClick={handleClose}>
              <span>Submit Review</span>
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WriteAReviews;
