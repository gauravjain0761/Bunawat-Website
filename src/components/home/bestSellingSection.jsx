import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getNumberWithComma } from "../../utils/utils";
import SaveButton from "../common/save";

const BestSellingSection = ({ singleData, keyVal, data, selectedId, setSelectedId }) => {
  const [singleList, setSingleList] = React.useState(singleData ?? [])

  useEffect(() => {
    setSingleList(singleData ?? []);
  }, [singleData]);

  const getWidthData = (length) => {
    let temp = []
    for (let i = 0; i < length; i++) {
      if (i % 10 == 0) {
        temp.push(i)
      }
      if (i % 10 == 1) {
        temp.push(i)
      }
      if (i % 10 == 5) {
        temp.push(i)
      }
      if (i % 10 == 6) {
        temp.push(i)
      }
    }
    return temp
  }

  const getHeightData = (length) => {
    let temp = []
    for (let i = 0; i < length; i++) {
      if (i % 10 == 0) {
        temp.push(i)
      }
      if (i % 10 == 1) {
        temp.push(i)
      }
      if (i % 10 == 5) {
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
      return "col-md-6"
    }
    return "col-md-4"
  }

  return (
    <>
      <div className="best_sallying_wrap common_home_banner haldi_gallery_wrao">
        <div className="container">
          <div className="home_banner_title">
            <h2 className="common_title">{singleList?.title}</h2>
            <div className="summer_list">
              {singleList?.linked_product?.length > 0 &&
                singleList?.linked_product.map(list => (
                  <div className="summer_list_link_wrap" key={list?._id}>
                    <Link to={`/product/${list?._id}/${data?.[keyVal]?.type ?? ""}`}>
                      <div className="summer_list_link">
                        <p>{list?.name}</p>
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
                    </Link>
                    <p>{getNumberWithComma(list?.sale_price ?? 0)}</p>
                  </div>
                ))
              }
              <div className="summer_list_link_wrap">
                <Link to={`/allProductList/${singleList?.title}`}>
                  <div className="summer_list_link">
                    <p>Shop all {singleList?.title}</p>
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
                </Link>
                <p>{singleList?.products?.length ?? 0} options </p>
              </div>
            </div>
          </div>
        </div>
        <div className="best_sale_video">
          {singleList?.mediaType == "VIDEO" ?
            <video loop autoPlay muted style={{ width: '100%', height: '100%', objectFit: "fill" }}>
              <source src={singleList?.video} type="video/mp4" />
            </video>
            :
            <img src={singleList?.image} alt="hero_image" style={{ width: '100%', height: '100%', objectFit: "fill" }} />
          }
        </div>
      </div>

      <div className="cloth_wrap">
        <div className="container">
          <div className="cloth_inner">
            <div className="row">
              {singleList?.products?.map((list, index) => {
                return (
                  <>
                    <div className={getClassWidth(index, singleList?.products?.length)} style={{ paddingRight: "5px", paddingLeft: "5px" }}>
                      <div className="cloth_deatils_wrap">
                        <div style={{ textAlign: "center", width: '100%', height: '100%' }}>
                          <Link to={`/product/${list?._id}/${data?.[keyVal]?.type ?? ""}`} className="cloth_deatils_link">
                            <img src={list?.image} alt="cloth" className="product_below_image" width="100%" height={getHeightData(singleList?.products?.length).includes(index) ? "1020px" : "720px"} />
                          </Link>
                        </div>
                        <div className="cloth_info_title">
                          <div className="summer_list_link_wrap mobile_summer_list_link_wrap">
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
                          <SaveButton id={list?._id} isWishlist={list?.isWishlist} isBlue={true} setSelectedId={setSelectedId} selectedId={selectedId} />
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
