import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cloth_3 from "../../assets/img/home/cloth_3.png"
import { getNumberWithComma } from "../../utils/utils";

const BestSellingSection = ({ collectionData }) => {
  const [singleCollection, setSingleCollection] = React.useState(collectionData ?? [])

  useEffect(() => {
    setSingleCollection(collectionData ?? []);
  }, [collectionData]);

  const getWidthData = (length) => {
    let temp = []
    for (let i = 0; i < length; i++) {
      if (i % 10 == 0) {
        temp.push(i)
      }
      if (i % 10 == 6) {
        temp.push(i)
      }
    }
    return temp
  }

  const getClassWidth = (index, length) => {
    const data = getWidthData(length)
    if (data.includes(index)) {
      return "col-md-8"
    }
    return "col-md-4"
  }

  return (
    <>
      <div className="best_sallying_wrap common_home_banner haldi_gallery_wrao">
        <div className="container">
          <div className="home_banner_title">
            <h2 className="common_title">{singleCollection?.title}</h2>
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
          <img src={singleCollection?.image} alt="hero_image" style={{ width: '100%', height: '100%' }} />
          {/* <video loop autoPlay muted>
            <source src={best_selling_video} type="video/mp4" />
          </video> */}
        </div>
      </div>

      <div className="cloth_wrap">
        <div className="container">
          <div className="cloth_inner">
            <div className="row">
              {singleCollection?.products?.map((list, index) => {
                return (
                  <>
                    <div className={getClassWidth(index, singleCollection?.products?.length)}>
                      <div className="cloth_deatils_wrap">
                        {/* <Link to="/" className="cloth_deatils_link"> */}
                        <img src={list?.image ?? cloth_3} alt="cloth" />
                        {/* </Link> */}
                        <div className="cloth_info_title">
                          <div className="summer_list_link_wrap">
                            <div className="summer_list_link">
                              <p className="textEllipsis">{list?.name}</p>
                              <span>
                                <svg
                                  width="9"
                                  height="10"
                                  viewBox="0 0 9 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_367_1219)">
                                    <path
                                      d="M0.599976 1.42999H7.98998V8.81999"
                                      stroke="#2A3592"
                                      strokeWidth="1.7"
                                      strokeMiterlimit="10"
                                    />
                                    <path
                                      d="M0.599976 8.81999L7.98998 1.42999"
                                      stroke="#2A3592"
                                      strokeWidth="1.7"
                                      strokeMiterlimit="10"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_367_1219">
                                      <rect
                                        width="8.84"
                                        height="8.84"
                                        fill="white"
                                        transform="translate(0 0.580017)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                            </div>
                            <p>{getNumberWithComma(list?.sale_price ?? 0)} </p>
                          </div>
                          <div className="save_wrap">
                            <p>Save</p>
                            <svg
                              width="20"
                              height="18"
                              viewBox="0 0 20 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.10139 14.6606L6.60714 16.6776C5.48319 17.586 3.87424 16.4235 4.39773 15.0686L5.54477 12.074C5.78342 11.4504 5.55247 10.7422 4.99819 10.3804L2.31149 8.63286C1.09516 7.84764 1.71102 5.95386 3.1583 6.03084L6.36079 6.2002C7.03055 6.23869 7.63101 5.79989 7.80038 5.15323L8.63179 2.05082C9.00901 0.649727 10.9875 0.649727 11.3647 2.05082L12.1961 5.15323C12.3655 5.79989 12.9659 6.231 13.6357 6.2002L16.8382 6.03084C18.2855 5.95386 18.8936 7.83994 17.685 8.63286L14.9983 10.3804C14.4363 10.7422 14.2054 11.4504 14.4517 12.074L15.5988 15.0686C16.1145 16.4235 14.5133 17.586 13.3893 16.6776L10.8951 14.6606C10.3793 14.2372 9.63257 14.2372 9.11679 14.6606H9.10139Z"
                                stroke="#2A3990"
                                strokeWidth="1.7"
                                strokeMiterlimit="10"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellingSection;
