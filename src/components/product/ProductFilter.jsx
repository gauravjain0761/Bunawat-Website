import React, { useEffect, useState } from 'react';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { toast } from 'react-toastify';
import _ from 'lodash';
import { getNumberWithComma } from '../../utils/utils';
import { useAddToCartMutation } from '../../services/api';
import Storage from '../../services/storage';
import { useDispatch } from 'react-redux';
import { setCartCount } from '../../redux/reducers/cart';
import { Modal } from "react-bootstrap";
import { Box, Button } from '@mui/material';
import ReactGA from 'react-ga';
import "./dropdown.css"

export const SelectModal = ({ showSelect, selectedData, handleClose, attributeList, attributeData, filterList, setSelectedData, setQty, setLastSkuData, }) => {
    return (
        <>
            <Modal
                show={showSelect}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body style={{ padding: "2rem 1rem" }}>
                    <div className="common_select_wrap" style={{
                        maxWidth: '100% '
                    }}>
                        <FormControl >
                            <Select value={selectedData?.size ?? 'default'} onChange={(e) => {
                                setSelectedData({
                                    ...selectedData,
                                    size: e.target.value
                                })
                            }}>
                                <MenuItem value="dummy" className="common_option_wrap" sx={{
                                    pointerEvents: 'none'
                                }}>
                                    <div className="common_option">
                                        <p>
                                            <div className="common_option">
                                                <span style={{ textTransform: "uppercase" }}>size — inches</span>
                                            </div>
                                        </p>
                                        <div className="chet_size">
                                            <span>Chest</span>
                                            <span>Waist</span>
                                            <span>Length</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value={attributeList?.size?.filter(size => attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.find(x => x?.label == "xtra small")?.value} className="common_option_wrap" disabled={!(attributeList?.size?.filter(size => attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.some(x => x?.label == "xtra small"))}>
                                    <div className="common_option">
                                        <p>
                                            <div className="common_option">
                                                <div className="d-flex align-items-center common_radio_btn">
                                                    <span>XS - 30</span>
                                                </div>
                                            </div>
                                        </p>
                                        <div className="chet_size chet_size_number">
                                            <span>30</span>
                                            <span>26</span>
                                            <span>30</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value={attributeList?.size?.filter(size => attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.find(x => x?.label == "S")?.value} className="common_option_wrap" disabled={!(attributeList?.size?.filter(size => attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.some(x => x?.label == "S"))}>
                                    <div className="common_option">
                                        <p>
                                            <div className="common_option">
                                                <div className="d-flex align-items-center common_radio_btn">
                                                    <span>S - 30</span>
                                                </div>
                                            </div>
                                        </p>
                                        <div className="chet_size chet_size_number">
                                            <span>32</span>
                                            <span>28</span>
                                            <span>32</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value={attributeList?.size?.filter(size => attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.find(x => x?.label == "M")?.value} className="common_option_wrap" disabled={!(attributeList?.size?.filter(size => attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.some(x => x?.label == "M"))}>
                                    <div className="common_option">
                                        <p>
                                            <div className="common_option">
                                                <div className="d-flex align-items-center common_radio_btn">
                                                    <span>M - 30</span>
                                                </div>
                                            </div>
                                        </p>
                                        <div className="chet_size chet_size_number">
                                            <span>34</span>
                                            <span>30</span>
                                            <span>34</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value={attributeList?.size?.filter(size => attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.find(x => x?.label == "L")?.value} className="common_option_wrap" disabled={!(attributeList?.size?.filter(size => attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.some(x => x?.label == "L"))}>
                                    <div className="common_option">
                                        <p>
                                            <div className="common_option">
                                                <div className="d-flex align-items-center common_radio_btn">
                                                    <span>L - 30</span>
                                                </div>
                                            </div>
                                        </p>
                                        <div className="chet_size chet_size_number">
                                            <span>36</span>
                                            <span>32</span>
                                            <span>36</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value={attributeList?.size?.filter(size => attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.find(x => x?.label == "XL")?.value} className="common_option_wrap" disabled={!(attributeList?.size?.filter(size => attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.some(x => x?.label == "XL"))}>
                                    <div className="common_option">
                                        <p>
                                            <div className="common_option">
                                                <div className="d-flex align-items-center common_radio_btn">
                                                    <span>XL - 30</span>
                                                </div>
                                            </div>
                                        </p>
                                        <div className="chet_size chet_size_number">
                                            <span>38</span>
                                            <span>34</span>
                                            <span>38</span>
                                        </div>
                                    </div>
                                </MenuItem>

                                <MenuItem value='default' className="common_option_wrap" >
                                    <div className="common_option">
                                        <p>
                                            <div className="common_option">
                                                <div className="d-flex align-items-center common_radio_btn">
                                                    <span>Size: Select</span>
                                                </div>
                                            </div>
                                        </p>
                                        {/* <Link to="/sizeGuide" style={{ color: "#2A3592" }}> */}
                                        <div className="chet_size chet_size_number">
                                            <span>
                                                check the Size guide <FiArrowUpRight />
                                            </span>
                                        </div>
                                        {/* </Link> */}
                                    </div>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    {/* <div className="slaman_link" style={{ marginTop: "2px", backgroundColor: "#F2F4FF", padding: "1rem" }}>
                        <p>Salmon Pink</p>
                        <ul className="color_list">
                            {_.uniqBy(attributeList?.color, x => x?.label)?.length > 0 && _.uniqBy(attributeList?.color, x => x?.label)?.map((color, index) => (
                                <li
                                    key={color + index}
                                    className="active"
                                    onClick={() => {
                                        setSelectedData({
                                            ...selectedData,
                                            color,
                                            size: 'default'
                                        })
                                        setQty(1)
                                        setLastSkuData(filterList?.find(list => list?._id == color?.value))
                                    }}
                                    style={{ border: (selectedData?.color?.value == color?.value) ? "3px solid #000" : ".5px solid #000", backgroundColor: color?.label }}>
                                </li>
                            ))}
                        </ul>
                    </div> */}
                    <button className="clear_btn" style={{ marginTop: "10px" }} onClick={handleClose}>
                        <span>Apply</span>
                    </button>
                </Modal.Body>
            </Modal>
        </>
    );
}


const ProductPageFilter = ({ filters, singleProduct, swipeableIndex, selectedProduct, selectedImage, setLastSkuData, qty, setQty, selectedData, setSelectedData }) => {
    // const [filterList, setFilterList] = useState([]);
    // const [attributeList, setAttributeList] = useState([]);
    // const [attributeData, setAttributeData] = useState({});
    const [isCartAdd, setIsCartAdd] = useState(false);
    const [addToCart, { isLoading }] = useAddToCartMutation()
    const dispatch = useDispatch()
    const [showSelect, setShowSelect] = useState(false);

    const handleClose = () => setShowSelect(false);
    const handleShow = () => setShowSelect(true);

    // useEffect(() => {
    //     let temp = [...filters] ?? []
    //     let uniqKey = _.uniq(temp?.map((list) => Object.keys(list?.varients ?? {}))?.flat())?.map((list, index) => list) ?? []
    //     let tempAttributeList = {};
    //     let tempAttributeData = {};
    //     uniqKey.filter(list => list != 'qty').map(val => {
    //         temp.map((list) => {
    //             let value = tempAttributeList?.[val] ?? []
    //             if (!!list?.varients?.[val]) {
    //                 tempAttributeList = { ...tempAttributeList, [val]: [...value, { value: list?._id, label: list?.varients?.[val] }] }
    //             }
    //         })
    //         tempAttributeData = { ...tempAttributeData, [val]: 'defaultValue' }
    //     })
    //     setAttributeData(tempAttributeData);
    //     setAttributeList(tempAttributeList);
    //     setFilterList(temp)
    // }, [filters, swipeableIndex])

    useEffect(() => {
        const data = _.uniqBy(selectedProduct?.attributeList?.color, x => x?.label)?.length > 0 ? _.uniqBy(selectedProduct?.attributeList?.color, x => x?.label) : []
        setSelectedData({
            ...selectedData,
            color: data?.[0],
            size: 'default'
        })
        setQty(1)
        // setLastSkuData(filterList?.find(list => list?._id == data?.[0]?.value) ?? {})
    }, [selectedProduct?.attributeList, selectedProduct?.filterList, swipeableIndex])


    const handleAdd = async () => {
        if ((selectedData?.size && selectedData?.size != "default")) {

            // add GA event
            // ReactGA.event({
            //     category: 'Add to Cart',
            //     action: 'Add to Cart',
            //     label: selectedProduct?.product_name,
            //     value: selectedProduct?.sale_price
            // });

            // // implement facebook pixel
            // window.fbq('track', 'AddToCart', {
            //     content_ids: selectedProduct?._id,
            //     currency: "INR",
            //     value: selectedProduct?.sale_price,
            //     ecomm_totalvalue : selectedProduct?.sale_price,
            //     ecomm_pagetype : "product",
            //     content_type: "product"
            // });

            // // implemt Google Ads Conversion Tracking
            // window.gtag('event', 'conversion', {
            //     send_to: 'AW-568502457/A-xvCKnDzekBELnRio8C',
            //     value: selectedProduct?.sale_price,
            //     currency: 'INR',
            //     transaction_id: '',
            //     value: selectedProduct?.sale_price,
            //     ecomm_totalvalue : selectedProduct?.sale_price,
            //     ecomm_pagetype : "product",
            // });


            // implement Google Ads Conversion Tracking 
            // window.gtag('event', 'conversion', {
            //     send_to: 'AW-606398179/6Z6aCJ6X9PMBEJ3X1t4C',
            //     value: selectedProduct?.sale_price,
            //     currency: 'INR',
            //     transaction_id: '',
            // });

            // implement GTM trigger
            window.dataLayer.push({
                'event': 'gtm4wp.addProductToCartEEC',
                ecomm_pagetype: "product",
                ecomm_totalvalue: selectedProduct?.sale_price,
                value: selectedProduct?.sale_price,
                'Content ID': selectedProduct?._id,
                ecommerce: {
                    'currencyCode': 'INR',
                    'purchase': {
                        actionField: {
                            id: selectedProduct?._id,
                            revenue: selectedProduct?.sale_price,
                        }
                    },
                }
            });



            const selectedFinalData = selectedProduct?.filterList?.find(list => list?._id == selectedData?.size) ?? {}
            const cartData = JSON.parse(Storage.get("cartData")) ?? []
            if (Storage.isUserAuthenticated()) {
                await addToCart({
                    cart: [{
                        sku: selectedFinalData?._id,
                        product: selectedFinalData?.product_id,
                        qty,
                        amount: selectedProduct?.sale_price
                    }]
                }).unwrap().then(() => {
                    setIsCartAdd(true)
                    setTimeout(() => {
                        setIsCartAdd(false)
                    }, 2000)
                }).catch((error) => toast.error(error?.data?.message))
            } else {
                let finalData = [...cartData]
                if (cartData?.some(x => x?.sku?._id == selectedFinalData?._id)) {
                    let indexData = cartData?.findIndex(x => x?.sku?._id == selectedFinalData?._id)
                    finalData[indexData] = { ...finalData[indexData], qty: finalData?.[indexData]?.qty + 1 }
                } else {
                    finalData = [...finalData, {
                        sku: {
                            _id: selectedFinalData?._id,
                            product_name: selectedFinalData?.product_name,
                            sku: selectedFinalData?.sku,
                            varients: selectedFinalData?.varients,
                        },
                        image: selectedImage ?? '',
                        product: selectedFinalData?.product_id,
                        qty,
                        amount: selectedProduct?.sale_price
                    }]
                }
                Storage.set("cartData", JSON.stringify(finalData))
                dispatch(setCartCount(finalData?.length))
                setIsCartAdd(true)
                setTimeout(() => {
                    setIsCartAdd(false)
                }, 2000)
            }
        } else {
            toast.error("Something went wrong!")
        }
    }

    const handleIncrement = async () => {
        if (selectedData?.size && selectedData?.size != "default") {
            const selectedFinalData = selectedProduct?.filterList?.find(list => list?._id == selectedData?.size) ?? {}
            if (qty < selectedFinalData?.inStock_qty) {
                setQty(qty + 1)
            } else {
                toast.error("Product out of stock")
            }
        } else {
            toast.error("Please select size")
        }
    }

    const handleDecrement = async () => {
        if (qty > 1 && selectedData?.size && selectedData?.size != "default") {
            setQty(qty - 1)
        } else if (selectedData?.size && selectedData?.size == "default") {
            toast.error("Please select size")
        }
    }

    return (
        <>
            <div className="product_filters fad_out_product_filters">
                <div className='product_filters_wrap'>
                    <div className="product_filters_wrap product_page_filtter new_filter_menu">
                        <div className="common_select_wrap"
                            style={{ paddingRight: "20px" }}
                        >
                            <FormControl>
                                <Select sx={{
                                    ".MuiPaper-root": {
                                        bottom: "86px",
                                        boxShadow: "none",
                                        top: "auto"
                                    },
                                    '@media (max-width: 768px)': {
                                        left: "0",
                                        right: "0",
                                        width: "100%",
                                        minWidth: " 100%",
                                        bottom: "0",
                                        top: "auto"
                                    },
                                    '@media (max-width: 768px)': {
                                        '.MuiSelect-select': {
                                            paddingLeft: '24px'
                                        },
                                    }
                                }} value={selectedData?.size ?? 'default'} onChange={(e) => {
                                    setSelectedData({
                                        ...selectedData,
                                        size: e.target.value
                                    })
                                }}>
                                    <MenuItem value="dummy" className="common_option_wrap" sx={{
                                        pointerEvents: 'none'
                                    }}>
                                        <div className="common_option">
                                            <p>
                                                <div className="common_option">
                                                    <span style={{ textTransform: "uppercase" }}>size — inches</span>
                                                </div>
                                            </p>
                                            <div className="chet_size">
                                                <span>Chest</span>
                                                <span>Waist</span>
                                                <span>Length</span>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    {/* <MenuItem value={selectedProduct?.attributeList?.size?.filter(size => selectedProduct?.attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.find(x => x?.label == "xtra small")?.value} className="common_option_wrap" disabled={!(selectedProduct?.attributeList?.size?.filter(size => selectedProduct?.attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.some(x => x?.label == "xtra small"))}> */}
                                    {/* <MenuItem value={singleProduct?.skus?.find(list => list?.varients?.color == selectedData?.color?.label && list?.inStock_qty > 0 && list?.varients?.size == "xtra small" && list?.isActive == true)?._id} className="common_option_wrap" disabled={!(singleProduct?.skus?.find(list => list?.varients?.color == selectedData?.color?.label && list?.inStock_qty > 0 && list?.varients?.size == "xtra small" && list?.isActive == true))}>
                                        <div className="common_option">
                                            <p>
                                                <div className="common_option">
                                                    <div className="d-flex align-items-center common_radio_btn new_common_radio_btn">
                                                        <span className='size-menu'>Size : </span> &nbsp;
                                                        <span>XS - 30</span>
                                                    </div>
                                                </div>
                                            </p>
                                            <div className="chet_size chet_size_number">
                                                <span>30</span>
                                                <span>26</span>
                                                <span>30</span>
                                            </div>
                                        </div>
                                    </MenuItem> */}
                                    {/* <MenuItem value={selectedProduct?.attributeList?.size?.filter(size => selectedProduct?.attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.find(x => x?.label == "small (s)")?.value} className="common_option_wrap" disabled={!(selectedProduct?.attributeList?.size?.filter(size => selectedProduct?.attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.some(x => x?.label == "small (s)"))}> */}
                                    <MenuItem value={singleProduct?.skus?.find(list => list?.varients?.color == selectedData?.color?.label && list?.inStock_qty > 0 && list?.varients?.size == "S" && list?.isActive == true)?._id} className="common_option_wrap" disabled={!(singleProduct?.skus?.find(list => list?.varients?.color == selectedData?.color?.label && list?.inStock_qty > 0 && list?.varients?.size == "S" && list?.isActive == true))}>
                                        <div className="common_option">
                                            <p>
                                                <div className="common_option">
                                                    <div className="d-flex align-items-center common_radio_btn new_common_radio_btn">
                                                        <span className='size-menu'>Size : </span> &nbsp;
                                                        <span>S - 30</span>
                                                    </div>
                                                </div>
                                            </p>
                                            <div className="chet_size chet_size_number">
                                                <span>32</span>
                                                <span>28</span>
                                                <span>32</span>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    {/* <MenuItem value={selectedProduct?.attributeList?.size?.filter(size => selectedProduct?.attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.find(x => x?.label == "Medium-(m)")?.value} className="common_option_wrap" disabled={!(selectedProduct?.attributeList?.size?.filter(size => selectedProduct?.attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.some(x => x?.label == "Medium-(m)"))}> */}
                                    <MenuItem value={singleProduct?.skus?.find(list => list?.varients?.color == selectedData?.color?.label && list?.inStock_qty > 0 && list?.varients?.size == "M" && list?.isActive == true)?._id} className="common_option_wrap" disabled={!(singleProduct?.skus?.find(list => list?.varients?.color == selectedData?.color?.label && list?.inStock_qty > 0 && list?.varients?.size == "M" && list?.isActive == true))}>
                                        <div className="common_option">
                                            <p>
                                                <div className="common_option">
                                                    <div className="d-flex align-items-center common_radio_btn new_common_radio_btn">
                                                        <span className='size-menu'>Size : </span> &nbsp;
                                                        <span>M - 30</span>
                                                    </div>
                                                </div>
                                            </p>
                                            <div className="chet_size chet_size_number">
                                                <span>34</span>
                                                <span>30</span>
                                                <span>34</span>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    {/* <MenuItem value={selectedProduct?.attributeList?.size?.filter(size => selectedProduct?.attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.find(x => x?.label == "Large-(L)")?.value} className="common_option_wrap" disabled={!(selectedProduct?.attributeList?.size?.filter(size => selectedProduct?.attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.some(x => x?.label == "Large-(L)"))}> */}
                                    <MenuItem value={singleProduct?.skus?.find(list => list?.varients?.color == selectedData?.color?.label && list?.inStock_qty > 0 && list?.varients?.size == "L" && list?.isActive == true)?._id} className="common_option_wrap" disabled={!(singleProduct?.skus?.find(list => list?.varients?.color == selectedData?.color?.label && list?.inStock_qty > 0 && list?.varients?.size == "L" && list?.isActive == true))}>
                                        <div className="common_option">
                                            <p>
                                                <div className="common_option">
                                                    <div className="d-flex align-items-center common_radio_btn new_common_radio_btn">
                                                        <span className='size-menu'>Size : </span> &nbsp;
                                                        <span>L - 30</span>
                                                    </div>
                                                </div>
                                            </p>
                                            <div className="chet_size chet_size_number">
                                                <span>36</span>
                                                <span>32</span>
                                                <span>36</span>
                                            </div>
                                        </div>
                                    </MenuItem>

                                    {/* <MenuItem value={selectedProduct?.attributeList?.size?.filter(size => selectedProduct?.attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.find(x => x?.label == "Extra Large (XL)")?.value} className="common_option_wrap" disabled={!(selectedProduct?.attributeList?.size?.filter(size => selectedProduct?.attributeList?.color?.filter(x => x?.label == selectedData?.color?.label)?.map(x => x?.value)?.includes(size?.value))?.some(x => x?.label == "Extra Large (XL)"))}> */}
                                    <MenuItem value={singleProduct?.skus?.find(list => list?.varients?.color == selectedData?.color?.label && list?.inStock_qty > 0 && list?.varients?.size == "XL" && list?.isActive == true)?._id} className="common_option_wrap" disabled={!(singleProduct?.skus?.find(list => list?.varients?.color == selectedData?.color?.label && list?.inStock_qty > 0 && list?.varients?.size == "XL" && list?.isActive == true))}>

                                        <div className="common_option">
                                            <p>
                                                <div className="common_option">
                                                    <div className="d-flex align-items-center common_radio_btn new_common_radio_btn">
                                                        <span className='size-menu'>Size : </span> &nbsp;
                                                        <span>XL - 30</span>
                                                    </div>
                                                </div>
                                            </p>
                                            <div className="chet_size chet_size_number">
                                                <span>38</span>
                                                <span>34</span>
                                                <span>38</span>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem value={singleProduct?.skus?.find(list => list?.varients?.color == selectedData?.color?.label && list?.inStock_qty > 0 && list?.varients?.size == "XXL" && list?.isActive == true)?._id} className="common_option_wrap" disabled={!(singleProduct?.skus?.find(list => list?.varients?.color == selectedData?.color?.label && list?.inStock_qty > 0 && list?.varients?.size == "XXL" && list?.isActive == true))}>
                                        <div className="common_option">
                                            <p>
                                                <div className="common_option">
                                                    <div className="d-flex align-items-center common_radio_btn new_common_radio_btn">
                                                        <span className='size-menu'>Size : </span> &nbsp;
                                                        <span>XXL - 30</span>
                                                    </div>
                                                </div>
                                            </p>
                                            <div className="chet_size chet_size_number">
                                                <span>40</span>
                                                <span>36</span>
                                                <span>40</span>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem value='default' className="common_option_wrap border_add web_hide_option" >
                                        <div className="common_option">
                                            <p>
                                                <div className="common_option">
                                                    <div className="d-flex align-items-center common_radio_btn new_common_radio_btn">
                                                        <span>Size: Select</span>
                                                    </div>
                                                </div>
                                            </p>
                                            <Link to="/sizeGuide" style={{ color: "#2A3592" }}>
                                                <div className="chet_size chet_size_number">
                                                    <span>
                                                        check the Size guide <FiArrowUpRight />
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='quantiy_wrapper display_none_in_mobile' style={{
                            margin: '0 10px 0 10px'
                        }}>
                            <div className='quantiy_inner'>
                                <button type='button' className='common_btn' onClick={handleDecrement} >
                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_160_1440)">
                                            <path d="M8.14 5H0" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_160_1440">
                                                <rect width="8.14" height="8.14" fill="#2A3592" transform="translate(0 0.929932)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <input type="text" value={qty} />
                                <button type='button' className='common_btn' onClick={handleIncrement} >
                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_160_1444)">
                                            <path d="M4.20966 0.929932V9.06993" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                            <path d="M8.27965 5H0.139648" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_160_1444">
                                                <rect width="8.14" height="8.14" fill="#2A3592" transform="translate(0.139648 0.929932)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="add_btn_wrap">
                            {isCartAdd ?
                                <button className="clear_btn add_btn new_btn_add_cart">
                                    <span>Added to Cart</span>
                                    <span>
                                        <svg
                                            width="10"
                                            height="8"
                                            viewBox="0 0 10 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.40005 0.960205L3.92005 6.44021L1.30005 3.82021"
                                                stroke="white"
                                                strokeWidth="1.7"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </span>
                                </button>
                                :
                                <button className={`clear_btn add_btn ${(selectedData?.size && selectedData?.size != "default") ? '' : 'disabled-btn new_disabled'}`} disabled={!((selectedData?.size && selectedData?.size != "default"))} onClick={handleAdd}>
                                    <span>Add</span>
                                    <span>
                                        {getNumberWithComma(selectedProduct?.sale_price ?? 0)}
                                    </span>
                                </button>
                            }
                        </div>
                    </div>
                    <div className="slaman_link display_none_in_mobile">
                        <ul className="color_list list_style_not_visible">
                            {/* {
                                selectedData?.color?.label && (
                                    <div
                                        className="active_color_name"
                                    >
                                        <span className="color_name">
                                            {selectedData?.color?.label}
                                        </span>
                                    </div>
                                )
                            } */}


                            {/* {_.uniqBy(selectedProduct?.attributeList?.color, x => x?.label)?.length > 0 && _.uniqBy(selectedProduct?.attributeList?.color, x => x?.label)?.map((color, index) => (
                                <li
                                    className="active"
                                    key={color + index}
                                    onClick={() => {
                                        setSelectedData({
                                            ...selectedData,
                                            color,
                                            size: 'default'
                                        })
                                        setQty(1)
                                        setLastSkuData(selectedProduct?.filterList?.find(list => list?._id == color?.value))
                                    }}
                                    style={{ border: (selectedData?.color?.value == color?.value) ? "3px solid #000" : ".5px solid #000", backgroundColor: color?.label }}>
                                </li>
                            ))} */}
                            {selectedProduct?.swatchColorList?.length > 0 && selectedProduct?.swatchColorList?.map((data, index) => (
                                <>
                                    <li
                                        className="active"
                                        key={data?.color + index}
                                        onClick={() => {
                                            setSelectedData({
                                                ...selectedData,
                                                color: {
                                                    label: data?.color,
                                                    value: data?.value
                                                },
                                                size: 'default'
                                            })
                                            setQty(1)
                                            setLastSkuData(selectedProduct?.filterList?.find(list => list?._id == data?.value))
                                        }}
                                        style={{ border: (selectedData?.color?.value == data?.value) ? "3px solid #000" : ".5px solid #000", background: data?.lable }}>
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <SelectModal showSelect={showSelect} handleClose={handleClose} attributeList={selectedProduct?.attributeList} attributeData={selectedProduct?.attributeData} filterList={selectedProduct?.filterList} selectedData={selectedData} setSelectedData={setSelectedData} setQty={setQty} setLastSkuData={setLastSkuData} />
        </>
    );
}

export default ProductPageFilter;
