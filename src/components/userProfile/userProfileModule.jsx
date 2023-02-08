import { Divider } from "@mui/material";
import React from "react";
import { AiOutlineCheck } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';

const UserProfileModule = () => {
  return (
    <>
      <div className="userProfileModule_box">
        <div className="userProfileModule_box_heading">
          <div>
            <h6>
              <img
                src="../img/reviewyourorder.png"
                alt="reviewyourorder"
                width="22"
                style={{ marginRight: "8px" }}
              />
              order #826333
            </h6>
          </div>
          <span>15th June 2022</span>
        </div>
        <div className="userProfileModule_box_list">
          <div>
            <h3>Minimal Jumpsuit</h3>
            <span>Forest Green • Medium • 1 unit</span>
          </div>
          <div>
            <h3>₹5,100 </h3>
          </div>
        </div>
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

      <div className="userProfileModule_box" style={{ marginTop: "1rem" }}>
        <div className="userProfileModule_box_heading">
          <div>
            <h6>
              <img
                src="../img/reviewyourorder.png"
                alt="reviewyourorder"
                width="22"
                style={{ marginRight: "8px" }}
              />
              order #816270
            </h6>
          </div>
          <span>15th June 2022</span>
        </div>
        <div className="userProfileModule_box_list">
          <div>
            <h3>Synthetic Floral Print Sari</h3>
            <span>Lemon Yellow  •  Medium  •  1 unit</span>
          </div>
          <div>
            <h3>₹4,500 </h3>
          </div>
        </div>
        <div className="userProfileModule_box_list">
          <div>
            <h3>Pink Floral Sari & Jacket</h3>
            <span>Medium  •  2 units</span>
          </div>
          <div>
            <h3>₹10,200 </h3>
          </div>
        </div>
        <div className="userProfileModule_box_list_last">
            <div>
              <h6>Bluedart</h6>
              <span><GoPrimitiveDot style={{ color: "#83E46B" }} />Now in Amravati, MH</span>
            </div>
            <div>
              <h6>AWB—91286431928456</h6>
              <div className='userProfileModule_box_list_last_track'  style={{marginTop: "8px"}}>
                <p>Track</p>
                <span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span>
              </div>
            </div>
        </div>
      </div>

      <div className="userProfileModule_box" style={{ marginTop: "1rem" }}>
        <div className="userProfileModule_box_heading">
          <div>
            <h6>
              <img
                src="../img/reviewyourorder.png"
                alt="reviewyourorder"
                width="22"
                style={{ marginRight: "8px" }}
              />
              order #799001
            </h6>
          </div>
          <span>13th June 2022</span>
        </div>
        <div className="userProfileModule_box_list">
          <div>
            <h3>Minimal Jumpsuit</h3>
            <span>Forest Green  •  Medium  •  1 unit</span>
          </div>
          <div>
            <h3>₹5,100 </h3>
          </div>
        </div>
        <div className="userProfileModule_box_list_last">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="orderconfirmed_img">
              <img
                src="../img/returnpolicy.png"
                alt="return policy"
                width="22"
                // style={{ marginRight: "8px" }}
              />
            </div>
            <div>
              <h6>Return Scheduled</h6>
              <span>19th June  •  7am—7pm</span>
            </div>
          </div>
        </div>
      </div>

      <div className="userProfileModule_olderorders">
      <Divider>Older orders</Divider>
      </div>

      {[...Array(2)].map((index)=>{
        return(
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
      })}
    </>
  );
};

export default UserProfileModule;
