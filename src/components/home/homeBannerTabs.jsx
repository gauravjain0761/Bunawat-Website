import React, { useEffect, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from "react-router-dom";
import { useGetDatabyIdQuery } from "../../services/api";
import { getNumberWithComma } from "../../utils/utils";
import BestSellingSection from "./bestSellingSection";


const HomeBannerTabs = ({ data, singleData, setSelectedId }) => {
  const [key, setKey] = useState(0);
  const [menuList, setMenuList] = React.useState(data ?? [])
  const [singleCollection, setSingleCollection] = React.useState(singleData ?? [])

  useEffect(() => {
    setMenuList(data ?? []);
    setSingleCollection(singleData)
  }, [data, singleData]);

  return (
    <>
      <div className="home_banner_wrap">
        <div className="home_banner_inner">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="tab_section"
          >
            {menuList.map((item, index) => {
              return (
                <Tab eventKey={index} key={item?._id} title="">
                  <div className="common_home_banner">
                    <img src={singleCollection?.image} alt="hero_image" style={{ position: 'absolute', width: '100%'}} />
                    <div className="container">
                      <div className="home_banner_title">
                        <h1 className="common_title">{singleCollection?.title}</h1>
                        <div className="summer_list">
                          {singleCollection?.linked_product?.length > 0 &&
                            singleCollection?.linked_product.map(list => (
                              <div className="summer_list_link_wrap" key={list?._id}>
                                <Link to={`/product/${list?._id}/${menuList?.[key]?.type ?? ""}`}>
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
                            <Link to={`/allProduct`}>
                              <div className="summer_list_link">
                                <p>Shop all  {singleCollection?.title}</p>
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
                            <p>{singleCollection?.products?.length ?? 0} unique designs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <Link to="/category" className="banner_links"></Link> */}
                </Tab>
              )
            })}
          </Tabs>
        </div>
      </div>

      <div
        className="tab_section_wrap"
        style={{
          backgroundColor:
            (key == 0 || key == 4)
              ? "#FFDD66"
              : (key == 1 || key == 5)
                ? "#C2D8E3"
                : (key == 2 || key == 6)
                  ? "#E3B9AB"
                  : (key == 3 || key == 7)
                    ? "#B5321D"
                    : "#FFDD66",
        }}
      >
        <div className="container">
          <div className="tab_section_inner">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => {
                setKey(k)
                setSelectedId({
                  id: menuList?.[k]?._id ?? "",
                  type: menuList?.[k]?.type ?? ""
                })
              }}
              className="tab_section"
            >
              {menuList.map((item, index) => {
                return (
                  <Tab eventKey={index} key={item?._id} title={item?.name}>
                    <div className="tab_common_contain">
                      <div className="row">
                        {singleCollection?.products?.slice(0, 4)?.map((list, index) => {
                          return (
                            <div className="col-6">
                              <Link to={`/product/${list?._id}/${menuList?.[key]?.type ?? ""}`}>
                                <div className="common_tab_info">
                                  <div className="common_tab_img">
                                    <img src={list?.image} alt="image" className="product_above_image" width="100%" height="640px" />
                                  </div>
                                  <div className=" common_tab_title">
                                    <div className="summer_list_link_wrap">
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
                                              ></path>
                                              <path
                                                d="M0.600098 8.82018L7.9901 1.43018"
                                                stroke="white"
                                                strokeWidth="1.7"
                                                strokeMiterlimit="10"
                                              ></path>
                                            </g>
                                            <defs>
                                              <clipPath id="clip0_2_1592">
                                                <rect
                                                  width="8.84"
                                                  height="8.84"
                                                  fill="white"
                                                  transform="translate(0 0.580078)"
                                                ></rect>
                                              </clipPath>
                                            </defs>
                                          </svg>
                                        </span>
                                      </div>
                                      <p>{getNumberWithComma(list?.sale_price ?? 0)} </p>
                                    </div>
                                    <div className="save_wrap common_tab_title_save_warp">
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
                                          stroke="#fff"
                                          strokeWidth="1.7"
                                          strokeMiterlimit="10"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          )
                        })}

                      </div>
                    </div>
                  </Tab>
                )
              }
              )}
            </Tabs>
            <Link to="/allProduct" className="see_all_link">
              <p>Shop All</p>
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6128_2248)">
                  <path
                    d="M0.76004 1.43018H8.15004V8.82018"
                    stroke="black"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M0.76004 8.82018L8.15004 1.43018"
                    stroke="black"
                    strokeWidth="1.7"
                    strokeMiterlimit="10"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6128_2248">
                    <rect
                      width="8.84"
                      height="8.84"
                      fill="white"
                      transform="translate(0.160034 0.580078)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>

            <div className="shop_hald_wrap">
              <div className="shop_hald_inner">
                <div className="shop_hald_info">
                  <Link to="/" className="d-flex align-items-center">
                    <h3>Shop Haldi Gallery</h3>
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.09082 1.81824H17.1817V14.9091"
                        stroke="black"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M1.875 17.1786L16.2375 2.81604"
                        stroke="black"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </Link>
                  <p>64 Designs • Updated Monthly</p>
                </div>
                <div className="shop_hald_info">
                  <Link to="/" className="d-flex align-items-center">
                    <h3>Most Loved</h3>
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.09082 1.81824H17.1817V14.9091"
                        stroke="black"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M1.875 17.1786L16.2375 2.81604"
                        stroke="black"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </Link>
                  <p>Our Favourite 100 Designs</p>
                </div>
                <div className="shop_hald_info">
                  <Link to="/allProduct" className="d-flex align-items-center">
                    <h3>Shop All</h3>
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.09082 1.81824H17.1817V14.9091"
                        stroke="black"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M1.875 17.1786L16.2375 2.81604"
                        stroke="black"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </Link>
                  <p>1,600+ Designs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BestSellingSection data={data} singleData={singleData?.link_with_category_collection} keyVal={key} />
    </>
  );
};

export default HomeBannerTabs;
