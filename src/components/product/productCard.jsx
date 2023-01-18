import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'

import product_slider from "../../assets/img/product/slider_img.png";
import ProductBottomData from './productBottomData';

const ProductCard = ({ product, setSwipeableDisable, productBottomData, index, width }) => {
    console.log("width", width)
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
    };
    return (
        <>
            <div className="product_page">
                <div className="product_slider_section">
                    <div className="row">
                        {(width >= 768) ? (<div className="col-md-6 product_info_section_wrap" onMouseEnter={() => setSwipeableDisable(false)} onTouchStart={() => setSwipeableDisable(false)}>
                            <div className="product_info_section">
                                <div className="product_title_wrap">
                                    <h2>{product}</h2>
                                    <div className="saved_wrap">
                                        <span>Save</span>
                                        <svg
                                            width="19"
                                            height="18"
                                            viewBox="0 0 19 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8.77149 14.6606L6.27724 16.6776C5.15329 17.586 3.54435 16.4235 4.06783 15.0686L5.21488 12.074C5.45353 11.4504 5.22258 10.7422 4.6683 10.3804L1.98159 8.63286C0.765261 7.84764 1.38113 5.95386 2.82841 6.03084L6.0309 6.2002C6.70065 6.23869 7.30112 5.79989 7.47048 5.15323L8.3019 2.05082C8.67911 0.649727 10.6576 0.649727 11.0348 2.05082L11.8662 5.15323C12.0356 5.79989 12.636 6.231 13.3058 6.2002L16.5083 6.03084C17.9556 5.95386 18.5637 7.83994 17.3551 8.63286L14.6684 10.3804C14.1064 10.7422 13.8755 11.4504 14.1218 12.074L15.2689 15.0686C15.7846 16.4235 14.1834 17.586 13.0594 16.6776L10.5652 14.6606C10.0494 14.2372 9.30268 14.2372 8.78689 14.6606H8.77149Z"
                                                stroke="#2A3990"
                                                strokeWidth="1.7"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="common_product_details">
                                    <div>Gold embroidered</div>
                                    <div>Lycra & cotton fabric</div>
                                    <div>Slim fit with flared bottom</div>
                                    <div>Made in Udaipur</div>
                                    <div>
                                        Club members get <span>10% off. </span>
                                        <Link to="" className="product_link">
                                            Join
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_1187_4489)">
                                                    <path
                                                        d="M0.814453 1.15381H10.8461V11.1855"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                    <path
                                                        d="M0.814453 11.1855L10.8461 1.15381"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1187_4489">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="produt_time_wrap">
                                        <Link to="" className="product_link">
                                            Get help on Whatsapp
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_1187_4489)">
                                                    <path
                                                        d="M0.814453 1.15381H10.8461V11.1855"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                    <path
                                                        d="M0.814453 11.1855L10.8461 1.15381"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1187_4489">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                        <p>10am—6pm</p>
                                    </div>
                                    <div className="produt_time_wrap">
                                        <Link to="" className="product_link">
                                            See it live
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_1187_4489)">
                                                    <path
                                                        d="M0.814453 1.15381H10.8461V11.1855"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                    <path
                                                        d="M0.814453 11.1855L10.8461 1.15381"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1187_4489">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                        <p>Next slot at 4:15pm</p>
                                    </div>
                                </div>

                                <div className="stock_list">
                                    <ul>
                                        <li>
                                            <div className="stock_main_wrap">
                                                <div className="stock_title_wrap">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1184_3678)">
                                                            <path
                                                                d="M12 23.1501C18.158 23.1501 23.15 18.1581 23.15 12.0001C23.15 5.84212 18.158 0.850098 12 0.850098C5.842 0.850098 0.849976 5.84212 0.849976 12.0001C0.849976 18.1581 5.842 23.1501 12 23.1501Z"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M17.28 8.42993L10.13 15.5699L6.71997 12.1599"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1184_3678">
                                                                <rect width="24" height="24" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="stock_info">
                                                    <h3>In Stock</h3>
                                                    <p>Ships in 24 hours</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="pin_code_weap">
                                                <input type="text" placeholder="Pin Code" />
                                                <div className="edit_icon">
                                                    <svg
                                                        width="9"
                                                        height="10"
                                                        viewBox="0 0 9 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1184_3686)">
                                                            <path
                                                                d="M8.12998 6.05011V8.64011H0.849976V1.36011H3.43998"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M4.12 5.37013L8.37 1.13013"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1184_3686">
                                                                <rect
                                                                    width="8.98"
                                                                    height="8.98"
                                                                    fill="white"
                                                                    transform="translate(0 0.51001)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="stock_main_wrap">
                                                <div className="stock_title_wrap">
                                                    <svg
                                                        width="24"
                                                        height="22"
                                                        viewBox="0 0 24 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1187_4050)">
                                                            <path
                                                                d="M3.28998 1.56006H12.56C13.91 1.56006 15 2.65006 15 4.00006V17.4401H0.849976V4.00006C0.849976 2.65006 1.93998 1.56006 3.28998 1.56006Z"
                                                                fill="#FAFAFA"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M23.15 17.4299H12.01L12.01 10.0099C12.01 8.36993 13.34 7.03993 14.98 7.03993L20.19 7.03993C21.83 7.03993 23.16 8.36993 23.16 10.0099V17.4299H23.15Z"
                                                                fill="#FAFAFA"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M6.01001 20.4399C7.66686 20.4399 9.01001 19.0968 9.01001 17.4399C9.01001 15.7831 7.66686 14.4399 6.01001 14.4399C4.35316 14.4399 3.01001 15.7831 3.01001 17.4399C3.01001 19.0968 4.35316 20.4399 6.01001 20.4399Z"
                                                                fill="#FAFAFA"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M18.01 20.4399C19.6669 20.4399 21.01 19.0968 21.01 17.4399C21.01 15.7831 19.6669 14.4399 18.01 14.4399C16.3532 14.4399 15.01 15.7831 15.01 17.4399C15.01 19.0968 16.3532 20.4399 18.01 20.4399Z"
                                                                fill="#FAFAFA"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M15.3499 7.05005H3.56995"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M12.0099 10.9399H3.56995"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1187_4050">
                                                                <rect
                                                                    width="24"
                                                                    height="20.58"
                                                                    fill="white"
                                                                    transform="translate(0 0.709961)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="stock_info">
                                                    <h3>Free shipping</h3>
                                                    <p>Above ₹1,000</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="stock_main_wrap">
                                                <div className="stock_title_wrap">
                                                    <svg
                                                        width="22"
                                                        height="22"
                                                        viewBox="0 0 22 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M19.8417 0V9.81048H10.0312"
                                                            stroke="#2A3990"
                                                            strokeWidth="1.7"
                                                            strokeMiterlimit="10"
                                                        />
                                                        <path
                                                            d="M19.8417 9.81049L12.165 2.13379H10.9877C6.05796 2.13379 2.08472 6.10703 2.08472 11.0123C2.08472 15.9175 6.05796 19.9153 10.9877 19.9153C13.4403 19.9153 15.6722 18.9097 17.2664 17.3155"
                                                            stroke="#2A3990"
                                                            strokeWidth="1.7"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="stock_info">
                                                    <h3>14-day return</h3>
                                                    <p>Get 100% store credit</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="stock_main_wrap">
                                                <div className="stock_title_wrap">
                                                    <svg
                                                        width="23"
                                                        height="18"
                                                        viewBox="0 0 23 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1187_4019)">
                                                            <path
                                                                d="M13.33 10C14.9868 10 16.33 8.65685 16.33 7C16.33 5.34315 14.9868 4 13.33 4C11.6731 4 10.33 5.34315 10.33 7C10.33 8.65685 11.6731 10 13.33 10Z"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M21.82 1H4.84998V13H21.82V1Z"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M17.82 17H0.849976V5"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1187_4019">
                                                                <rect
                                                                    width="22.67"
                                                                    height="17.7"
                                                                    fill="white"
                                                                    transform="translate(0 0.149902)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="stock_info">
                                                    <h3>COD Available</h3>
                                                    <p>Pay only on delivery</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="stock_main_wrap">
                                                <div className="stock_title_wrap">
                                                    <svg
                                                        width="23"
                                                        height="24"
                                                        viewBox="0 0 23 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1187_4027)">
                                                            <path
                                                                d="M21.63 3.49487H0.849976V22.3449H21.63V3.49487Z"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M14.71 8.49487V22.3449"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M7.78003 8.49487V22.3449"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M21.63 15.425H0.859985"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M21.63 8.49487H0.859985"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M5.23999 6.29493V0.804932"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M17.24 6.29493V0.804932"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1187_4027">
                                                                <rect
                                                                    width="22.48"
                                                                    height="22.39"
                                                                    fill="white"
                                                                    transform="translate(0 0.804932)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="stock_info">
                                                    <h3>Pay later</h3>
                                                    <p>EMI available over ₹3,000</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>) :
                        (
                            <div className="col-md-6 product_info_section_wrap" onMouseEnter={() => setSwipeableDisable(false)} onTouchStart={() => setSwipeableDisable(false)}>
                            <div className="product_info_section">
                                <div className="product_title_wrap">
                                    <h2>{product}</h2>
                                    <div className="saved_wrap">
                                        <span>Save</span>
                                        <svg
                                            width="19"
                                            height="18"
                                            viewBox="0 0 19 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8.77149 14.6606L6.27724 16.6776C5.15329 17.586 3.54435 16.4235 4.06783 15.0686L5.21488 12.074C5.45353 11.4504 5.22258 10.7422 4.6683 10.3804L1.98159 8.63286C0.765261 7.84764 1.38113 5.95386 2.82841 6.03084L6.0309 6.2002C6.70065 6.23869 7.30112 5.79989 7.47048 5.15323L8.3019 2.05082C8.67911 0.649727 10.6576 0.649727 11.0348 2.05082L11.8662 5.15323C12.0356 5.79989 12.636 6.231 13.3058 6.2002L16.5083 6.03084C17.9556 5.95386 18.5637 7.83994 17.3551 8.63286L14.6684 10.3804C14.1064 10.7422 13.8755 11.4504 14.1218 12.074L15.2689 15.0686C15.7846 16.4235 14.1834 17.586 13.0594 16.6776L10.5652 14.6606C10.0494 14.2372 9.30268 14.2372 8.78689 14.6606H8.77149Z"
                                                stroke="#2A3990"
                                                strokeWidth="1.7"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="common_product_details">
                                    <div>Gold embroidered</div>
                                    <div>Lycra & cotton fabric</div>
                                    <div>Slim fit with flared bottom</div>
                                    <div>Made in Udaipur</div>
                                    <div>
                                        Club members get <span>10% off. </span>
                                        <Link to="" className="product_link">
                                            Join
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_1187_4489)">
                                                    <path
                                                        d="M0.814453 1.15381H10.8461V11.1855"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                    <path
                                                        d="M0.814453 11.1855L10.8461 1.15381"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1187_4489">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="produt_time_wrap">
                                        <Link to="" className="product_link">
                                            Get help on Whatsapp
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_1187_4489)">
                                                    <path
                                                        d="M0.814453 1.15381H10.8461V11.1855"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                    <path
                                                        d="M0.814453 11.1855L10.8461 1.15381"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1187_4489">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                        <p>10am—6pm</p>
                                    </div>
                                    <div className="produt_time_wrap">
                                        <Link to="" className="product_link">
                                            See it live
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_1187_4489)">
                                                    <path
                                                        d="M0.814453 1.15381H10.8461V11.1855"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                    <path
                                                        d="M0.814453 11.1855L10.8461 1.15381"
                                                        stroke="#2A3592"
                                                        strokeWidth="1.7"
                                                        strokeMiterlimit="10"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1187_4489">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                        <p>Next slot at 4:15pm</p>
                                    </div>
                                </div>

                                <div className="stock_list">
                                    <ul>
                                        <li>
                                            <div className="stock_main_wrap">
                                                <div className="stock_title_wrap">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1184_3678)">
                                                            <path
                                                                d="M12 23.1501C18.158 23.1501 23.15 18.1581 23.15 12.0001C23.15 5.84212 18.158 0.850098 12 0.850098C5.842 0.850098 0.849976 5.84212 0.849976 12.0001C0.849976 18.1581 5.842 23.1501 12 23.1501Z"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M17.28 8.42993L10.13 15.5699L6.71997 12.1599"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1184_3678">
                                                                <rect width="24" height="24" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="stock_info">
                                                    <h3>In Stock</h3>
                                                    <p>Ships in 24 hours</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="pin_code_weap">
                                                <input type="text" placeholder="Pin Code" />
                                                <div className="edit_icon">
                                                    <svg
                                                        width="9"
                                                        height="10"
                                                        viewBox="0 0 9 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1184_3686)">
                                                            <path
                                                                d="M8.12998 6.05011V8.64011H0.849976V1.36011H3.43998"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M4.12 5.37013L8.37 1.13013"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1184_3686">
                                                                <rect
                                                                    width="8.98"
                                                                    height="8.98"
                                                                    fill="white"
                                                                    transform="translate(0 0.51001)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="stock_main_wrap">
                                                <div className="stock_title_wrap">
                                                    <svg
                                                        width="24"
                                                        height="22"
                                                        viewBox="0 0 24 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1187_4050)">
                                                            <path
                                                                d="M3.28998 1.56006H12.56C13.91 1.56006 15 2.65006 15 4.00006V17.4401H0.849976V4.00006C0.849976 2.65006 1.93998 1.56006 3.28998 1.56006Z"
                                                                fill="#FAFAFA"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M23.15 17.4299H12.01L12.01 10.0099C12.01 8.36993 13.34 7.03993 14.98 7.03993L20.19 7.03993C21.83 7.03993 23.16 8.36993 23.16 10.0099V17.4299H23.15Z"
                                                                fill="#FAFAFA"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M6.01001 20.4399C7.66686 20.4399 9.01001 19.0968 9.01001 17.4399C9.01001 15.7831 7.66686 14.4399 6.01001 14.4399C4.35316 14.4399 3.01001 15.7831 3.01001 17.4399C3.01001 19.0968 4.35316 20.4399 6.01001 20.4399Z"
                                                                fill="#FAFAFA"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M18.01 20.4399C19.6669 20.4399 21.01 19.0968 21.01 17.4399C21.01 15.7831 19.6669 14.4399 18.01 14.4399C16.3532 14.4399 15.01 15.7831 15.01 17.4399C15.01 19.0968 16.3532 20.4399 18.01 20.4399Z"
                                                                fill="#FAFAFA"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M15.3499 7.05005H3.56995"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M12.0099 10.9399H3.56995"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1187_4050">
                                                                <rect
                                                                    width="24"
                                                                    height="20.58"
                                                                    fill="white"
                                                                    transform="translate(0 0.709961)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="stock_info">
                                                    <h3>Free shipping</h3>
                                                    <p>Above ₹1,000</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="stock_main_wrap">
                                                <div className="stock_title_wrap">
                                                    <svg
                                                        width="22"
                                                        height="22"
                                                        viewBox="0 0 22 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M19.8417 0V9.81048H10.0312"
                                                            stroke="#2A3990"
                                                            strokeWidth="1.7"
                                                            strokeMiterlimit="10"
                                                        />
                                                        <path
                                                            d="M19.8417 9.81049L12.165 2.13379H10.9877C6.05796 2.13379 2.08472 6.10703 2.08472 11.0123C2.08472 15.9175 6.05796 19.9153 10.9877 19.9153C13.4403 19.9153 15.6722 18.9097 17.2664 17.3155"
                                                            stroke="#2A3990"
                                                            strokeWidth="1.7"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="stock_info">
                                                    <h3>14-day return</h3>
                                                    <p>Get 100% store credit</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="stock_main_wrap">
                                                <div className="stock_title_wrap">
                                                    <svg
                                                        width="23"
                                                        height="18"
                                                        viewBox="0 0 23 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1187_4019)">
                                                            <path
                                                                d="M13.33 10C14.9868 10 16.33 8.65685 16.33 7C16.33 5.34315 14.9868 4 13.33 4C11.6731 4 10.33 5.34315 10.33 7C10.33 8.65685 11.6731 10 13.33 10Z"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M21.82 1H4.84998V13H21.82V1Z"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M17.82 17H0.849976V5"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1187_4019">
                                                                <rect
                                                                    width="22.67"
                                                                    height="17.7"
                                                                    fill="white"
                                                                    transform="translate(0 0.149902)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="stock_info">
                                                    <h3>COD Available</h3>
                                                    <p>Pay only on delivery</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="stock_main_wrap">
                                                <div className="stock_title_wrap">
                                                    <svg
                                                        width="23"
                                                        height="24"
                                                        viewBox="0 0 23 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_1187_4027)">
                                                            <path
                                                                d="M21.63 3.49487H0.849976V22.3449H21.63V3.49487Z"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M14.71 8.49487V22.3449"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M7.78003 8.49487V22.3449"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M21.63 15.425H0.859985"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M21.63 8.49487H0.859985"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M5.23999 6.29493V0.804932"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                            <path
                                                                d="M17.24 6.29493V0.804932"
                                                                stroke="#2A3990"
                                                                strokeWidth="1.7"
                                                                strokeMiterlimit="10"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1187_4027">
                                                                <rect
                                                                    width="22.48"
                                                                    height="22.39"
                                                                    fill="white"
                                                                    transform="translate(0 0.804932)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="stock_info">
                                                    <h3>Pay later</h3>
                                                    <p>EMI available over ₹3,000</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        )
                        }

                        <div className="col-md-6 product_info_right_section_wrap" onMouseEnter={() => setSwipeableDisable(false)} onTouchStart={() => setSwipeableDisable(false)}>
                            <div>
                                <Slider {...settings} className="product_slider">
                                    <div>
                                        <img src={product_slider} alt="slider" />
                                    </div>
                                    <div>
                                        <img src={product_slider} alt="slider" />
                                    </div>
                                    <div>
                                        <img src={product_slider} alt="slider" />
                                    </div>
                                    <div>
                                        <img src={product_slider} alt="slider" />
                                    </div>
                                </Slider>
                            </div>

                            <div className="slaman_link">
                                <p>Salmon Pink</p>
                                <ul className="color_list">
                                    <li
                                        className="active"
                                        style={{ backgroundColor: "#F7DACE" }}
                                    ></li>
                                    <li style={{ backgroundColor: "#BEF3E0" }}></li>
                                    <li
                                        style={{
                                            backgroundColor: "#fff",
                                            border: "1px solid #d2d2d2",
                                        }}
                                    ></li>
                                    <li style={{ backgroundColor: "#037A44" }}></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {(width < 768) ? <BottomSheet
                    blocking={false}
                    snapPoints={({ minHeight, maxHeight }) => [200, maxHeight - 80]}
                    expandOnContentDrag
                    open={productBottomData[index]}>
                    <div onMouseEnter={() => setSwipeableDisable(true)} onTouchStart={() => setSwipeableDisable(true)}>
                        <ProductBottomData product={product} width={width} />
                    </div>
                </BottomSheet>
                    :
                    <div onMouseEnter={() => setSwipeableDisable(true)} onTouchStart={() => setSwipeableDisable(true)}>
                        <ProductBottomData product={product} width={width} />
                    </div>
                }
            </div>
        </>
    )
}

export default ProductCard