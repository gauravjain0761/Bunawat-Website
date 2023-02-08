import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import "./allProduct.css";
import category_1 from "../../assets/img/category/category_1.png"
import ProductFilters from '../category/productFilters';
import { Nav, Tab, Tabs } from 'react-bootstrap';
import FooterStrip from '../footer/footerStrip';
import { getNumberWithComma } from '../../utils/utils';

const AllProductMenu = ({ data, singleData, setSelectedId }) => {
    const { id } = useParams()
    const [key, setKey] = useState(0);
    const [menuList, setMenuList] = React.useState(data ?? [])
    const [singleList, setSingleList] = React.useState(singleData ?? [])

    useEffect(() => {
        setMenuList(data ?? []);
        setSingleList(singleData)
    }, [data, singleData]);

    useEffect(() => {
        if (id) {
            setKey(0)
        }
    }, [id]);

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
            return "col-md-8"
        }
        return "col-md-4"
    }

    return (

        <div className='category_page_wrapper'>
            <div className='cloth_wrap pt-0 tab_section_wrap'>
                <div className='container'>
                    <div className="cloth_inner">
                        <div className='cloth_title_wrap' style={{ marginBottom: "1rem" }}>
                            <h2><sapn className="limited_edition">Limited Edition</sapn>&nbsp; pieces by adept designers</h2>
                        </div>
                        <Tabs
                            id="justify-tab-example"
                            activeKey={key}
                            onSelect={(k) => {
                                setKey(k)
                                setSelectedId({
                                    id: menuList?.[k]?._id ?? "",
                                    type: menuList?.[k]?.type ?? ""
                                })
                            }}
                            className="tab_section">
                            {menuList.map((item, index) => {
                                return (
                                    <Tab eventKey={index} key={item?._id} title={item?.name}>
                                        <div className="row product_margin">
                                            {singleList?.products?.map((list, index) => {
                                                return (
                                                    <>
                                                        <div className={getClassWidth(index, singleList?.products?.length)} style={{paddingRight: "6px", paddingLeft: "6px"}}>
                                                            <div className="cloth_deatils_wrap category_cloth_deatils_wrap">
                                                                <Link to={`/product/${list?._id}/${data?.[key]?.type ?? ""}`} className="cloth_deatils_link">
                                                                    <img src={list?.image} alt="cloth" className="product_below_image" width="100%" height={getHeightData(singleList?.products?.length).includes(index) ? "640px" : "560px"} />
                                                                </Link>
                                                                <div className="cloth_info_title">
                                                                    <div className="summer_list_link_wrap mobile_summer_list_link_wrap">
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
                                                                    <div className="save_wrap mobile_save_wrap">
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
                                    </Tab>
                                )
                            })}
                        </Tabs>
                    </div>
                </div>
            </div>
            <div style={{ padding: "0rem 1rem" }}>
                <FooterStrip />
            </div>
            <ProductFilters />
        </div>
    )
}

export default AllProductMenu