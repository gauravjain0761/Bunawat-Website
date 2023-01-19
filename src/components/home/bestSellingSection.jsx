import React from "react";

import best_selling_video from "../../assets/video/home/best_selling_video.mp4"

const BestSellingSection = () => {
  return (
    <>
      <div className="best_sallying_wrap common_home_banner haldi_gallery_wrao">
        <div className="container">
          <div className="home_banner_title">
            <h2 className="common_title">Best Selling of May ‘22</h2>
            <div className="summer_list">
              <div className="summer_list_link_wrap">
                <div className="summer_list_link">
                  <p>Casual White Tee & Blue Denim</p>
                  <span>
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2_1592)">
                        <path
                          d="M0.600098 1.43018H7.9901V8.82018"
                          stroke="white"
                          strokeWidth="1.7"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M0.600098 8.82018L7.9901 1.43018"
                          stroke="white"
                          strokeWidth="1.7"
                          strokeMiterlimit="10"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2_1592">
                          <rect
                            width="8.84"
                            height="8.84"
                            fill="white"
                            transform="translate(0 0.580078)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <p>₹2,950 </p>
              </div>
              <div className="summer_list_link_wrap">
                <div className="summer_list_link">
                  <p>Shop all Best Sellers</p>
                  <span>
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2_1592)">
                        <path
                          d="M0.600098 1.43018H7.9901V8.82018"
                          stroke="white"
                          strokeWidth="1.7"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M0.600098 8.82018L7.9901 1.43018"
                          stroke="white"
                          strokeWidth="1.7"
                          strokeMiterlimit="10"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2_1592">
                          <rect
                            width="8.84"
                            height="8.84"
                            fill="white"
                            transform="translate(0 0.580078)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <p>128 options </p>
              </div>
            </div>
          </div>
        </div>
        <div className="best_sale_video">
          <video loop autoPlay muted>
            <source src={best_selling_video} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default BestSellingSection;
