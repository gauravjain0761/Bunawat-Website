import React from "react";
import { getNumberWithComma } from "../../utils/utils";

const MakePayment = ({ handleMakeOrder, cartData }) => {
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
        {cartData?.data?.length > 0 ? cartData?.data?.map((cart, index) => {
          return (
            <div className="checkout_box_list">
              <div>
                <h3>{cart?.sku?.product_name}</h3>
                <span>{`${Object.values(cart?.sku?.varients ?? {})?.join(" • ")}`}</span>
              </div>
              <div>
                <h3>{getNumberWithComma(Number(cart?.amount) * Number(cart?.qty))}</h3>
              </div>
            </div>
          )
        }) : null}
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
        <div className="checkout_box_footer" onClick={handleMakeOrder}>
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
                  {/* ₹18,700{" "} */}
                </del>
                {getNumberWithComma(Number(cartData?.data?.reduce((total, list) => {
                  return total + (Number(list?.qty) * Number(list?.amount))
                }, 0)))}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakePayment;
