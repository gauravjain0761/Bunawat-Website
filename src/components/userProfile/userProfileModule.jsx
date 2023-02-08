import { Divider } from "@mui/material";
import moment from "moment";
import React from "react";
import { AiOutlineCheck } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import { useOrderListQuery } from "../../services/api";
import { getNumberWithComma } from "../../utils/utils";

const UserProfileModule = () => {

  const { data: orderData, error, isLoading } = useOrderListQuery()
  return (
    <>
      {orderData?.data?.map(list => (
        <div className="userProfileModule_box" style={{ marginBottom: "1rem" }}>
          <div className="userProfileModule_box_heading">
            <div>
              <h6>
                <img
                  src="../img/reviewyourorder.png"
                  alt="reviewyourorder"
                  width="22"
                  style={{ marginRight: "8px" }}
                />
                order #{list?.order_num}
              </h6>
            </div>
            <span>{moment(list?.createdAt).format("Do MMM YYYY")}</span>
          </div>
          {list?.items?.map(item => (
            <div className="userProfileModule_box_list">
              <div>
                <h3>{item?.product_name}</h3>
                <span>{`${Object.values(item?.varients ?? {})?.join(" • ")}`}</span>
              </div>
              <div>
                <h3>{getNumberWithComma(Number(item?.amount) * Number(item?.qty))} </h3>
              </div>
            </div>
          ))}
          <div className="userProfileModule_box_list_last">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="orderconfirmed_img">
                <img
                  src="../img/orderconfirmed.png"
                  alt="orderconfirmed"
                  width="22"
                // style={{ marginRight: "8px" }}
                />
              </div>
              <div>
                <h6>Order Confirmed</h6>
                <span>We’ll send you tracking details when it ships</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="userProfileModule_olderorders">
        <Divider>Older orders</Divider>
      </div>

      {[...Array(2)].map((index) => {
        return (
          <div key={`item-${index}`} className="userProfileModule_box" style={{ marginTop: "1rem" }}>
            <div className="userProfileModule_box_heading">
              <div>
                <h6>
                  <img
                    src="../img/reviewyourorder.png"
                    alt="reviewyourorder"
                    width="22"
                    style={{ marginRight: "8px" }}
                  />
                  Order #701921
                </h6>
              </div>
              <span>9th May 2022</span>
            </div>
            <div className="userProfileModule_box_list">
              <div>
                <h3>Trenchcoat Suit</h3>
                <span>Maroon  •  Medium  •  1 unit</span>
              </div>
              <div>
                <h3>₹4,500 </h3>
              </div>
            </div>
            <div className="userProfileModule_box_list_last">
              <div>
                <span><AiOutlineCheck /> 19th June  •  7am—7pm</span>
              </div>
            </div>
          </div>
        );
      })} */}
    </>
  );
};

export default UserProfileModule;
