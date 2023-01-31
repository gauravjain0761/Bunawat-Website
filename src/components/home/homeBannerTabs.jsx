import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";
import { Grid } from '@mui/material';
import haldi_gallery_1 from "../../assets/img/home/haldi_gallery_1.png";
import haldi_gallery_2 from "../../assets/img/home/haldi_gallery_2.png";
import haldi_gallery_3 from "../../assets/img/home/haldi_gallery_3.png";
import haldi_gallery_4 from "../../assets/img/home/haldi_gallery_4.png";
import bespoke_studio_1 from "../../assets/img/home/bespoke_studio_1.png";
import bespoke_studio_2 from "../../assets/img/home/bespoke_studio_2.png";
import bespoke_studio_3 from "../../assets/img/home/bespoke_studio_3.png";
import bespoke_studio_4 from "../../assets/img/home/bespoke_studio_4.png";
import the_bride_1 from "../../assets/img/home/the_bride_1.png";
import the_bride_2 from "../../assets/img/home/the_bride_2.png";
import the_bride_3 from "../../assets/img/home/the_bride_3.png";
import the_bride_4 from "../../assets/img/home/the_bride_4.png";
import roka_exhibit_1 from "../../assets/img/home/roka_exhibit_1.png";
import roka_exhibit_2 from "../../assets/img/home/roka_exhibit_2.png";
import roka_exhibit_3 from "../../assets/img/home/roka_exhibit_3.png";
import roka_exhibit_4 from "../../assets/img/home/roka_exhibit_4.png";
import { apiConfig } from "../../utils/api";

const HomeBannerTabs = () => {
  const [key, setKey] = useState(0);
  const [collection, setCollection] = React.useState([])
  const getCollection = async () => {
    await apiConfig.get('get_shop_menu').then((response) => {
      if (response?.data?.status) {
        setCollection(response?.data?.collections)
      }
    }).catch((error) => {
      console.log("getCollectionError", error)
    })
  }

  React.useEffect(() => {
    getCollection();
  }, []);
  console.log("get_shopby_collection", collection)

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
            {collection && collection.map((item, index) => {
              return (
                <Tab eventKey={index} title="Haldi Gallery" key={`collectionbanner-${index}`}>
                  <div style={{
                    backgroundImage: `url(${item?.image})`,
                  }} className="common_home_banner haldi_gallery_wrao">
                    <div className="container">
                      <div className="home_banner_title">
                        <h1 className="common_title">{item?.title}</h1>
                        <div className="summer_list">
                          {/* {item && item.linked_product.length > 0 && item?.linked_product.map((linked, linkedIndex) => {
                            return (
                              <div className="summer_list_link_wrap" key={`linked_product-${linkedIndex}`}>
                                <div className="summer_list_link">
                                  <p>{linked?.name}</p>
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
                                <p>₹{linked?.mrp}</p>
                              </div>
                            )
                          })} */}

                          <div className="summer_list_link_wrap">
                            <div className="summer_list_link">
                              <p>{item?.title}</p>
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
                            <p>{item?.products?.length} unique designs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to="/category" className="banner_links"></Link>
                </Tab>
              )
            })}
            {/* <Tab eventKey="haldi_gallery" title="Haldi Gallery">
              <div className="common_home_banner haldi_gallery_wrao">
                <div className="container">
                  <div className="home_banner_title">
                    <h1 className="common_title">Summer Haldi Collection</h1>
                    <div className="summer_list">
                      <div className="summer_list_link_wrap">
                        <div className="summer_list_link">
                          <p>Turmeric Yellow Cotton Dress</p>
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
                        <p>₹4,500 </p>
                      </div>
                      <div className="summer_list_link_wrap">
                        <div className="summer_list_link">
                          <p>Turmeric Yellow Cotton Dress</p>
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
                        <p>₹4,500 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/category" className="banner_links"></Link>
            </Tab> */}

            {/* <Tab eventKey="bespoke_studio" title="">
              <div className="common_home_banner bespoke_studio_wrap">
                <div className="container">
                  <div className="home_banner_title">
                    <h1 className="common_title">Designed & Tailored to Fit</h1>
                    <div className="summer_list">
                      <div className="summer_list_link_wrap">
                        <div className="summer_list_link">
                          <p>Flowing Icewater Suit Dress</p>
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
                        <p>₹4,500 </p>
                      </div>
                      <div className="summer_list_link_wrap">
                        <div className="summer_list_link">
                          <p>Shop Bespoke Studio</p>
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
                        <p>₹4,500 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/category" className="banner_links"></Link>
            </Tab>

            <Tab eventKey="roka_exhibit" title="">
              <div className="common_home_banner roka_exhibit_wrap">
                <div className="container">
                  <div className="home_banner_title">
                    <h1 className="common_title">Impressively Humble</h1>
                    <div className="summer_list">
                      <div className="summer_list_link_wrap">
                        <div className="summer_list_link">
                          <p>Eastern Red Shimmer Sari</p>
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
                        <p>₹4,500 </p>
                      </div>
                      <div className="summer_list_link_wrap">
                        <div className="summer_list_link">
                          <p>Shop the Roka Exhibit</p>
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
                        <p>₹4,500 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/category" className="banner_links"></Link>
            </Tab>

            <Tab eventKey="the_bride" title="">
              <div className="common_home_banner the_bride_wrap">
                <div className="container">
                  <div className="home_banner_title">
                    <h1 className="common_title">
                      Specially Selected Tones of Red
                    </h1>
                    <div className="summer_list">
                      <div className="summer_list_link_wrap">
                        <div className="summer_list_link">
                          <p>Heavy Red Bridal Sari</p>
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
                        <p>₹4,500 </p>
                      </div>
                      <div className="summer_list_link_wrap">
                        <div className="summer_list_link">
                          <p>Shop the Roka Exhibit</p>
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
                        <p>₹4,500 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/category" className="banner_links"></Link>
            </Tab>

            <Tab eventKey="festival_of_lights" title="">
              <div className="common_home_banner festival_of_lights_wrap">
                <div className="container">
                  <div className="home_banner_title">
                    <h1 className="common_title">Summer Haldi Collection</h1>
                    <div className="summer_list">
                      <div className="summer_list_link_wrap">
                        <div className="summer_list_link">
                          <p>Turmeric Yellow Cotton Dress</p>
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
                        <p>₹4,500 </p>
                      </div>
                      <div className="summer_list_link_wrap">
                        <div className="summer_list_link">
                          <p>Turmeric Yellow Cotton Dress</p>
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
                        <p>₹4,500 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/category" className="banner_links"></Link>
            </Tab>

            <Tab eventKey="gujarati_cholis" title="">
              <div className="common_home_banner festival_of_lights_wrap">
                <div className="container">
                  <div className="home_banner_title">
                    <h1 className="common_title">Summer Haldi Collection</h1>
                    <div className="summer_list">
                      <div className="summer_list_link_wrap">
                        <div className="summer_list_link">
                          <p>Turmeric Yellow Cotton Dress</p>
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
                        <p>₹4,500 </p>
                      </div>
                      <div className="summer_list_link_wrap">
                        <div className="summer_list_link">
                          <p>Turmeric Yellow Cotton Dress</p>
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
                        <p>₹4,500 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/category" className="banner_links"></Link>
            </Tab>

            <Tab eventKey="transit_wear" title="">
              <div className="common_home_banner festival_of_lights_wrap">
                <div className="container">
                  <div className="home_banner_title">
                    <h1 className="common_title">Summer Haldi Collection</h1>
                    <div className="summer_list">
                      <div className="summer_list_link_wrap">
                        <div className="summer_list_link">
                          <p>Turmeric Yellow Cotton Dress</p>
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
                        <p>₹4,500 </p>
                      </div>
                      <div className="summer_list_link_wrap">
                        <div className="summer_list_link">
                          <p>Turmeric Yellow Cotton Dress</p>
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
                        <p>₹4,500 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/category" className="banner_links"></Link>
            </Tab> */}
          </Tabs>
        </div>
      </div>

      <div
        className="tab_section_wrap"
        style={{
          backgroundColor:
            key === 0
              ? "#FFDD66"
              : key === 1
                ? "#C2D8E3"
                : key === 2
                  ? "#E3B9AB"
                  : key === 3
                    ? "#B5321D"
                    : "#FFDD66",
        }}
      >
        <div className="container">
          <div className="tab_section_inner">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="tab_section"
            >
              {collection && collection.map((item, index) => {
                return (
                  <Tab eventKey={index} title={item?.name} key={`collectionbannertabs-${index}`}>
                    <div className="tab_common_contain">
                      <Grid container spacing={2}>
                        {item && item?.products?.length > 0 && item?.products.map((product, productIndex) => {
                          return (
                            <Grid item xs={6} key={`itemProducts - ${productIndex}`}>
                              <Link to="/">
                                <div className="common_tab_info">
                                  <div className="common_tab_img">
                                    <img src={product?.image} alt={product?.name} width="100%" height="640px" />
                                  </div>
                                  <div className="common_tab_title">
                                    <div className="summer_list_link_wrap">
                                      <div className="summer_list_link">
                                        <p>{product?.name}</p>
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
                                      <p>₹{product?.mrp}</p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </Grid>
                          )
                        })}
                        <Grid xs={12}>
                          <div className="shop_hald_wrap">
                            <div className="shop_hald_inner">
                              <div className="shop_hald_info">
                                <Link to="/" className="d-flex align-items-center">
                                  <h3>{item?.title}</h3>
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
                                <p>{item?.products?.length} Designs • Updated Monthly</p>
                              </div>
                              <div className="shop_hald_info">
                                <Link to="/" className="d-flex align-items-center">
                                  <h3>{item?.name}</h3>
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
                                <p>Our Favourite {item?.products?.length} Designs</p>
                              </div>
                              <div className="shop_hald_info">
                                <Link to="/" className="d-flex align-items-center">
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
                                <p>{item?.products?.length} Designs</p>
                              </div>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                      {/* <div className="row">
                        <div className="col-6">
                          <Link to="/product">
                            <div className="common_tab_info">
                              <div className="common_tab_img">
                                <img src={haldi_gallery_1} alt="common" />
                              </div>
                              <div className="common_tab_title">
                                <div className="summer_list_link_wrap">
                                  <div className="summer_list_link">
                                    <p>Sparkle Dotted Salmon Sari</p>
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
                                  <p>₹4,500 </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/product">
                            <div className="common_tab_info">
                              <div className="common_tab_img">
                                <img src={haldi_gallery_2} alt="common" />
                              </div>
                              <div className="common_tab_title">
                                <div className="summer_list_link_wrap">
                                  <div className="summer_list_link">
                                    <p>Intricate Mirrored Flowy Ghagra</p>
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
                                  <p>₹4,500 </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/product">
                            <div className="common_tab_info">
                              <div className="common_tab_img">
                                <img src={haldi_gallery_3} alt="common" />
                              </div>
                              <div className="common_tab_title">
                                <div className="summer_list_link_wrap">
                                  <div className="summer_list_link">
                                    <p>Paisley Patterned Ghagra</p>
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
                                  <p>₹4,500 </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/product">
                            <div className="common_tab_info">
                              <div className="common_tab_img">
                                <img src={haldi_gallery_4} alt="common" />
                              </div>
                              <div className="common_tab_title">
                                <div className="summer_list_link_wrap">
                                  <div className="summer_list_link">
                                    <p>Turquoise Crew Kurta</p>
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
                                  <p>₹4,500 </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div> */}
                    </div>
                    {/* <Link to="/category" className="banner_links"></Link> */}
                  </Tab>
                )
              })}
              {/* <Tab eventKey="haldi_gallery" title="Haldi Gallery">
                <div className="tab_common_contain">
                  <div className="row">
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={haldi_gallery_1} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Sparkle Dotted Salmon Sari</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={haldi_gallery_2} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Intricate Mirrored Flowy Ghagra</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={haldi_gallery_3} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Paisley Patterned Ghagra</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={haldi_gallery_4} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Turquoise Crew Kurta</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

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
                      <Link to="/" className="d-flex align-items-center">
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
              </Tab>
              <Tab eventKey="bespoke_studio" title="Bespoke Studio">
                <div className="tab_common_contain">
                  <div className="row">
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={bespoke_studio_1} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Sparkle Dotted Salmon Sari</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={bespoke_studio_2} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Intricate Mirrored Flowy Ghagra</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={bespoke_studio_3} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Paisley Patterned Ghagra</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={bespoke_studio_4} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Turquoise Crew Kurta</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="shop_hald_wrap">
                  <div className="shop_hald_inner">
                    <div className="shop_hald_info">
                      <Link to="/" className="d-flex align-items-center">
                        <h3>Shop Bespoke Studio</h3>
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
                      <p>36 Designs • Updated Monthly</p>
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
                      <Link to="/" className="d-flex align-items-center">
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
              </Tab>
              <Tab eventKey="roka_exhibit" title="Roka Exhibit">
                <div className="tab_common_contain">
                  <div className="row">
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={roka_exhibit_1} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Sparkle Dotted Salmon Sari</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={roka_exhibit_2} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Intricate Mirrored Flowy Ghagra</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={roka_exhibit_3} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Paisley Patterned Ghagra</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={roka_exhibit_4} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Turquoise Crew Kurta</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="shop_hald_wrap">
                  <div className="shop_hald_inner">
                    <div className="shop_hald_info">
                      <Link to="/" className="d-flex align-items-center">
                        <h3>Shop Roka Exhibit</h3>
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
                      <p>72 Designs • Updated Monthly</p>
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
                      <Link to="/" className="d-flex align-items-center">
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
              </Tab>
              <Tab eventKey="the_bride" title="The Bride">
                <div className="tab_common_contain">
                  <div className="row">
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={the_bride_1} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Sparkle Dotted Salmon Sari</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={the_bride_2} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Intricate Mirrored Flowy Ghagra</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={the_bride_3} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Paisley Patterned Ghagra</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={the_bride_4} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Turquoise Crew Kurta</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="shop_hald_wrap">
                  <div className="shop_hald_inner">
                    <div className="shop_hald_info">
                      <Link to="/" className="d-flex align-items-center">
                        <h3>Shop Roka Exhibit</h3>
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
                      <p>48 Designs • Updated Monthly</p>
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
                      <Link to="/" className="d-flex align-items-center">
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
              </Tab>
              <Tab eventKey="festival_of_lights" title="Festival of Lights">
                <div className="tab_common_contain">
                  <div className="row">
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={haldi_gallery_1} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Sparkle Dotted Salmon Sari</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={haldi_gallery_2} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Intricate Mirrored Flowy Ghagra</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={haldi_gallery_3} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Paisley Patterned Ghagra</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={haldi_gallery_4} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Turquoise Crew Kurta</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

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
                      <Link to="/" className="d-flex align-items-center">
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
              </Tab>
              <Tab eventKey="gujarati_cholis" title="Gujarati Cholis">
                <div className="tab_common_contain">
                  <div className="row">
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={haldi_gallery_1} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Sparkle Dotted Salmon Sari</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={haldi_gallery_2} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Intricate Mirrored Flowy Ghagra</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={haldi_gallery_3} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Paisley Patterned Ghagra</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={haldi_gallery_4} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Turquoise Crew Kurta</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
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
                      <Link to="/" className="d-flex align-items-center">
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
              </Tab>
              <Tab eventKey="transit_wear" title="Transit Wear">
                <div className="tab_common_contain">
                  <div className="row">
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={haldi_gallery_1} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Sparkle Dotted Salmon Sari</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={haldi_gallery_2} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Intricate Mirrored Flowy Ghagra</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={haldi_gallery_3} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Paisley Patterned Ghagra</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="/product">
                        <div className="common_tab_info">
                          <div className="common_tab_img">
                            <img src={haldi_gallery_4} alt="common" />
                          </div>
                          <div className="common_tab_title">
                            <div className="summer_list_link_wrap">
                              <div className="summer_list_link">
                                <p>Turquoise Crew Kurta</p>
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
                              <p>₹4,500 </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

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
                      <Link to="/" className="d-flex align-items-center">
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
              </Tab> */}
            </Tabs>
            <Link to="/" className="see_all_link">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBannerTabs;
