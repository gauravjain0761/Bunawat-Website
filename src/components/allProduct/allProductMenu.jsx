import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import "./allProduct.css";
import category_1 from "../../assets/img/category/category_1.png"
import ProductFilters from '../category/productFilters';
import { Nav, Tab, Tabs } from 'react-bootstrap';
import FooterStrip from '../footer/footerStrip';
import { getFirstLetterCapital, getNumberWithComma } from '../../utils/utils';
import SaveButton from '../common/save';
import bridalImage from "../../assets/img/product/bridal.png"
import { CircularProgress } from '@mui/material';

const AllProductMenu = ({ data, singleData, selectedId, setSelectedId, selectedIndex }) => {
    const [width, setWidth] = useState(window?.innerWidth);
    const { id } = useParams()
    const history = useHistory();
    const [key, setKey] = useState(0);
    const [menuList, setMenuList] = React.useState(data ?? [])
    const [singleList, setSingleList] = React.useState(singleData ?? [])
    const [type, setType] = React.useState(data?.[0]?.type ?? "")
    const [collectionName, setCollectionName] = React.useState(data?.[0]?.name ?? "")
    const [products, setProducts] = React.useState(singleData?.products ?? []);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleWindowResize = () => {
        setWidth(window?.innerWidth);
    }

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    useEffect(() => {
        setMenuList(data ?? []);
        setSingleList(singleData)

        let temp = singleData?.products?.length ? [...singleData?.products] : []

        if (singleData?.collections?.length == 0) {
            setProducts(temp);
            return;
        } else {
            const collections = singleData?.collections?.filter((item) => (item?.name !== collectionName && item?.image))?.map((ele) => {
                return {
                    ...ele,
                    isCollection: true
                }
            })

            if (singleData?.products?.length == 0) {
                temp = []
            } else if (singleData?.products?.length == 1) {
                temp = [...singleData?.products, collections[0]]
            } else {

                for (let i = 0; i < collections?.length; i++) {
                    const randomIndex = Math.floor(Math.random() * (temp.length - 2)) + 1;
                    temp.splice(randomIndex, 0, collections[i]);
                }

            }
            setProducts(temp)
        }

    }, [data, singleData]);

    useEffect(() => {
        setKey(selectedIndex)
    }, [selectedIndex]);

    const getWidthData = (length) => {
        let temp = []
        for (let i = 0; i < length; i++) {
            if (i % 10 == 0) {
                temp.push(i)
            }
            // if (i % 10 == 1) {
            //     temp.push(i)
            // }
            // if (i % 10 == 5) {
            //     temp.push(i)
            // }
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
                <div className='container' style={{
                    paddingRight: "8px",
                    paddingLeft: "8px"
                }}>
                    <div className="cloth_inner">
                        <div className='cloth_title_wrap' style={{ marginBottom: "1rem" }}>
                            <h2><sapn className="limited_edition">Limited Edition</sapn>&nbsp; Stylish, affordable designs</h2>
                        </div>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => {
                                setKey(k)
                                setSelectedId({
                                    ...selectedId,
                                    id: menuList?.[k]?._id ?? "",
                                    type: menuList?.[k]?.type ?? ""
                                })
                            }}
                            className="tab_section">
                            {menuList.map((item, index) => {
                                return (
                                    <Tab
                                        eventKey={index} key={item?._id} title={getFirstLetterCapital(item?.name)}
                                        onEnter={() => {
                                            setType(item?.type)
                                            setCollectionName(item?.name)
                                        }}
                                    >
                                        <div className="row product_margin">
                                            {
                                                isLoading && (
                                                    <div className='loader_wrap_product'>
                                                        <CircularProgress />
                                                    </div>
                                                )
                                            }

                                            {products?.map((list, index) => {
                                                if (!list?.isCollection) {
                                                    return (
                                                        <>
                                                            <div className={`fix-padding-might_like_inner ${getClassWidth(index, singleList?.products?.length)}`} >
                                                                <div className="cloth_deatils_wrap category_cloth_deatils_wrap">
                                                                    <Link to={`/product/${list?._id}/${data?.[key]?.type ?? ""}`} className="cloth_deatils_link">
                                                                        <img src={
                                                                            list?.sku_data?.find((item) => item?.images?.length > 0)?.images[0]?.url || list?.image
                                                                            // list?.image
                                                                        } alt="cloth" className="product_below_image" width="100%" height={getHeightData(singleList?.products?.length).includes(index) ? "720px" : "560px"}
                                                                        />
                                                                    </Link>
                                                                    <div className="cloth_info_title cloth_info_title_changes">
                                                                        <div style={{ cursor: 'pointer' }} className="summer_list_link_wrap mobile_summer_list_link_wrap" onClick={() => history.push(`/product/${list?._id}/${data?.[key]?.type ?? ""}`)}>
                                                                            <div className="summer_list_link ">
                                                                                <p className='summer_list_link_wrap_white summer_list_link_wrap_changes'>{list?.name}</p>
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
                                                                                                stroke={(width >= 768) ? "#2A3592" : "#fff"}
                                                                                                strokeWidth="1.7"
                                                                                                strokeMiterlimit="10"
                                                                                            />
                                                                                            <path
                                                                                                d="M0.599976 8.81999L7.98998 1.42999"
                                                                                                stroke={(width >= 768) ? "#2A3592" : "#fff"}
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
                                                                            <p className='summer_list_link_wrap_white summer_list_link_wrap_changes price_number_head'>{getNumberWithComma(list?.sale_price ?? 0)}</p>
                                                                        </div>
                                                                        <SaveButton id={list?._id} isWishlist={list?.isWishlist} isBlue={(width >= 768)} selectedId={selectedId} setSelectedId={setSelectedId} />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </>
                                                    )
                                                } else {
                                                    return (
                                                        <>
                                                            <div className={`fix-padding-might_like_inner ${getClassWidth(index, singleList?.products?.length)}`} >
                                                                <div className="cloth_deatils_wrap category_cloth_deatils_wrap">
                                                                    <img src={
                                                                        list?.image
                                                                    }
                                                                        alt="cloth" className="product_below_image_collection" width="100%"
                                                                        //  height={getHeightData(singleList?.products?.length).includes(index) ? "720px" : "560px"}
                                                                        height={"100%"}
                                                                    />
                                                                    <div className="collection_part">
                                                                        <div style={{ cursor: 'pointer' }} className="summer_list_link_wrap mobile_summer_list_link_wrap"
                                                                            onClick={() => {
                                                                                setKey(menuList?.findIndex((item) => item?.name == list?.name) ?? 0)
                                                                                setSelectedId({
                                                                                    ...selectedId,
                                                                                    id: menuList?.[menuList?.findIndex((item) => item?.name == list?.name) ?? 0]?._id ?? "",
                                                                                    type: menuList?.[menuList?.findIndex((item) => item?.name == list?.name) ?? 0]?.type ?? ""
                                                                                })
                                                                                window.scrollTo(0, 0)
                                                                            }}
                                                                        >
                                                                            <p className='collection_name_head'>
                                                                                The {getFirstLetterCapital(list?.name)} Collection
                                                                            </p>
                                                                            <div
                                                                                style={{
                                                                                    display: "flex",
                                                                                    justifyContent: "space-between",
                                                                                    alignItems: "center",
                                                                                    width: "100%"
                                                                                }}
                                                                            >
                                                                                <p className='collection_name_head_Unique'>
                                                                                    Explore {list?.totalProducts} Unique Design
                                                                                </p>
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
                                                                                                stroke={(width >= 768) ? "#fff" : "#fff"}
                                                                                                strokeWidth="1.7"
                                                                                                strokeMiterlimit="10"
                                                                                            />
                                                                                            <path
                                                                                                d="M0.599976 8.81999L7.98998 1.42999"
                                                                                                stroke={(width >= 768) ? "#fff" : "#fff"}
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
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            {/* {
                                                                (list?.collections && list?.collections?.length > 0) && list?.collections.filter((item) => 
                                                                ( item?.image && item?.name != collectionName)
                                                                ).map((collection, index) => {
    
                                                                    return (
                                                                        <>
                                                                            <div className="fix-padding-might_like_inner col-md-4">
                                                                                <div className="cloth_deatils_wrap category_cloth_deatils_wrap">
                                                                                    <img src={
                                                                                        collection?.image
                                                                                    }
                                                                                        alt="cloth" className="product_below_image" width="100%"
                                                                                        //  height={getHeightData(singleList?.products?.length).includes(index) ? "720px" : "560px"}
                                                                                        height={"100%"}
                                                                                    />
                                                                                    <div className="collection_part">
                                                                                        <div style={{ cursor: 'pointer' }} className="summer_list_link_wrap mobile_summer_list_link_wrap"
                                                                                         onClick={() => {
                                                                                            setKey(menuList?.findIndex((item) => item?.name == collection?.name) ?? 0)
                                                                                            setSelectedId({
                                                                                                ...selectedId,
                                                                                                id: menuList?.[menuList?.findIndex((item) => item?.name == collection?.name) ?? 0]?._id ?? "",
                                                                                                type: menuList?.[menuList?.findIndex((item) => item?.name == collection?.name) ?? 0]?.type ?? ""
                                                                                            })
                                                                                            window.scrollTo(0, 0)
                                                                                         }}
                                                                                         >
                                                                                            <p className='collection_name_head'>
                                                                                                The {getFirstLetterCapital(collection?.name)} Collection
                                                                                            </p>
                                                                                            <div
                                                                                                style={{
                                                                                                    display: "flex",
                                                                                                    justifyContent: "space-between",
                                                                                                    alignItems: "center",
                                                                                                    width: "100%"
                                                                                                }}
                                                                                            >
                                                                                                <p className='collection_name_head_Unique'>
                                                                                                    Explore {list?.collection_products} Unique Design
                                                                                                </p>
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
                                                                                                                stroke={(width >= 768) ? "#fff" : "#fff"}
                                                                                                                strokeWidth="1.7"
                                                                                                                strokeMiterlimit="10"
                                                                                                            />
                                                                                                            <path
                                                                                                                d="M0.599976 8.81999L7.98998 1.42999"
                                                                                                                stroke={(width >= 768) ? "#fff" : "#fff"}
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
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
    
                                                                        </>
                                                                    )
                                                                })
                                                            } */}
                                                        </>
                                                    )
                                                }


                                            })}

                                            {(products?.length == 0 && !isLoading) && (
                                                // <div className="col-md-12">
                                                <div className="no_product_found">
                                                    No product found
                                                </div>
                                                // </div>
                                            )}


                                            {/* {
                                                (singleList?.products?.length > 0) && (
                                                    <>
                                                        <div className="fix-padding-might_like_inner col-md-4">
                                                            <img src={bridalImage} alt="cloth" className="product_below_image" width="100%" height="auto"
                                                                onClick={() =>
                                                                    setKey(menuList?.findIndex((item) => item?.type == "COLLECTION") ?? 0)
                                                                }
                                                            />
                                                        </div>
                                                    </>
                                                )
                                            } */}


                                        </div>
                                    </Tab>
                                )
                            })}
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className='container' style={{ padding: "0rem 2rem" }}>
                <FooterStrip />
            </div>
            <ProductFilters singleData={singleData} selectedId={selectedId} setSelectedId={setSelectedId} />
        </div >
    )
}

export default AllProductMenu