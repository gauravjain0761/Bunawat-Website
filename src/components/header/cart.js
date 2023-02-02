import React, { useEffect, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cart_1 from '../../assets/img/cart/cart_1.png';
import cart_2 from '../../assets/img/cart/cart_2.png';
import cart_3 from '../../assets/img/cart/cart_3.png';
import saved_1 from '../../assets/img/saved/saved_1.png';
import saved_2 from '../../assets/img/saved/saved_2.png';
import saved_3 from '../../assets/img/saved/saved_3.png';
import saved_4 from '../../assets/img/saved/saved_4.png';
import saved_5 from '../../assets/img/saved/saved_5.png';
import saved_6 from '../../assets/img/saved/saved_6.png';
import saved_7 from '../../assets/img/saved/saved_7.png';
import saved_8 from '../../assets/img/saved/saved_8.png';
import { useGetAllCartQuery } from '../../services/api';
import { getNumberWithComma } from '../../utils/utils';

const Cart = ({ activeHeader, handleCartClose }) => {
    const { data, error, isLoading } = useGetAllCartQuery()
    const [cartList, setCartList] = useState([{
        name: 'Synthetic Floral Print Sari',
        color: 'Lemon Yellow',
        size: 'Medium',
        sale_price: '500',
        qty: 1
    }, {
        name: 'Synthetic Floral Print Sari',
        color: 'Lemon Yellow',
        size: 'Medium',
        sale_price: '1000',
        qty: 1
    }]);

    const [cartPrice, setCartPrice] = useState({
        total: 0,
        price: 0
    });

    const handleDecrement = (index) => {
        let temp = [...cartList]
        if (temp[index].qty > 0) {
            temp[index] = { ...temp[index], qty: temp[index].qty - 1 }
            setCartList(temp)
        }
    }

    const handleIncrement = (index) => {
        let temp = [...cartList]
        temp[index] = { ...temp[index], qty: temp[index].qty + 1 }
        setCartList(temp)
    }

    const handleRemove = (index) => {
        let temp = [...cartList]
        temp = temp.filter((_, i) => i !== index)
        setCartList(temp)
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    useEffect(() => {
        let temp = [...cartList]
        let countPrice = 0
        if (temp.length > 0) {
            countPrice = temp.reduce((total, list) => {
                return total + (Number(list?.qty) * Number(list?.sale_price))
            }, 0)
            setCartPrice({
                ...cartPrice,
                price: countPrice
            })
        }
    }, [cartList])

    return (
        <div className="cart_inner">
            <Tabs
                defaultActiveKey="cart"
                id="uncontrolled-tab-example"
                className="">
                <Tab eventKey="cart" title="Cart">
                    <div className='cart_wrapper'>
                        {cartList?.map((cart, index) => {
                            return (
                                <div className='cart_information'>
                                    <div className="card_img">
                                        <Link to="/product" onClick={handleCartClose} >
                                            <img src={cart_1} alt="cart" />
                                        </Link>
                                    </div>
                                    <div className="cart_product_info">
                                        <h3>{cart?.name}</h3>
                                        <p>{`${cart?.color}  •  ${cart?.size}`}</p>
                                        <div className='quantiy_wrapper'>
                                            <p>Qty</p>
                                            <div className='quantiy_inner'>
                                                <button type='button' className='common_btn' onClick={() => handleDecrement(index)}>
                                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_160_1440)">
                                                            <path d="M8.14 5H0" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_160_1440">
                                                                <rect width="8.14" height="8.14" fill={activeHeader ? "#2A3592" : "#fff"} transform="translate(0 0.929932)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </button>
                                                <input type="text" placeholder='1' value={cart?.qty} />
                                                <button type='button' className='common_btn' onClick={() => handleIncrement(index)}>
                                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_160_1444)">
                                                            <path d="M4.20966 0.929932V9.06993" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            <path d="M8.27965 5H0.139648" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_160_1444">
                                                                <rect width="8.14" height="8.14" fill={activeHeader ? "#2A3592" : "#fff"} transform="translate(0.139648 0.929932)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className='remove_cart_block'>
                                            <p>{getNumberWithComma(cart?.sale_price)} </p>
                                            <button type='button' className='remove_btn' onClick={() => handleRemove(index)}>
                                                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_160_1450)">
                                                        <path d="M3.35999 1.0249L7.39999 5.0649L3.35999 9.1149" stroke="#DA4949" strokeWidth="1.7" strokeMiterlimit="10" />
                                                        <path d="M0.0100098 5.07471H7.40001" stroke="#DA4949" strokeWidth="1.7" strokeMiterlimit="10" />
                                                        <path d="M8.15002 0.514893V9.51489" stroke="#DA4949" strokeWidth="1.7" strokeMiterlimit="10" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_160_1450">
                                                            <rect width="8.99" height="9.29" fill={activeHeader ? "#2A3592" : "#fff"} transform="translate(0.0100098 0.424805)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span>Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <Link to="/checkout" onClick={handleCartClose}>
                        <button type="button" className="checkout_btn">
                            <span>Checkout</span>
                            <span><s>{getNumberWithComma(cartPrice?.total)}</s>{getNumberWithComma(cartPrice?.price)}</span>
                        </button>
                    </Link>
                </Tab>
                <Tab eventKey="saved" title="Saved">
                    <div className='saved_wrapper'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='saved_img_information'>
                                    <div className="save_item_img">
                                        <Link to="/product" onClick={handleCartClose}>
                                            <img src={saved_1} alt="saved img" />
                                        </Link>
                                    </div>
                                    <div className='cart_price_wrapper'>
                                        <div className='d-flex align-items-center price_of_cart_wrap'>
                                            <span>₹2,000 </span>
                                            <s>₹2,600</s>
                                        </div>
                                        <button className='plus_cart'>
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_422_3736)">
                                                    <path d="M4.92999 0.930054V9.07005" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                    <path d="M8.99999 5H0.859985" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_422_3736">
                                                        <rect width="8.14" height="8.14" fill={activeHeader ? "#2A3592" : "#fff"} transform="translate(0.859985 0.930054)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span>Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='saved_img_information'>
                                    <div className="save_item_img">
                                        <Link to="/product" onClick={handleCartClose}>
                                            <img src={saved_2} alt="saved img" />
                                        </Link>
                                    </div>
                                    <div className='cart_price_wrapper'>
                                        <div className='d-flex align-items-center price_of_cart_wrap'>
                                            <span>₹11,100  </span>
                                        </div>
                                        <button className='plus_cart'>
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_422_3736)">
                                                    <path d="M4.92999 0.930054V9.07005" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                    <path d="M8.99999 5H0.859985" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_422_3736">
                                                        <rect width="8.14" height="8.14" fill={activeHeader ? "#2A3592" : "#fff"} transform="translate(0.859985 0.930054)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span>Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='saved_img_information'>
                                    <div className="save_item_img">
                                        <Link to="/product" onClick={handleCartClose}>
                                            <img src={saved_3} alt="saved img" />
                                        </Link>
                                    </div>
                                    <div className='cart_price_wrapper'>
                                        <div className='d-flex align-items-center price_of_cart_wrap'>
                                            <span>₹3,200  </span>
                                        </div>
                                        <button className='plus_cart'>
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_422_3736)">
                                                    <path d="M4.92999 0.930054V9.07005" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                    <path d="M8.99999 5H0.859985" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_422_3736">
                                                        <rect width="8.14" height="8.14" fill={activeHeader ? "#2A3592" : "#fff"} transform="translate(0.859985 0.930054)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span>Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='saved_img_information'>
                                    <div className="save_item_img">
                                        <Link to="/product" onClick={handleCartClose}>
                                            <img src={saved_4} alt="saved img" />
                                        </Link>
                                    </div>
                                    <div className='cart_price_wrapper'>
                                        <div className='d-flex align-items-center price_of_cart_wrap'>
                                            <span>₹18,900  </span>
                                        </div>
                                        <button className='plus_cart'>
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_422_3736)">
                                                    <path d="M4.92999 0.930054V9.07005" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                    <path d="M8.99999 5H0.859985" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_422_3736">
                                                        <rect width="8.14" height="8.14" fill={activeHeader ? "#2A3592" : "#fff"} transform="translate(0.859985 0.930054)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span>Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='saved_img_information'>
                                    <div className="save_item_img">
                                        <Link to="/product" onClick={handleCartClose}>
                                            <img src={saved_5} alt="saved img" />
                                        </Link>
                                    </div>
                                    <div className='cart_price_wrapper'>
                                        <div className='d-flex align-items-center price_of_cart_wrap'>
                                            <span>₹12,400  </span>
                                        </div>
                                        <button className='plus_cart'>
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_422_3736)">
                                                    <path d="M4.92999 0.930054V9.07005" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                    <path d="M8.99999 5H0.859985" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_422_3736">
                                                        <rect width="8.14" height="8.14" fill={activeHeader ? "#2A3592" : "#fff"} transform="translate(0.859985 0.930054)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span>Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='saved_img_information'>
                                    <div className="save_item_img">
                                        <Link to="/product" onClick={handleCartClose}>
                                            <img src={saved_6} alt="saved img" />
                                        </Link>
                                    </div>
                                    <div className='cart_price_wrapper'>
                                        <div className='d-flex align-items-center price_of_cart_wrap'>
                                            <span>₹8,000  </span>
                                            <s>₹8,600</s>
                                        </div>
                                        <button className='plus_cart'>
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_422_3736)">
                                                    <path d="M4.92999 0.930054V9.07005" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                    <path d="M8.99999 5H0.859985" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_422_3736">
                                                        <rect width="8.14" height="8.14" fill={activeHeader ? "#2A3592" : "#fff"} transform="translate(0.859985 0.930054)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span>Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='saved_img_information'>
                                    <div className="save_item_img">
                                        <Link to="/product" onClick={handleCartClose}>
                                            <img src={saved_7} alt="saved img" />
                                        </Link>
                                    </div>
                                    <div className='cart_price_wrapper'>
                                        <div className='d-flex align-items-center price_of_cart_wrap'>
                                            <span>₹18,900 </span>
                                        </div>
                                        <button className='plus_cart'>
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_422_3736)">
                                                    <path d="M4.92999 0.930054V9.07005" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                    <path d="M8.99999 5H0.859985" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_422_3736">
                                                        <rect width="8.14" height="8.14" fill={activeHeader ? "#2A3592" : "#fff"} transform="translate(0.859985 0.930054)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span>Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='saved_img_information'>
                                    <div className="save_item_img">
                                        <Link to="/product" onClick={handleCartClose}>
                                            <img src={saved_8} alt="saved img" />
                                        </Link>
                                    </div>
                                    <div className='cart_price_wrapper'>
                                        <div className='d-flex align-items-center price_of_cart_wrap'>
                                            <span>₹2,000 </span>
                                            <s>₹2,600</s>
                                        </div>
                                        <button className='plus_cart'>
                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_422_3736)">
                                                    <path d="M4.92999 0.930054V9.07005" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                    <path d="M8.99999 5H0.859985" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_422_3736">
                                                        <rect width="8.14" height="8.14" fill={activeHeader ? "#2A3592" : "#fff"} transform="translate(0.859985 0.930054)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span>Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Cart