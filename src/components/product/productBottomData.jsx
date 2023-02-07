import React, { useState } from 'react'
import { Link } from "react-router-dom";
import 'react-spring-bottom-sheet/dist/style.css';
import { getNumberWithComma } from "../../utils/utils";

import product_1 from "../../assets/img/product/product_1.png";
import product_2 from "../../assets/img/product/product_2.png";
import product_3 from "../../assets/img/product/product_3.png";
import know_img from "../../assets/img/product/know_img.png";

import cloth_3 from "../../assets/img/home/cloth_3.png";
import cloth_4 from "../../assets/img/home/cloth_4.png";
import cloth_5 from "../../assets/img/home/cloth_5.png";
import cloth_6 from "../../assets/img/home/cloth_6.png";
import cloth_7 from "../../assets/img/home/cloth_7.png";

import recent_view_1 from "../../assets/img/product/recent/recent_view_1.png";
import recent_view_2 from "../../assets/img/product/recent/recent_view_2.png";
import recent_view_3 from "../../assets/img/product/recent/recent_view_3.png";
import recent_view_4 from "../../assets/img/product/recent/recent_view_4.png";
import recent_view_5 from "../../assets/img/product/recent/recent_view_5.png";
import recent_view_6 from "../../assets/img/product/recent/recent_view_6.png";
import WriteAReviews from '../reviews/WriteAReviews';
import FooterStrip from '../footer/footerStrip';
import ProductPageFilter from './ProductFilter';


const ProductBottomData = ({ product, productIndex, width, similarList }) => {

    const [age, setAge] = useState("size");
    const [showReviewsWrite, setShowReviewsWrite] = useState(false);

    const handleClose = () => setShowReviewsWrite(false);
    const handleShow = () => setShowReviewsWrite(true);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const getWidthData = (length) => {
        let temp = []
        for (let i = 0; i < length; i++) {
            if (i % 10 == 4) {
                temp.push(i)
            }
            if (i % 10 == 8) {
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
        <div>
            {(width < 768) && <div className="product_page">
                <div className="product_slider_section">
                    <div className="row">
                        <div className="col-md-6 product_info_section_wrap" >
                            <div className="product_info_section">
                                <div className="product_title_wrap">
                                    <h2>{product?.name}</h2>
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
                                                <input type="text" placeholder="PIN Code" />
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
                    </div>
                </div>
            </div>
            }
            <div className="structured_fabric_wrapper">
                <div className="container">
                    <div className="structured_fabric_inner">
                        <div className="row">
                            {product?.videos?.slice(0, 3)?.map((list, index) => (
                                <div className="col-md-4 col-sm-6">
                                    <div className="structured_fabric_img">
                                        <video loop autoPlay muted>
                                            <source src={list?.url} type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="product_left_details">
                                        {index == 0 &&
                                            <>
                                                <p>Structured Fabric</p>
                                                <span>Keeps its shape</span>
                                            </>
                                        }
                                        {index == 1 &&
                                            <>
                                                <p>Quality Embroidery</p>
                                                <span>Hand-made by artisans</span>
                                            </>
                                        }
                                        {index == 2 &&
                                            <>
                                                <p>Pleated Pajama Pants</p>
                                                <span>Pair it with</span>
                                            </>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="star_content">
                            <div className="star_wrap">
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.35549 9.83558L3.55965 11.2878C2.75041 11.9418 1.59198 11.1049 1.96888 10.1293L2.79475 7.97322C2.96657 7.52426 2.80029 7.01433 2.40122 6.75382L0.466802 5.49562C-0.40895 4.93026 0.0344686 3.56675 1.0765 3.62218L3.38228 3.74412C3.8645 3.77183 4.29683 3.45589 4.41877 2.9903L5.01739 0.756583C5.28898 -0.252194 6.71346 -0.252194 6.98506 0.756583L7.58367 2.9903C7.70561 3.45589 8.13795 3.76629 8.62016 3.74412L10.9259 3.62218C11.968 3.56675 12.4059 4.92472 11.5356 5.49562L9.60123 6.75382C9.19661 7.01433 9.03033 7.52426 9.20769 7.97322L10.0336 10.1293C10.4049 11.1049 9.25203 11.9418 8.4428 11.2878L6.64695 9.83558C6.27559 9.53073 5.73794 9.53073 5.36658 9.83558H5.35549Z"
                                        fill="black"
                                    />
                                </svg>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.35549 9.83558L3.55965 11.2878C2.75041 11.9418 1.59198 11.1049 1.96888 10.1293L2.79475 7.97322C2.96657 7.52426 2.80029 7.01433 2.40122 6.75382L0.466802 5.49562C-0.40895 4.93026 0.0344686 3.56675 1.0765 3.62218L3.38228 3.74412C3.8645 3.77183 4.29683 3.45589 4.41877 2.9903L5.01739 0.756583C5.28898 -0.252194 6.71346 -0.252194 6.98506 0.756583L7.58367 2.9903C7.70561 3.45589 8.13795 3.76629 8.62016 3.74412L10.9259 3.62218C11.968 3.56675 12.4059 4.92472 11.5356 5.49562L9.60123 6.75382C9.19661 7.01433 9.03033 7.52426 9.20769 7.97322L10.0336 10.1293C10.4049 11.1049 9.25203 11.9418 8.4428 11.2878L6.64695 9.83558C6.27559 9.53073 5.73794 9.53073 5.36658 9.83558H5.35549Z"
                                        fill="black"
                                    />
                                </svg>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.35549 9.83558L3.55965 11.2878C2.75041 11.9418 1.59198 11.1049 1.96888 10.1293L2.79475 7.97322C2.96657 7.52426 2.80029 7.01433 2.40122 6.75382L0.466802 5.49562C-0.40895 4.93026 0.0344686 3.56675 1.0765 3.62218L3.38228 3.74412C3.8645 3.77183 4.29683 3.45589 4.41877 2.9903L5.01739 0.756583C5.28898 -0.252194 6.71346 -0.252194 6.98506 0.756583L7.58367 2.9903C7.70561 3.45589 8.13795 3.76629 8.62016 3.74412L10.9259 3.62218C11.968 3.56675 12.4059 4.92472 11.5356 5.49562L9.60123 6.75382C9.19661 7.01433 9.03033 7.52426 9.20769 7.97322L10.0336 10.1293C10.4049 11.1049 9.25203 11.9418 8.4428 11.2878L6.64695 9.83558C6.27559 9.53073 5.73794 9.53073 5.36658 9.83558H5.35549Z"
                                        fill="black"
                                    />
                                </svg>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.35549 9.83558L3.55965 11.2878C2.75041 11.9418 1.59198 11.1049 1.96888 10.1293L2.79475 7.97322C2.96657 7.52426 2.80029 7.01433 2.40122 6.75382L0.466802 5.49562C-0.40895 4.93026 0.0344686 3.56675 1.0765 3.62218L3.38228 3.74412C3.8645 3.77183 4.29683 3.45589 4.41877 2.9903L5.01739 0.756583C5.28898 -0.252194 6.71346 -0.252194 6.98506 0.756583L7.58367 2.9903C7.70561 3.45589 8.13795 3.76629 8.62016 3.74412L10.9259 3.62218C11.968 3.56675 12.4059 4.92472 11.5356 5.49562L9.60123 6.75382C9.19661 7.01433 9.03033 7.52426 9.20769 7.97322L10.0336 10.1293C10.4049 11.1049 9.25203 11.9418 8.4428 11.2878L6.64695 9.83558C6.27559 9.53073 5.73794 9.53073 5.36658 9.83558H5.35549Z"
                                        fill="black"
                                    />
                                </svg>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.35549 9.83558L3.55965 11.2878C2.75041 11.9418 1.59198 11.1049 1.96888 10.1293L2.79475 7.97322C2.96657 7.52426 2.80029 7.01433 2.40122 6.75382L0.466802 5.49562C-0.40895 4.93026 0.0344686 3.56675 1.0765 3.62218L3.38228 3.74412C3.8645 3.77183 4.29683 3.45589 4.41877 2.9903L5.01739 0.756583C5.28898 -0.252194 6.71346 -0.252194 6.98506 0.756583L7.58367 2.9903C7.70561 3.45589 8.13795 3.76629 8.62016 3.74412L10.9259 3.62218C11.968 3.56675 12.4059 4.92472 11.5356 5.49562L9.60123 6.75382C9.19661 7.01433 9.03033 7.52426 9.20769 7.97322L10.0336 10.1293C10.4049 11.1049 9.25203 11.9418 8.4428 11.2878L6.64695 9.83558C6.27559 9.53073 5.73794 9.53073 5.36658 9.83558H5.35549Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <p>
                                “The fabric, the texture & the work is so subtle. I’m super
                                happy with my purchase.”
                            </p>
                            <div className="female_details">
                                <h3>Priya Mishra</h3>
                                <span>from Indore</span>
                            </div>
                            <div onClick={handleShow} className="review_wrap">
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_2_928)">
                                        <path
                                            d="M14.499 9.21879V15.9168H1.10303V2.52078H7.80103"
                                            stroke="#2A3990"
                                            strokeWidth="1.7"
                                            strokeMiterlimit="10"
                                        />
                                        <path
                                            d="M15.6486 4.08176L8.22689 11.5035L5.4668 11.5532L5.51646 8.79307L12.9382 1.37134L15.6486 4.08176Z"
                                            stroke="#2A3990"
                                            strokeWidth="1.7"
                                            strokeMiterlimit="10"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_928">
                                            <rect
                                                width="16"
                                                height="16"
                                                fill="white"
                                                transform="translate(0.5 0.519897)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>Write a Review</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {similarList?.filter(x => x?._id != product?._id)?.length > 0 && <div className="cloth_wrap might_like_wrap">
                <div className="container">
                    <div className="might_like_inner">
                        <p>You might like these too</p>
                        <Link to="/">
                            see similar
                            <svg
                                width="7"
                                height="8"
                                viewBox="0 0 7 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_1201_3330)">
                                    <path
                                        d="M0.475098 1.19312H6.32691V7.04493"
                                        stroke="#2A3592"
                                        strokeWidth="1.7"
                                        strokeMiterlimit="10"
                                    />
                                    <path
                                        d="M0.475098 7.04493L6.32691 1.19312"
                                        stroke="#2A3592"
                                        strokeWidth="1.7"
                                        strokeMiterlimit="10"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1201_3330">
                                        <rect
                                            width="7"
                                            height="7"
                                            fill="white"
                                            transform="translate(0 0.52002)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </div>
                    <div className="cloth_inner">
                        <div className="row">
                            {similarList?.filter(x => x?._id != product?._id)?.map((list, index) => (
                                <div className={getClassWidth(index, similarList?.length)}>
                                    <div className="cloth_deatils_wrap">
                                        <Link to={`/product/${list?._id}/${list?.type}`} className="cloth_deatils_link">
                                            <img src={list?.images?.[0]?.url} alt="cloth" />
                                        </Link>
                                        <div className="cloth_info_title">
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
                                                <p>{getNumberWithComma(list?.sale_price ?? 0)}</p>
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
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            }

            <div className="know_wrap">
                <div className="container">
                    <div className="know_inner">
                        <img src={know_img} alt="know" />
                        <p>
                            Estd. 1977 ~ Bunawat is curated by the team at our legacy store,
                            Aradhana.
                            <Link to="/" className="know_link">
                                Know the Story
                                <svg
                                    width="11"
                                    height="11"
                                    viewBox="0 0 11 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_1201_3388)">
                                        <path
                                            d="M1.17871 1.48157H9.53844V9.8413"
                                            stroke="white"
                                            strokeWidth="1.7"
                                            strokeMiterlimit="10"
                                        />
                                        <path
                                            d="M1.17871 9.8413L9.53844 1.48157"
                                            stroke="white"
                                            strokeWidth="1.7"
                                            strokeMiterlimit="10"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1201_3388">
                                            <rect
                                                width="10"
                                                height="10"
                                                fill="white"
                                                transform="translate(0.5 0.52002)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <div className="recemtly_wrap">
                <div className="container">
                    <div className="recemtly_inner">
                        <div className="sell_wrap">
                            <h3>Recently Seen</h3>
                            <Link className="sell_link">
                                <span style={{ textTransform: "uppercase" }}>see all recents </span>
                                <svg
                                    width="7"
                                    height="8"
                                    viewBox="0 0 7 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_1201_3245)">
                                        <path
                                            d="M0.475098 1.19312H6.32691V7.04493"
                                            stroke="#2A3592"
                                            strokeWidth="1.7"
                                            strokeMiterlimit="10"
                                        />
                                        <path
                                            d="M0.475098 7.04493L6.32691 1.19312"
                                            stroke="#2A3592"
                                            strokeWidth="1.7"
                                            strokeMiterlimit="10"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1201_3245">
                                            <rect
                                                width="7"
                                                height="7"
                                                fill="white"
                                                transform="translate(0 0.52002)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </div>
                        <div className="recently_col_wrap">
                            <div className="row">
                                <div className="col">
                                    <div className="recent_view_product">
                                        <img src={recent_view_1} alt="recent_view_img" />
                                        <div className="recent_price">
                                            <p>₹6,800</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="recent_view_product">
                                        <img src={recent_view_2} alt="recent_view_img" />
                                        <div className="recent_price">
                                            <p>₹6,800</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="recent_view_product">
                                        <img src={recent_view_3} alt="recent_view_img" />
                                        <div className="recent_price">
                                            <p>₹6,800</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="recent_view_product">
                                        <img src={recent_view_4} alt="recent_view_img" />
                                        <div className="recent_price">
                                            <p>₹6,800</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="recent_view_product">
                                        <img src={recent_view_5} alt="recent_view_img" />
                                        <div className="recent_price">
                                            <p>₹6,800</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="recent_view_product">
                                        <img src={recent_view_6} alt="recent_view_img" />
                                        <div className="recent_price">
                                            <p>₹6,800</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="recent_view_product">
                                        <img src={recent_view_1} alt="recent_view_img" />
                                        <div className="recent_price">
                                            <p>₹6,800</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="recent_view_product">
                                        <img src={recent_view_2} alt="recent_view_img" />
                                        <div className="recent_price">
                                            <p>₹6,800</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="recent_view_product">
                                        <img src={recent_view_3} alt="recent_view_img" />
                                        <div className="recent_price">
                                            <p>₹6,800</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="recent_view_product">
                                        <img src={recent_view_4} alt="recent_view_img" />
                                        <div className="recent_price">
                                            <p>₹6,800</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ paddingBottom: '80px' }}>
                <FooterStrip />
            </div>

            <ProductPageFilter filters={product?.skus} />

            <WriteAReviews showReviewsWrite={showReviewsWrite} handleClose={handleClose} />
        </div>
    )
}

export default ProductBottomData