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

const ProductPageFilter = ({ filters, swipeableIndex, selectedProduct, selectedImage }) => {
    const [filterList, setFilterList] = useState([]);
    const [attributeList, setAttributeList] = useState([]);
    const [attributeData, setAttributeData] = useState({});
    const [addToCart, { isLoading }] = useAddToCartMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        let temp = [...filters] ?? []
        let uniqKey = _.uniq(temp.map((list) => Object.keys(list.varients))?.flat()).map((list, index) => list)
        let tempAttributeList = {};
        let tempAttributeData = {};
        uniqKey.filter(list => list != 'qty').map(val => {
            temp.map((list) => {
                let value = tempAttributeList?.[val] ?? []
                tempAttributeList = { ...tempAttributeList, [val]: [...value, { value: list?._id, label: list?.varients?.[val] }] }
            })
            tempAttributeData = { ...tempAttributeData, [val]: 'defaultValue' }
        })
        setAttributeData(tempAttributeData);
        setAttributeList(tempAttributeList);
        setFilterList(temp)
    }, [filters, swipeableIndex])

    const handleAdd = async () => {
        const selectedData = filterList?.find(list => list?._id == Object.values(attributeData)?.filter(list => list != 'defaultValue')?.slice(-1)?.[0]) ?? {}
        const cartData = JSON.parse(Storage.get("cartData")) ?? []
        console.log("selectedData", selectedData)
        if (Storage.isUserAuthenticated()) {
            await addToCart({
                cart: [{
                    sku: selectedData?._id,
                    product: selectedData?.product_id,
                    qty: 1,
                    amount: selectedProduct?.sale_price
                }]
            }).unwrap().then((data) => {
            }).catch((error) => toast.error(error?.data?.message))
        } else {
            const finalData = [...cartData, {
                sku: {
                    _id: selectedData?._id,
                    product_name: selectedData?.product_name,
                    sku: selectedData?.sku,
                    varients: selectedData?.varients,
                },
                image: selectedImage ?? '',
                product: selectedData?.product_id,
                qty: 1,
                amount: selectedProduct?.sale_price
            }]
            Storage.set("cartData", JSON.stringify(finalData))
            dispatch(setCartCount(finalData?.length))
        }
    }

    return (
        <>
            <div className="product_filters">
                <div className='product_filters_wrap'>
                    <div className="product_filters_wrap product_page_filtter">
                        {Object.keys(attributeList)?.map((item, index) => {
                            return (
                                <>
                                    <div
                                        className="common_select_wrap first_option">
                                        <FormControl>
                                            <Select
                                                defaultValue='defaultValue'
                                                value={attributeData?.[item]}
                                                onChange={(e) => {
                                                    let newData = {}
                                                    Object.entries({ ...attributeData, [item]: e.target.value }).forEach(([key, value], i) => {
                                                        if (index >= i) {
                                                            newData = { ...newData, [key]: value }
                                                        } else {
                                                            newData = { ...newData, [key]: 'defaultValue' }
                                                        }
                                                    });
                                                    setAttributeData(newData)
                                                }}
                                                inputProps={{ "aria-label": "Without label" }}>
                                                <MenuItem value="defaultValue" className="common_option_wrap">
                                                    <div className="common_option">
                                                        <p>
                                                            <div className="common_option">
                                                                <span style={{ textTransform: "uppercase" }}>Select {item}</span>
                                                            </div>
                                                        </p>
                                                    </div>
                                                </MenuItem>
                                                {index == 0 ?
                                                    attributeList?.[item]?.map((list) => {
                                                        return (
                                                            <MenuItem value={list?.value} className="common_option_wrap">
                                                                <div className="common_option">
                                                                    <p>
                                                                        <div className="common_option">
                                                                            <div className="d-flex align-items-center common_radio_btn">
                                                                                <span>{list?.label}</span>
                                                                            </div>
                                                                        </div>
                                                                    </p>
                                                                </div>
                                                            </MenuItem>
                                                        )
                                                    })
                                                    :
                                                    attributeList?.[item]?.filter(list => list?.value == attributeData?.[Object.keys(attributeList)?.[index - 1]])?.map((list) => {
                                                        return (
                                                            <MenuItem value={list?.value} className="common_option_wrap">
                                                                <div className="common_option">
                                                                    <p>
                                                                        <div className="common_option">
                                                                            <div className="d-flex align-items-center common_radio_btn">
                                                                                <span>{list?.label}</span>
                                                                            </div>
                                                                        </div>
                                                                    </p>
                                                                </div>
                                                            </MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </div>
                                </>
                            )
                        })}
                        <div style={{
                            margin: '0 10px 0 10px'
                        }}>
                            <input type="text" placeholder='Qty' defaultValue="1" style={{
                                maxWidth: '100px'
                            }} />
                        </div>
                        <div className="add_btn_wrap">
                            {/* <button className="clear_btn add_btn">
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
                            </button> */}
                            <button className={`clear_btn add_btn ${Object.values(attributeData)?.some(list => list == 'defaultValue') ? 'disabled-btn' : ''}`} disabled={Object.values(attributeData)?.some(list => list == 'defaultValue')} onClick={handleAdd}>
                                <span>Add</span>
                                <span>
                                    {/* <s>₹5,200</s> ₹4,500 */}
                                    <s>{getNumberWithComma(selectedProduct?.cost_price ?? 0)}</s> {getNumberWithComma(selectedProduct?.sale_price ?? 0)}
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="slaman_link">
                        <p>Salmon Pink</p>
                        <ul className="color_list">
                            <li
                                className="active"
                                style={{ border: "1px solid #000", backgroundColor: filterList?.find(list => list?._id == Object.values(attributeData)?.filter(list => list != 'defaultValue')?.slice(-1)?.[0])?.swatch }}
                            ></li>
                            {/* <li style={{ backgroundColor: "#BEF3E0" }}></li>
                            <li
                                style={{ backgroundColor: "#fff", border: "1px solid #d2d2d2" }}
                            ></li>
                            <li style={{ backgroundColor: "#037A44" }}></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPageFilter;
