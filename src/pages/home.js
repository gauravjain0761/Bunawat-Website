import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from "react-router-dom";

import haldi_gallery_1 from "../assets/img/home/haldi_gallery_1.png";
import haldi_gallery_2 from "../assets/img/home/haldi_gallery_2.png"
import haldi_gallery_3 from "../assets/img/home/haldi_gallery_3.png"
import haldi_gallery_4 from "../assets/img/home/haldi_gallery_4.png"
import bespoke_studio_1 from "../assets/img/home/bespoke_studio_1.png";
import bespoke_studio_2 from "../assets/img/home/bespoke_studio_2.png"
import bespoke_studio_3 from "../assets/img/home/bespoke_studio_3.png"
import bespoke_studio_4 from "../assets/img/home/bespoke_studio_4.png"
import the_bride_1 from "../assets/img/home/the_bride_1.png";
import the_bride_2 from "../assets/img/home/the_bride_2.png"
import the_bride_3 from "../assets/img/home/the_bride_3.png"
import the_bride_4 from "../assets/img/home/the_bride_4.png"
import roka_exhibit_1 from "../assets/img/home/roka_exhibit_1.png";
import roka_exhibit_2 from "../assets/img/home/roka_exhibit_2.png"
import roka_exhibit_3 from "../assets/img/home/roka_exhibit_3.png"
import roka_exhibit_4 from "../assets/img/home/roka_exhibit_4.png"

import cloth_1 from "../assets/img/home/cloth_1.png"
import cloth_2 from "../assets/img/home/cloth_2.png"
import cloth_3 from "../assets/img/home/cloth_3.png"
import cloth_4 from "../assets/img/home/cloth_4.png"
import cloth_5 from "../assets/img/home/cloth_5.png"
import cloth_6 from "../assets/img/home/cloth_6.png"
import cloth_7 from "../assets/img/home/cloth_7.png"
import cloth_8 from "../assets/img/home/cloth_8.png"
import cloth_9 from "../assets/img/home/cloth_9.png"
import cloth_10 from "../assets/img/home/cloth_10.png"


import best_selling_video from "../assets/video/home/best_selling_video.mp4"
import Footer from '../components/footer';

const Home = () => {
    const [key, setKey] = useState('haldi_gallery');

    return (
        <div className='home_page_wrap'>
            <div className='home_banner_wrap'>
                <div className='home_banner_inner'>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="tab_section"
                    >
                        <Tab eventKey="haldi_gallery" title="Haldi Gallery">
                            <div className='common_home_banner haldi_gallery_wrao'>
                                <div className="container">
                                    <div className='home_banner_title'>
                                        <h1 className="common_title">Summer Haldi Collection</h1>
                                        <div className='summer_list'>
                                            <div className='summer_list_link_wrap'>
                                                <div className='summer_list_link'>
                                                    <p>Turmeric Yellow Cotton Dress</p>
                                                    <span>
                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_2_1592)">
                                                                <path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                <path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2_1592">
                                                                    <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <p>₹4,500 </p>
                                            </div>
                                            <div className='summer_list_link_wrap'>
                                                <div className='summer_list_link'>
                                                    <p>Turmeric Yellow Cotton Dress</p>
                                                    <span>
                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_2_1592)">
                                                                <path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                <path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2_1592">
                                                                    <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)" />
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
                            <Link to="/category" className='banner_links'></Link>
                        </Tab>

                        <Tab eventKey="bespoke_studio" title="">
                            <div className='common_home_banner bespoke_studio_wrap'>
                                <div className="container">
                                    <div className='home_banner_title'>
                                        <h1 className="common_title">Summer Haldi Collection</h1>
                                        <div className='summer_list'>
                                            <div className='summer_list_link_wrap'>
                                                <div className='summer_list_link'>
                                                    <p>Turmeric Yellow Cotton Dress</p>
                                                    <span>
                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_2_1592)">
                                                                <path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                <path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2_1592">
                                                                    <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <p>₹4,500 </p>
                                            </div>
                                            <div className='summer_list_link_wrap'>
                                                <div className='summer_list_link'>
                                                    <p>Turmeric Yellow Cotton Dress</p>
                                                    <span>
                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_2_1592)">
                                                                <path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                <path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2_1592">
                                                                    <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)" />
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

                            <Link to="/category" className='banner_links'></Link>
                        </Tab>

                        <Tab eventKey="roka_exhibit" title="">
                            <div className='common_home_banner roka_exhibit_wrap'>
                                <div className="container">
                                    <div className='home_banner_title'>
                                        <h1 className="common_title">Summer Haldi Collection</h1>
                                        <div className='summer_list'>
                                            <div className='summer_list_link_wrap'>
                                                <div className='summer_list_link'>
                                                    <p>Turmeric Yellow Cotton Dress</p>
                                                    <span>
                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_2_1592)">
                                                                <path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                <path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2_1592">
                                                                    <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <p>₹4,500 </p>
                                            </div>
                                            <div className='summer_list_link_wrap'>
                                                <div className='summer_list_link'>
                                                    <p>Turmeric Yellow Cotton Dress</p>
                                                    <span>
                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_2_1592)">
                                                                <path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                <path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2_1592">
                                                                    <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)" />
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
                            <Link to="/category" className='banner_links'></Link>
                        </Tab>

                        <Tab eventKey="the_bride" title="">
                            <div className='common_home_banner the_bride_wrap'>
                                <div className="container">
                                    <div className='home_banner_title'>
                                        <h1 className="common_title">Summer Haldi Collection</h1>
                                        <div className='summer_list'>
                                            <div className='summer_list_link_wrap'>
                                                <div className='summer_list_link'>
                                                    <p>Turmeric Yellow Cotton Dress</p>
                                                    <span>
                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_2_1592)">
                                                                <path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                <path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2_1592">
                                                                    <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <p>₹4,500 </p>
                                            </div>
                                            <div className='summer_list_link_wrap'>
                                                <div className='summer_list_link'>
                                                    <p>Turmeric Yellow Cotton Dress</p>
                                                    <span>
                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_2_1592)">
                                                                <path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                <path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2_1592">
                                                                    <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)" />
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
                            <Link to="/category" className='banner_links'></Link>
                        </Tab>

                        <Tab eventKey="festival_of_lights" title="">
                            <div className='common_home_banner festival_of_lights_wrap'>
                                <div className="container">
                                    <div className='home_banner_title'>
                                        <h1 className="common_title">Summer Haldi Collection</h1>
                                        <div className='summer_list'>
                                            <div className='summer_list_link_wrap'>
                                                <div className='summer_list_link'>
                                                    <p>Turmeric Yellow Cotton Dress</p>
                                                    <span>
                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_2_1592)">
                                                                <path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                <path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2_1592">
                                                                    <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <p>₹4,500 </p>
                                            </div>
                                            <div className='summer_list_link_wrap'>
                                                <div className='summer_list_link'>
                                                    <p>Turmeric Yellow Cotton Dress</p>
                                                    <span>
                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_2_1592)">
                                                                <path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                <path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2_1592">
                                                                    <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)" />
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
                            <Link to="/category" className='banner_links'></Link>
                        </Tab>

                        <Tab eventKey="gujarati_cholis" title="">
                            <div className='common_home_banner festival_of_lights_wrap'>
                                <div className="container">
                                    <div className='home_banner_title'>
                                        <h1 className="common_title">Summer Haldi Collection</h1>
                                        <div className='summer_list'>
                                            <div className='summer_list_link_wrap'>
                                                <div className='summer_list_link'>
                                                    <p>Turmeric Yellow Cotton Dress</p>
                                                    <span>
                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_2_1592)">
                                                                <path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                <path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2_1592">
                                                                    <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <p>₹4,500 </p>
                                            </div>
                                            <div className='summer_list_link_wrap'>
                                                <div className='summer_list_link'>
                                                    <p>Turmeric Yellow Cotton Dress</p>
                                                    <span>
                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_2_1592)">
                                                                <path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                <path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2_1592">
                                                                    <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)" />
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
                            <Link to="/category" className='banner_links'></Link>
                        </Tab>

                        <Tab eventKey="transit_wear" title="">
                            <div className='common_home_banner festival_of_lights_wrap'>
                                <div className="container">
                                    <div className='home_banner_title'>
                                        <h1 className="common_title">Summer Haldi Collection</h1>
                                        <div className='summer_list'>
                                            <div className='summer_list_link_wrap'>
                                                <div className='summer_list_link'>
                                                    <p>Turmeric Yellow Cotton Dress</p>
                                                    <span>
                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_2_1592)">
                                                                <path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                <path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2_1592">
                                                                    <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <p>₹4,500 </p>
                                            </div>
                                            <div className='summer_list_link_wrap'>
                                                <div className='summer_list_link'>
                                                    <p>Turmeric Yellow Cotton Dress</p>
                                                    <span>
                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_2_1592)">
                                                                <path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                <path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2_1592">
                                                                    <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)" />
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
                            <Link to="/category" className='banner_links'></Link>
                        </Tab>
                    </Tabs>
                </div>
            </div>

            <div className='tab_section_wrap' style={{ 'backgroundColor': key === 'haldi_gallery' ? '#FFDD66' : key === 'bespoke_studio' ? '#C2D8E3' : key === 'roka_exhibit' ? '#E3B9AB' : key === 'the_bride' ? '#B5321D' : '#FFDD66' }}>
                <div className='container'>
                    <div className='tab_section_inner'>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="tab_section"
                        >
                            <Tab eventKey="haldi_gallery" title="Haldi Gallery">
                                <div className='tab_common_contain'>
                                    <div className='row'>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={haldi_gallery_1} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Sparkle Dotted Salmon Sari</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={haldi_gallery_2} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Intricate Mirrored Flowy Ghagra</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={haldi_gallery_3} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Paisley Patterned Ghagra</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={haldi_gallery_4} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Turquoise Crew Kurta</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="bespoke_studio" title="Bespoke Studio">
                                <div className='tab_common_contain'>
                                    <div className='row'>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={bespoke_studio_1} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Sparkle Dotted Salmon Sari</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={bespoke_studio_2} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Intricate Mirrored Flowy Ghagra</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={bespoke_studio_3} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Paisley Patterned Ghagra</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={bespoke_studio_4} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Turquoise Crew Kurta</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="roka_exhibit" title="Contact">
                                <div className='tab_common_contain'>
                                    <div className='row'>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={roka_exhibit_1} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Sparkle Dotted Salmon Sari</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={roka_exhibit_2} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Intricate Mirrored Flowy Ghagra</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={roka_exhibit_3} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Paisley Patterned Ghagra</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={roka_exhibit_4} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Turquoise Crew Kurta</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="the_bride" title="The Bride">
                                <div className='tab_common_contain'>
                                    <div className='row'>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={the_bride_1} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Sparkle Dotted Salmon Sari</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={the_bride_2} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Intricate Mirrored Flowy Ghagra</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={the_bride_3} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Paisley Patterned Ghagra</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={the_bride_4} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Turquoise Crew Kurta</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="festival_of_lights" title="Festival of Lights">
                                <div className='tab_common_contain'>
                                    <div className='row'>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={haldi_gallery_1} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Sparkle Dotted Salmon Sari</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={haldi_gallery_2} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Intricate Mirrored Flowy Ghagra</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={haldi_gallery_3} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Paisley Patterned Ghagra</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={haldi_gallery_4} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Turquoise Crew Kurta</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="gujarati_cholis" title="gujarati_cholis">
                                <div className='tab_common_contain'>
                                    <div className='row'>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={haldi_gallery_1} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Sparkle Dotted Salmon Sari</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={haldi_gallery_2} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Intricate Mirrored Flowy Ghagra</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={haldi_gallery_3} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Paisley Patterned Ghagra</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={haldi_gallery_4} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Turquoise Crew Kurta</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="transit_wear" title="Transit Wear">
                                <div className='tab_common_contain'>
                                    <div className='row'>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={haldi_gallery_1} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Sparkle Dotted Salmon Sari</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={haldi_gallery_2} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Intricate Mirrored Flowy Ghagra</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={haldi_gallery_3} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Paisley Patterned Ghagra</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="/product">
                                                <div className='common_tab_info'>
                                                    <div className='common_tab_img'>
                                                        <img src={haldi_gallery_4} alt="common" />
                                                    </div>
                                                    <div className='common_tab_title'>
                                                        <div className="summer_list_link_wrap"><div className="summer_list_link"><p>Turquoise Crew Kurta</p><span><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span></div><p>₹4,500 </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                        <Link to="/" className='see_all_link'>
                            <p>Shop All</p>
                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_6128_2248)">
                                    <path d="M0.76004 1.43018H8.15004V8.82018" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                    <path d="M0.76004 8.82018L8.15004 1.43018" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_6128_2248">
                                        <rect width="8.84" height="8.84" fill="white" transform="translate(0.160034 0.580078)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>

                        <div className='shop_hald_wrap'>
                            <div className="shop_hald_inner">
                                <div className='shop_hald_info'>
                                    <Link to="/" className='d-flex align-items-center'>
                                        <h3>Shop Haldi Gallery</h3>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.09082 1.81824H17.1817V14.9091" stroke="black" strokeWidth="3" strokeMiterlimit="10" />
                                            <path d="M1.875 17.1786L16.2375 2.81604" stroke="black" strokeWidth="3" strokeMiterlimit="10" />
                                        </svg>

                                    </Link>
                                    <p>64 Designs  •  Updated Monthly</p>
                                </div>
                                <div className='shop_hald_info'>
                                    <Link to="/" className='d-flex align-items-center'>
                                        <h3>Most Loved</h3>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.09082 1.81824H17.1817V14.9091" stroke="black" strokeWidth="3" strokeMiterlimit="10" />
                                            <path d="M1.875 17.1786L16.2375 2.81604" stroke="black" strokeWidth="3" strokeMiterlimit="10" />
                                        </svg>

                                    </Link>
                                    <p>Our Favourite 100 Designs</p>
                                </div>
                                <div className='shop_hald_info'>
                                    <Link to="/" className='d-flex align-items-center'>
                                        <h3>Shop All</h3>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.09082 1.81824H17.1817V14.9091" stroke="black" strokeWidth="3" strokeMiterlimit="10" />
                                            <path d="M1.875 17.1786L16.2375 2.81604" stroke="black" strokeWidth="3" strokeMiterlimit="10" />
                                        </svg>

                                    </Link>
                                    <p>1,600+ Designs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='best_sallying_wrap common_home_banner haldi_gallery_wrao'>
                <div className="container">
                    <div className='home_banner_title'>
                        <h2 className='common_title'>Best Selling of May ‘22</h2>
                        <div className='summer_list'>
                            <div className='summer_list_link_wrap'>
                                <div className='summer_list_link'>
                                    <p>Casual White Tee & Blue Denim</p>
                                    <span>
                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_1592)">
                                                <path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                <path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_1592">
                                                    <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </div>
                                <p>₹2,950 </p>
                            </div>
                            <div className='summer_list_link_wrap'>
                                <div className='summer_list_link'>
                                    <p>Shop all Best Sellers</p>
                                    <span>
                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_1592)">
                                                <path d="M0.600098 1.43018H7.9901V8.82018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                                <path d="M0.600098 8.82018L7.9901 1.43018" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_1592">
                                                    <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)" />
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
                <div className='best_sale_video'>
                    <video loop autoPlay muted>
                        <source src={best_selling_video} type="video/mp4" />
                    </video>
                </div>
            </div>

            <div className='cloth_wrap'>
                <div className='container'>
                    <div className="cloth_inner">
                        <div className='row'>
                            <div className="col-md-8">
                                <div className='cloth_deatils_wrap'>
                                    <Link to="/" className='cloth_deatils_link'>
                                        <img src={cloth_1} alt="cloth" />
                                    </Link>
                                    <div className='cloth_info_title'>
                                        <div className="summer_list_link_wrap">
                                            <div className="summer_list_link">
                                                <p>Casual White Tee &amp; Blue Denim</p>
                                                <span>
                                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_367_1219)">
                                                            <path d="M0.599976 1.42999H7.98998V8.81999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            <path d="M0.599976 8.81999L7.98998 1.42999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_367_1219">
                                                                <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580017)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                            <p>₹2,950 </p>
                                        </div>
                                        <div className='save_wrap'>
                                            <p>Save</p>
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.10139 14.6606L6.60714 16.6776C5.48319 17.586 3.87424 16.4235 4.39773 15.0686L5.54477 12.074C5.78342 11.4504 5.55247 10.7422 4.99819 10.3804L2.31149 8.63286C1.09516 7.84764 1.71102 5.95386 3.1583 6.03084L6.36079 6.2002C7.03055 6.23869 7.63101 5.79989 7.80038 5.15323L8.63179 2.05082C9.00901 0.649727 10.9875 0.649727 11.3647 2.05082L12.1961 5.15323C12.3655 5.79989 12.9659 6.231 13.6357 6.2002L16.8382 6.03084C18.2855 5.95386 18.8936 7.83994 17.685 8.63286L14.9983 10.3804C14.4363 10.7422 14.2054 11.4504 14.4517 12.074L15.5988 15.0686C16.1145 16.4235 14.5133 17.586 13.3893 16.6776L10.8951 14.6606C10.3793 14.2372 9.63257 14.2372 9.11679 14.6606H9.10139Z" stroke="#2A3990" strokeWidth="1.7" strokeMiterlimit="10" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='cloth_deatils_wrap'>
                                    <Link to="/" className='cloth_deatils_link'>
                                        <img src={cloth_2} alt="cloth" />
                                    </Link>
                                    <div className='cloth_info_title'>
                                        <div className="summer_list_link_wrap">
                                            <div className="summer_list_link">
                                                <p>Sparkle Dotted Salmon Sari</p>
                                                <span>
                                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_367_1219)">
                                                            <path d="M0.599976 1.42999H7.98998V8.81999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            <path d="M0.599976 8.81999L7.98998 1.42999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_367_1219">
                                                                <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580017)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                            <p>₹2,500 </p>
                                        </div>
                                        <div className='save_wrap'>
                                            <p>Save</p>
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.10139 14.6606L6.60714 16.6776C5.48319 17.586 3.87424 16.4235 4.39773 15.0686L5.54477 12.074C5.78342 11.4504 5.55247 10.7422 4.99819 10.3804L2.31149 8.63286C1.09516 7.84764 1.71102 5.95386 3.1583 6.03084L6.36079 6.2002C7.03055 6.23869 7.63101 5.79989 7.80038 5.15323L8.63179 2.05082C9.00901 0.649727 10.9875 0.649727 11.3647 2.05082L12.1961 5.15323C12.3655 5.79989 12.9659 6.231 13.6357 6.2002L16.8382 6.03084C18.2855 5.95386 18.8936 7.83994 17.685 8.63286L14.9983 10.3804C14.4363 10.7422 14.2054 11.4504 14.4517 12.074L15.5988 15.0686C16.1145 16.4235 14.5133 17.586 13.3893 16.6776L10.8951 14.6606C10.3793 14.2372 9.63257 14.2372 9.11679 14.6606H9.10139Z" stroke="#2A3990" strokeWidth="1.7" strokeMiterlimit="10" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className='cloth_deatils_wrap'>
                                    <Link to="/" className='cloth_deatils_link'>
                                        <img src={cloth_3} alt="cloth" />
                                    </Link>
                                    <div className='cloth_info_title'>
                                        <div className="summer_list_link_wrap">
                                            <div className="summer_list_link">
                                                <p>Sparkle Dotted Salmon Sari</p>
                                                <span>
                                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_367_1219)">
                                                            <path d="M0.599976 1.42999H7.98998V8.81999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            <path d="M0.599976 8.81999L7.98998 1.42999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_367_1219">
                                                                <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580017)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                            <p>₹2,500 </p>
                                        </div>
                                        <div className='save_wrap'>
                                            <p>Save</p>
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.10139 14.6606L6.60714 16.6776C5.48319 17.586 3.87424 16.4235 4.39773 15.0686L5.54477 12.074C5.78342 11.4504 5.55247 10.7422 4.99819 10.3804L2.31149 8.63286C1.09516 7.84764 1.71102 5.95386 3.1583 6.03084L6.36079 6.2002C7.03055 6.23869 7.63101 5.79989 7.80038 5.15323L8.63179 2.05082C9.00901 0.649727 10.9875 0.649727 11.3647 2.05082L12.1961 5.15323C12.3655 5.79989 12.9659 6.231 13.6357 6.2002L16.8382 6.03084C18.2855 5.95386 18.8936 7.83994 17.685 8.63286L14.9983 10.3804C14.4363 10.7422 14.2054 11.4504 14.4517 12.074L15.5988 15.0686C16.1145 16.4235 14.5133 17.586 13.3893 16.6776L10.8951 14.6606C10.3793 14.2372 9.63257 14.2372 9.11679 14.6606H9.10139Z" stroke="#2A3990" strokeWidth="1.7" strokeMiterlimit="10" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='cloth_deatils_wrap'>
                                    <Link to="/" className='cloth_deatils_link'>
                                        <img src={cloth_4} alt="cloth" />
                                    </Link>
                                    <div className='cloth_info_title'>
                                        <div className="summer_list_link_wrap">
                                            <div className="summer_list_link">
                                                <p>Intricate Mirrored Flowy Ghagra</p>
                                                <span>
                                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_367_1219)">
                                                            <path d="M0.599976 1.42999H7.98998V8.81999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            <path d="M0.599976 8.81999L7.98998 1.42999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_367_1219">
                                                                <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580017)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                            <p>₹3,100 </p>
                                        </div>
                                        <div className='save_wrap'>
                                            <p>Save</p>
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.10139 14.6606L6.60714 16.6776C5.48319 17.586 3.87424 16.4235 4.39773 15.0686L5.54477 12.074C5.78342 11.4504 5.55247 10.7422 4.99819 10.3804L2.31149 8.63286C1.09516 7.84764 1.71102 5.95386 3.1583 6.03084L6.36079 6.2002C7.03055 6.23869 7.63101 5.79989 7.80038 5.15323L8.63179 2.05082C9.00901 0.649727 10.9875 0.649727 11.3647 2.05082L12.1961 5.15323C12.3655 5.79989 12.9659 6.231 13.6357 6.2002L16.8382 6.03084C18.2855 5.95386 18.8936 7.83994 17.685 8.63286L14.9983 10.3804C14.4363 10.7422 14.2054 11.4504 14.4517 12.074L15.5988 15.0686C16.1145 16.4235 14.5133 17.586 13.3893 16.6776L10.8951 14.6606C10.3793 14.2372 9.63257 14.2372 9.11679 14.6606H9.10139Z" stroke="#2A3990" strokeWidth="1.7" strokeMiterlimit="10" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='cloth_deatils_wrap'>
                                    <Link to="/" className='cloth_deatils_link'>
                                        <img src={cloth_5} alt="cloth" />
                                    </Link>
                                    <div className='cloth_info_title'>
                                        <div className="summer_list_link_wrap">
                                            <div className="summer_list_link">
                                                <p>Intricate Mirrored Flowy Ghagra</p>
                                                <span>
                                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_367_1219)">
                                                            <path d="M0.599976 1.42999H7.98998V8.81999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            <path d="M0.599976 8.81999L7.98998 1.42999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_367_1219">
                                                                <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580017)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                            <p>₹3,100 </p>
                                        </div>
                                        <div className='save_wrap'>
                                            <p>Save</p>
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.10139 14.6606L6.60714 16.6776C5.48319 17.586 3.87424 16.4235 4.39773 15.0686L5.54477 12.074C5.78342 11.4504 5.55247 10.7422 4.99819 10.3804L2.31149 8.63286C1.09516 7.84764 1.71102 5.95386 3.1583 6.03084L6.36079 6.2002C7.03055 6.23869 7.63101 5.79989 7.80038 5.15323L8.63179 2.05082C9.00901 0.649727 10.9875 0.649727 11.3647 2.05082L12.1961 5.15323C12.3655 5.79989 12.9659 6.231 13.6357 6.2002L16.8382 6.03084C18.2855 5.95386 18.8936 7.83994 17.685 8.63286L14.9983 10.3804C14.4363 10.7422 14.2054 11.4504 14.4517 12.074L15.5988 15.0686C16.1145 16.4235 14.5133 17.586 13.3893 16.6776L10.8951 14.6606C10.3793 14.2372 9.63257 14.2372 9.11679 14.6606H9.10139Z" stroke="#2A3990" strokeWidth="1.7" strokeMiterlimit="10" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className='cloth_deatils_wrap'>
                                    <Link to="/" className='cloth_deatils_link'>
                                        <img src={cloth_6} alt="cloth" />
                                    </Link>
                                    <div className='cloth_info_title'>
                                        <div className="summer_list_link_wrap">
                                            <div className="summer_list_link">
                                                <p>Sparkle Dotted Salmon Sari</p>
                                                <span>
                                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_367_1219)">
                                                            <path d="M0.599976 1.42999H7.98998V8.81999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            <path d="M0.599976 8.81999L7.98998 1.42999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_367_1219">
                                                                <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580017)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                            <p>₹2,500 </p>
                                        </div>
                                        <div className='save_wrap'>
                                            <p>Save</p>
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.10139 14.6606L6.60714 16.6776C5.48319 17.586 3.87424 16.4235 4.39773 15.0686L5.54477 12.074C5.78342 11.4504 5.55247 10.7422 4.99819 10.3804L2.31149 8.63286C1.09516 7.84764 1.71102 5.95386 3.1583 6.03084L6.36079 6.2002C7.03055 6.23869 7.63101 5.79989 7.80038 5.15323L8.63179 2.05082C9.00901 0.649727 10.9875 0.649727 11.3647 2.05082L12.1961 5.15323C12.3655 5.79989 12.9659 6.231 13.6357 6.2002L16.8382 6.03084C18.2855 5.95386 18.8936 7.83994 17.685 8.63286L14.9983 10.3804C14.4363 10.7422 14.2054 11.4504 14.4517 12.074L15.5988 15.0686C16.1145 16.4235 14.5133 17.586 13.3893 16.6776L10.8951 14.6606C10.3793 14.2372 9.63257 14.2372 9.11679 14.6606H9.10139Z" stroke="#2A3990" strokeWidth="1.7" strokeMiterlimit="10" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className='cloth_deatils_wrap'>
                                    <Link to="/" className='cloth_deatils_link'>
                                        <img src={cloth_7} alt="cloth" />
                                    </Link>
                                    <div className='cloth_info_title'>
                                        <div className="summer_list_link_wrap">
                                            <div className="summer_list_link">
                                                <p>Paisley Patterned Ghagra</p>
                                                <span>
                                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_367_1219)">
                                                            <path d="M0.599976 1.42999H7.98998V8.81999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            <path d="M0.599976 8.81999L7.98998 1.42999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_367_1219">
                                                                <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580017)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                            <p>₹2,950 </p>
                                        </div>
                                        <div className='save_wrap'>
                                            <p>Save</p>
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.10139 14.6606L6.60714 16.6776C5.48319 17.586 3.87424 16.4235 4.39773 15.0686L5.54477 12.074C5.78342 11.4504 5.55247 10.7422 4.99819 10.3804L2.31149 8.63286C1.09516 7.84764 1.71102 5.95386 3.1583 6.03084L6.36079 6.2002C7.03055 6.23869 7.63101 5.79989 7.80038 5.15323L8.63179 2.05082C9.00901 0.649727 10.9875 0.649727 11.3647 2.05082L12.1961 5.15323C12.3655 5.79989 12.9659 6.231 13.6357 6.2002L16.8382 6.03084C18.2855 5.95386 18.8936 7.83994 17.685 8.63286L14.9983 10.3804C14.4363 10.7422 14.2054 11.4504 14.4517 12.074L15.5988 15.0686C16.1145 16.4235 14.5133 17.586 13.3893 16.6776L10.8951 14.6606C10.3793 14.2372 9.63257 14.2372 9.11679 14.6606H9.10139Z" stroke="#2A3990" strokeWidth="1.7" strokeMiterlimit="10" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className='cloth_deatils_wrap'>
                                    <Link to="/" className='cloth_deatils_link'>
                                        <img src={cloth_8} alt="cloth" />
                                    </Link>
                                    <div className='cloth_info_title'>
                                        <div className="summer_list_link_wrap">
                                            <div className="summer_list_link">
                                                <p>Intricate Mirrored Flowy Ghagra</p>
                                                <span>
                                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_367_1219)">
                                                            <path d="M0.599976 1.42999H7.98998V8.81999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            <path d="M0.599976 8.81999L7.98998 1.42999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_367_1219">
                                                                <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580017)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                            <p>₹2,500 </p>
                                        </div>
                                        <div className='save_wrap'>
                                            <p>Save</p>
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.10139 14.6606L6.60714 16.6776C5.48319 17.586 3.87424 16.4235 4.39773 15.0686L5.54477 12.074C5.78342 11.4504 5.55247 10.7422 4.99819 10.3804L2.31149 8.63286C1.09516 7.84764 1.71102 5.95386 3.1583 6.03084L6.36079 6.2002C7.03055 6.23869 7.63101 5.79989 7.80038 5.15323L8.63179 2.05082C9.00901 0.649727 10.9875 0.649727 11.3647 2.05082L12.1961 5.15323C12.3655 5.79989 12.9659 6.231 13.6357 6.2002L16.8382 6.03084C18.2855 5.95386 18.8936 7.83994 17.685 8.63286L14.9983 10.3804C14.4363 10.7422 14.2054 11.4504 14.4517 12.074L15.5988 15.0686C16.1145 16.4235 14.5133 17.586 13.3893 16.6776L10.8951 14.6606C10.3793 14.2372 9.63257 14.2372 9.11679 14.6606H9.10139Z" stroke="#2A3990" strokeWidth="1.7" strokeMiterlimit="10" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='cloth_deatils_wrap'>
                                    <Link to="/" className='cloth_deatils_link'>
                                        <img src={cloth_9} alt="cloth" />
                                    </Link>
                                    <div className='cloth_info_title'>
                                        <div className="summer_list_link_wrap">
                                            <div className="summer_list_link">
                                                <p>Sparkle Dotted Salmon Sari</p>
                                                <span>
                                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_367_1219)">
                                                            <path d="M0.599976 1.42999H7.98998V8.81999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            <path d="M0.599976 8.81999L7.98998 1.42999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_367_1219">
                                                                <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580017)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                            <p>₹2,500 </p>
                                        </div>
                                        <div className='save_wrap'>
                                            <p>Save</p>
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.10139 14.6606L6.60714 16.6776C5.48319 17.586 3.87424 16.4235 4.39773 15.0686L5.54477 12.074C5.78342 11.4504 5.55247 10.7422 4.99819 10.3804L2.31149 8.63286C1.09516 7.84764 1.71102 5.95386 3.1583 6.03084L6.36079 6.2002C7.03055 6.23869 7.63101 5.79989 7.80038 5.15323L8.63179 2.05082C9.00901 0.649727 10.9875 0.649727 11.3647 2.05082L12.1961 5.15323C12.3655 5.79989 12.9659 6.231 13.6357 6.2002L16.8382 6.03084C18.2855 5.95386 18.8936 7.83994 17.685 8.63286L14.9983 10.3804C14.4363 10.7422 14.2054 11.4504 14.4517 12.074L15.5988 15.0686C16.1145 16.4235 14.5133 17.586 13.3893 16.6776L10.8951 14.6606C10.3793 14.2372 9.63257 14.2372 9.11679 14.6606H9.10139Z" stroke="#2A3990" strokeWidth="1.7" strokeMiterlimit="10" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='cloth_deatils_wrap'>
                                    <Link to="/" className='cloth_deatils_link'>
                                        <img src={cloth_10} alt="cloth" />
                                    </Link>
                                    <div className='cloth_info_title'>
                                        <div className="summer_list_link_wrap">
                                            <div className="summer_list_link">
                                                <p>Intricate Mirrored Flowy Ghagra</p>
                                                <span>
                                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_367_1219)">
                                                            <path d="M0.599976 1.42999H7.98998V8.81999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            <path d="M0.599976 8.81999L7.98998 1.42999" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_367_1219">
                                                                <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580017)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                            <p>₹3,100 </p>
                                        </div>
                                        <div className='save_wrap'>
                                            <p>Save</p>
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.10139 14.6606L6.60714 16.6776C5.48319 17.586 3.87424 16.4235 4.39773 15.0686L5.54477 12.074C5.78342 11.4504 5.55247 10.7422 4.99819 10.3804L2.31149 8.63286C1.09516 7.84764 1.71102 5.95386 3.1583 6.03084L6.36079 6.2002C7.03055 6.23869 7.63101 5.79989 7.80038 5.15323L8.63179 2.05082C9.00901 0.649727 10.9875 0.649727 11.3647 2.05082L12.1961 5.15323C12.3655 5.79989 12.9659 6.231 13.6357 6.2002L16.8382 6.03084C18.2855 5.95386 18.8936 7.83994 17.685 8.63286L14.9983 10.3804C14.4363 10.7422 14.2054 11.4504 14.4517 12.074L15.5988 15.0686C16.1145 16.4235 14.5133 17.586 13.3893 16.6776L10.8951 14.6606C10.3793 14.2372 9.63257 14.2372 9.11679 14.6606H9.10139Z" stroke="#2A3990" strokeWidth="1.7" strokeMiterlimit="10" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='join_the_club_wrap'>
                <div className="container">
                    <div className="join_the_club_inner">
                        <h2 className='common_title'>Join the Club</h2>
                        <p>Professional Tutorials. Beauty Workshops. Special Deals.Be a part of Bunawat Club to get it all, free.</p>
                        <div className="tel_number">
                            <div className='tel_number_wrap'>
                                <span>+91</span>
                                <input type="text" placeholder='Phone Number' />
                            </div>
                            <button type='button' className='join_btn'>Join</button>
                        </div>
                        <Link to="/" className='common_link'>
                            <span>How it Works</span>
                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_775)">
                                    <path d="M0.599976 1.43018H7.98998V8.82018" stroke="#F2E7CB" strokeWidth="1.7" strokeMiterlimit="10" />
                                    <path d="M0.599976 8.82018L7.98998 1.43018" stroke="#F2E7CB" strokeWidth="1.7" strokeMiterlimit="10" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_775">
                                        <rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default Home