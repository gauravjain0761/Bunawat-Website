import React from "react";
import { Link } from "react-router-dom";

const MakePayment = () => {
  return (
    <>
      <div className="checkout_box">
        <div className="checkout_box_heading">
          {" "}
          <img
            src="../img/reviewyourorder.png"
            alt="reviewyourorder"
            width="22"
            style={{ marginRight: "8px" }}
          />{" "}
          Review your order
        </div>
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
        <Link to="/paymentOptions">
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
    </>
  );
};

export default MakePayment;
