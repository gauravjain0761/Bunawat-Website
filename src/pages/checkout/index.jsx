import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./checkout.css";
import FooterStrip from "../../components/footer/footerStrip";
import ApplyCouponModal from "../../components/checkout/ApplyCouponModal";
import { Checkbox, FormControlLabel, Radio } from "@mui/material";
import CodConfirmationModal from "../../components/checkout/CodConfirmationModal";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import MakePayment from "../../components/checkout/MakePayment";
import { toast } from 'react-toastify';
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { useAddOrderMutation, useGetAllCartQuery, useMakePaymentMutation, useOnlinePaymentMutation, useVerifyOnlinePaymentMutation } from "../../services/api";
import Storage from "../../services/storage";
import { DEFULT_STATE } from "../../constant/storage";
import { getNumberWithComma } from "../../utils/utils";
import NewFooter from "../../components/newFooter/footerStrip";
import { ApiGet } from "../../services/API/api";
import ReactGA from 'react-ga';

const Checkout = () => {
  const [addOrder] = useAddOrderMutation(undefined, {})
  const [makePayment] = useMakePaymentMutation(undefined, {})
  const [onlinePayment] = useOnlinePaymentMutation(undefined, {})
  const [verifyOnlinePayment] = useVerifyOnlinePaymentMutation(undefined, {})
  const { data, error, isLoading } = useGetAllCartQuery(undefined, { skip: !Storage.isUserAuthenticated() })
  const [cartData, setCartData] = useState([]);
  const [paymentMode, setPaymentMode] = useState('online');
  const [couponData, setCouponData] = useState({});
  const [showCoupon, setShowCoupon] = useState(false);
  const history = useHistory()
  const [showCodModal, setShowCodModal] = useState(false);
  const [formData, setFormData] = useState([]);
  const [formError, setFormError] = useState([]);
  const userData = useSelector(state => state?.user?.userData)
  const [coupon, setCoupon] = useState("");
  const [useStoreCredit, setUseStoreCredit] = useState(false);
  const [walletData, setWalletData] = useState({});
  const [userBalance, setUserBalance] = useState(0);

  const getWalletData = async () => {
    await ApiGet("/get_wallet_balance").then((res) => {
      setWalletData(res?.data);
      setUserBalance(res?.data?.balance ?? 0);
    });
  };

  useEffect(() => {
    getWalletData();
  }, [])


  const handleCloseCodModal = () => setShowCodModal(false);
  const handleShowCodModal = () => setShowCodModal(true);

  const handleClose = () => setShowCoupon(false);
  const handleShow = () => setShowCoupon(true);




  useEffect(() => {
    if (data) {
      setCartData(data?.data?.map(list => {
        const amount = list?.amount
        return {
          ...list,
          price: amount,
          amount: Number(amount) * Number(list?.qty)
        }
      }) ?? [])
      setCouponData({})
    }
  }, [data])
  useEffect(() => {
    if (Object.keys(userData ?? {})?.length > 0) {
      setFormData({
        address_1: userData?.address_1 ?? "",
        address_2: userData?.address_2 ?? "",
        city: userData?.city ?? "",
        state: userData?.state ?? "",
        email: userData?.email ?? "",
        phone: userData?.phone ?? "",
        pincode: userData?.pincode ?? "",
        fname: userData?.fname ?? "",
        lname: userData?.lname ?? "",
      })
    }
  }, [userData])

  const coutinLogicWithCoupon = (arr) => {
    const couponData = (Number((arr?.data && arr?.data?.length > 0) ? (arr?.data?.reduce((t, x) => t + Number(x?.discounted_amount ?? 0), 0) ?? 0) : 0))
    const totalAmount = (arr?.data?.reduce((t, x) => t + Number(x?.final_amount), 0)) ?? 0
    const gstAmount = arr?.data?.reduce((t, x) => t + ((Number(x?.price) > 1000) ?
      (Number(x?.final_amount) - ((Number(x?.final_amount) * 100) / 112))
      :
      (Number(x?.final_amount) - ((Number(x?.final_amount) * 100) / 105))), 0)
    if (paymentMode == "cod") {
      const codData = ((arr?.data?.reduce((t, x) => t + Number(x?.final_amount), 0) * 2) / 100) ?? 0
      let finalTotal = (totalAmount + ((codData >= 150) ? codData : 150))
      const finalCOD = ((codData >= 150) ? codData : 150)
      const checkCodPR = arr?.data?.some((x) => (Number(x?.price) > 1000))
      const codGST = (finalCOD - ((finalCOD * 100) / (checkCodPR ? 112 : 105)))
      const finalGST = (gstAmount + codGST);

      let total = finalTotal;

      if (useStoreCredit) {
        if (walletData?.balance >= total) {
          total = 0;
          setUserBalance(walletData?.balance - total);
        } else {
          total = total - walletData?.balance
          setUserBalance(0);
        }
      }

      return {
        total: finalTotal?.toFixed(2),
        totalAmount: total?.toFixed(2),
        codData: finalCOD,
        couponData,
        gst_amount: finalGST?.toFixed(2)
      }
    } else {
      let finalAmmount = totalAmount;
      if (useStoreCredit) {
        if (walletData?.balance >= totalAmount) {
          finalAmmount = 0;
          setUserBalance(walletData?.balance - totalAmount);
        } else {
          finalAmmount = totalAmount - walletData?.balance
          setUserBalance(0);
        }
      }
      return {
        total: totalAmount?.toFixed(2),
        totalAmount: finalAmmount?.toFixed(2),
        codData: 0,
        couponData,
        gst_amount: gstAmount?.toFixed(2)
      }
    }
  }

  const coutinLogicWithoutCoupon = (arr) => {
    const totalAmount = (arr?.reduce((t, x) => t + Number(x?.amount), 0)) ?? 0
    const gstAmount = arr?.reduce((t, x) => t + ((Number(x?.price) > 1000) ?
      (Number(x?.amount) - ((Number(x?.amount) * 100) / 112))
      :
      (Number(x?.amount) - ((Number(x?.amount) * 100) / 105))), 0)
    if (paymentMode == "cod") {
      const codData = ((arr?.reduce((t, x) => t + Number(x?.amount), 0) * 2) / 100) ?? 0
      let finalTotal = (totalAmount + ((codData >= 150) ? codData : 150))
      const finalCOD = ((codData >= 150) ? codData : 150)
      const checkCodPR = arr?.some((x) => (Number(x?.price) > 1000))
      const codGST = (finalCOD - ((finalCOD * 100) / (checkCodPR ? 112 : 105)))
      const finalGST = (gstAmount + codGST)
      let total = finalTotal;
      if (useStoreCredit) {
        if (walletData?.balance >= total) {
          total = 0;
          setUserBalance(walletData?.balance - total);
        } else {
          total = total - walletData?.balance
          setUserBalance(0);
        }
      }
      return {
        total: finalTotal?.toFixed(2),
        totalAmount: total?.toFixed(2),
        codData: finalCOD?.toFixed(2),
        gst_amount: finalGST?.toFixed(2)
      }
    } else {
      let finalAmount = totalAmount;
      if (useStoreCredit) {
        if (walletData?.balance >= totalAmount) {
          finalAmount = 0;
          setUserBalance(walletData?.balance - totalAmount);
        } else {
          finalAmount = totalAmount - walletData?.balance
          setUserBalance(0);
        }
      }
      return {
        total: totalAmount?.toFixed(2),
        totalAmount: finalAmount?.toFixed(2),
        codData: 0,
        gst_amount: gstAmount?.toFixed(2)
      }
    }
  }

  const handleMakeOrder = async () => {
    let tempError = { ...formError }
    if (formData?.fname == "") {
      tempError = { ...tempError, fname: true }
    }
    if (formData?.lname == "") {
      tempError = { ...tempError, lname: true }
    }
    if (formData?.email == "") {
      tempError = { ...tempError, email: true }
    }
    if (formData?.phone == "") {
      tempError = { ...tempError, phone: true }
    }
    if (formData?.address_1 == "") {
      tempError = { ...tempError, address_1: true }
    }
    if (formData?.address_2 == "") {
      tempError = { ...tempError, address_2: true }
    }
    if (formData?.pincode == "") {
      tempError = { ...tempError, pincode: true }
    }
    if (formData?.city == "") {
      tempError = { ...tempError, city: true }
    }
    if (formData?.state == "") {
      tempError = { ...tempError, state: true }
    }
    if (tempError?.fname || tempError?.lname || tempError?.email || tempError?.phone || tempError?.address_1 || tempError?.address_2 || tempError?.pincode || tempError?.city || tempError?.state) {
      setFormError(tempError)
    } else {

      // add GA event Purchase
      // ReactGA.event({
      //   category: 'Purchase',
      //   action: 'Purchase',
      //   label: window.location.pathname,
      //   value: (cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ? (coutinLogicWithCoupon(couponData)?.totalAmount ?? 0) : (coutinLogicWithoutCoupon(cartData)?.totalAmount ?? 0)
      // });

      //add facebook event Purchase
      // window.fbq('track', 'Purchase', { currency: "INR", value: (cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ? (coutinLogicWithCoupon(couponData)?.totalAmount ?? 0) : (coutinLogicWithoutCoupon(cartData)?.totalAmount ?? 0), content_ids: cartData?.map(list => list?.sku?._id), content_type: "product", ecomm_pagetype: "checkout" });

      // add Google Ads Conversion Tracking
      // window.gtag('event', 'conversion', { 'send_to': 'AW-568502457/lca8CPWjzekBELnRio8C', 'value': (cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ? (coutinLogicWithCoupon(couponData)?.totalAmount ?? 0) : (coutinLogicWithoutCoupon(cartData)?.totalAmount ?? 0), 'currency': 'INR', 'transaction_id': '' });

      // implement GTM trigger
      window.dataLayer.push({
        'event': 'gtm4wp.orderCompletedEEC',
        'transactionId': '',
        value: (cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ? (coutinLogicWithCoupon(couponData)?.totalAmount ?? 0) : (coutinLogicWithoutCoupon(cartData)?.totalAmount ?? 0),
        currency: 'INR',
        tax: (cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ? (coutinLogicWithCoupon(couponData)?.gst_amount ?? 0) : (coutinLogicWithoutCoupon(cartData)?.gst_amount ?? 0),
        shipping: 0,
        ecommerce: {
          'currencyCode': 'INR',
          'purchase': {
              actionField: {
                  id: '',
                  revenue: (cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ? (coutinLogicWithCoupon(couponData)?.totalAmount ?? 0) : (coutinLogicWithoutCoupon(cartData)?.totalAmount ?? 0),
              }
          },
      }
      });


      if (cartData?.length > 0 && paymentMode == "cod") {
        await addOrder({
          user_type: userData?.user_type,
          user: userData?._id,
          billing_address: formData ?? {},
          isSame: true,
          shipping_address: formData ?? {},
          payment_mode: paymentMode?.toUpperCase() ?? "ONLINE",
          total_items: cartData?.length,
          total_qty: cartData?.reduce((total, list) => {
            return total + Number(list?.qty)
          }, 0),
          items: (couponData?.data && couponData?.data?.length > 0) ? couponData?.data?.map(list => ({
            ...list,
            sku_id: list?.sku?._id
          })) ?? [] : cartData?.map(list => ({
            ...list,
            sku_id: list?.sku?._id
          })) ?? [],
          gst_available: false,
          total_amount: (cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ?
            (coutinLogicWithCoupon(couponData)?.total ?? 0)
            :
            (coutinLogicWithoutCoupon(cartData)?.total ?? 0),
          amount: (cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ?
            (coutinLogicWithCoupon(couponData)?.totalAmount ?? 0)
            :
            (coutinLogicWithoutCoupon(cartData)?.totalAmount ?? 0),
          ...((useStoreCredit) && { usable_wallet_amount: walletData?.balance - userBalance }),
          discount_amount: (couponData?.data && couponData?.data?.length > 0) ? couponData?.data?.reduce((t, x) => t + Number(x?.discounted_amount ?? 0), 0) ?? 0 : 0,

          discount_coupon: couponData?.coupon_id,

          gst_amount: (cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ?
            (coutinLogicWithCoupon(couponData)?.gst_amount ?? 0)
            :
            (coutinLogicWithoutCoupon(cartData)?.gst_amount ?? 0),


          cgst_amount: userData?.state == DEFULT_STATE ? (((cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ?
            (coutinLogicWithCoupon(couponData)?.gst_amount ?? 0)
            :
            (coutinLogicWithoutCoupon(cartData)?.gst_amount ?? 0)) / 2) : 0,


          sgst_amount: userData?.state == DEFULT_STATE ? (((cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ?
            (coutinLogicWithCoupon(couponData)?.gst_amount ?? 0)
            :
            (coutinLogicWithoutCoupon(cartData)?.gst_amount ?? 0)) / 2) : 0,

          igst_amount: userData?.state == DEFULT_STATE ? 0 : (cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ?
            (coutinLogicWithCoupon(couponData)?.gst_amount ?? 0)
            :
            (coutinLogicWithoutCoupon(cartData)?.gst_amount ?? 0),

        }).unwrap().then(async (responce) => {

          const { message, ...rest } = responce?.data;

          // show toast
          if (message?.length > 0) {
            for (let i = 0; i < message?.length; i++) {
              toast.success(message[i])
            }
          }

          history.push("/orderConfirmation/" + responce?.data?._id)

          // if (responce?.data?.payment_mode == "ONLINE") {
          //   await makePayment({
          //     order_id: responce?.data?._id
          //   }).unwrap().then((data) => {
          //     if (data?.data?.order_info) {
          //       var rzp1 = new window.Razorpay({
          //         ...data?.data?.order_info, key: process.env.REACT_APP_RAZORPAY_KEY, handler: function (response) {
          //           console.log("==============Success==========")
          //           // callback url call
          //           window?.location?.replace(window.location.origin + `/orderConfirmation/${responce?.data?._id}`)
          //         }
          //       });
          //       rzp1.open();
          //       rzp1.on('payment.failed', function (response) {
          //         console.log("==============Fail==========")
          //         // window?.location?.replace(window.location.origin + "/orderConfirmation")
          //       })
          //     }
          //   }).catch((error) => toast.error(error?.data?.message))
          // } else {
          //   history.push("/orderConfirmation/" + responce?.data?._id)
          // }
          // history.push("/userProfile")
        }).catch((error) => toast.error(error?.data?.message))

      } else if (cartData?.length > 0 && paymentMode == "online") {

        const orderPayload = {
          user_type: userData?.user_type,
          user: userData?._id,
          billing_address: formData ?? {},
          isSame: true,
          shipping_address: formData ?? {},
          payment_mode: paymentMode?.toUpperCase() ?? "ONLINE",
          total_items: cartData?.length,
          total_qty: cartData?.reduce((total, list) => {
            return total + Number(list?.qty)
          }, 0),
          items: (couponData?.data && couponData?.data?.length > 0) ? couponData?.data?.map(list => ({
            ...list,
            sku_id: list?.sku?._id
          })) ?? [] : cartData?.map(list => ({
            ...list,
            sku_id: list?.sku?._id
          })) ?? [],
          gst_available: false,
          total_amount: (cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ?
            (coutinLogicWithCoupon(couponData)?.total ?? 0)
            :
            (coutinLogicWithoutCoupon(cartData)?.total ?? 0),
          amount: (cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ?
            (coutinLogicWithCoupon(couponData)?.totalAmount ?? 0)
            :
            (coutinLogicWithoutCoupon(cartData)?.totalAmount ?? 0),
          ...((useStoreCredit) && { usable_wallet_amount: walletData?.balance - userBalance }),

          discount_amount: (couponData?.data && couponData?.data?.length > 0) ? couponData?.data?.reduce((t, x) => t + Number(x?.discounted_amount ?? 0), 0) ?? 0 : 0,

          discount_coupon: couponData?.coupon_id,

          gst_amount: (cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ?
            (coutinLogicWithCoupon(couponData)?.gst_amount ?? 0)
            :
            (coutinLogicWithoutCoupon(cartData)?.gst_amount ?? 0),


          cgst_amount: userData?.state == DEFULT_STATE ? (((cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ?
            (coutinLogicWithCoupon(couponData)?.gst_amount ?? 0)
            :
            (coutinLogicWithoutCoupon(cartData)?.gst_amount ?? 0)) / 2) : 0,


          sgst_amount: userData?.state == DEFULT_STATE ? (((cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ?
            (coutinLogicWithCoupon(couponData)?.gst_amount ?? 0)
            :
            (coutinLogicWithoutCoupon(cartData)?.gst_amount ?? 0)) / 2) : 0,

          igst_amount: userData?.state == DEFULT_STATE ? 0 : (cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ?
            (coutinLogicWithCoupon(couponData)?.gst_amount ?? 0)
            :
            (coutinLogicWithoutCoupon(cartData)?.gst_amount ?? 0),

        }

        // if orderPayload?.amount == 0 then directly call make order api
        if (orderPayload?.amount == 0) {
          await addOrder(orderPayload).unwrap().then(async (responce) => {
            const { message, ...rest } = responce?.data;
            // show toast
            if (message?.length > 0) {
              for (let i = 0; i < message?.length; i++) {
                toast.success(message[i])
              }
            }

            history.push("/orderConfirmation/" + responce?.data?._id)

          }).catch((error) => toast.error(error?.data?.message))

        } else {
          await onlinePayment({ amount: orderPayload?.amount, orderPayload }).unwrap().then(async (responce) => {

            if (responce?.data) {
              const { message, ...rest } = responce?.data;

              // show toast
              if (message?.length > 0) {
                for (let i = 0; i < message?.length; i++) {
                  toast.success(message[i])
                }
              }

              const rzp1 = new window.Razorpay({
                ...rest, handler: function (response) {
                  if (response?.razorpay_payment_id) {
                    verifyOnlinePayment({
                      ...response,
                      orderPayload
                    }).unwrap().then((data) => {
                      if (data?.data?.data?._id) {
                        toast.success("Payment Successfull")
                        history.push("/orderConfirmation/" + data?.data?.data?._id)

                        // Track transaction with Google Analytics
                        // ReactGA.plugin.require('ecommerce');
                        // ReactGA.plugin.execute('ecommerce', 'addTransaction', {
                        //   //generates transaction
                        //   id: data?.data?.data?._id, // Transaction ID. Required.
                        //   affiliation: 'Bunawat',   // Affiliation or store name
                        //   revenue: (cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ? (coutinLogicWithCoupon(couponData)?.totalAmount ?? 0) : (coutinLogicWithoutCoupon(cartData)?.totalAmount ?? 0),               // Grand Total
                        //   shipping: 0,            // Shipping
                        //   tax: (cartData?.length > 0 && (couponData?.data && couponData?.data?.length > 0)) ? (coutinLogicWithCoupon(couponData)?.gst_amount ?? 0) : (coutinLogicWithoutCoupon(cartData)?.gst_amount ?? 0)                  // Tax
                        // });

                        // // Track transaction with Google Analytics
                        // ReactGA.plugin.execute('ecommerce', 'send');

                      } else {
                        toast.error("Something went wrong")
                      }

                    }).catch((error) => toast.error(error?.data?.message))
                  }
                }
              });
              rzp1.open();
              rzp1.on('payment.failed', function (response) {
                console.log("==============Fail==========")
                toast.error("Payment Failed")
              })
            }

          }).catch((error) => toast.error(error?.data?.message))
        }

      }
    }
  }


  return (
    <>
      <div id="checkout">
        <Container className="desktop_view">
          <div className="checkout_great">
            <h3>Great Picks 👌</h3>
            <span>Let’s get these to you as soon as we can</span>
          </div>
          <Row>
            <Col xs={12} md={5}>

              <MakePayment handleMakeOrder={handleMakeOrder} cartData={cartData ?? []} couponData={couponData} setCouponData={setCouponData} coupon={coupon} setCoupon={setCoupon} paymentMode={paymentMode} coutinLogicWithCoupon={coutinLogicWithCoupon} coutinLogicWithoutCoupon={coutinLogicWithoutCoupon}
                useStoreCredit={useStoreCredit} userBalance={userBalance} walletData={walletData}
              />

              <div className="checkout_box" style={{ marginTop: "2rem" }} onClick={handleShow}>
                <div
                  className="checkout_box_heading"
                  style={{ paddingBottom: "2rem", cursor: "pointer" }}
                >
                  <img src="../img/haveacoupon.png" alt="haveacoupon" width="22" style={{ marginRight: "8px" }} />
                  Have a coupon?
                </div>
              </div>

              <div className="checkout_box" style={{ marginTop: "2rem" }}>
                <div
                  className="checkout_box_heading"
                  style={{
                    paddingBottom: "2rem",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: 'center' }}>
                    <Box sx={{ marginRight: "10px" }}>

                      {
                        useStoreCredit ?
                          (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            onClick={() => {
                              setUseStoreCredit(!useStoreCredit)
                              setUserBalance(walletData?.balance)
                            }}
                          >
                            <rect width="24" height="24" rx="12" fill="#2A3592"
                              border="1px solid #2A3592"
                            />
                            <path d="M16.0502 9.26001L10.5702 14.74L7.9502 12.12" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                          </svg>) :
                          (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            onClick={() => {
                              if (walletData?.balance > 0) {
                                setUseStoreCredit(!useStoreCredit)
                              }
                            }}
                          >
                            <rect x="0.85" y="0.85" width="24" height="24" rx="12" fill="white" />
                            <path d="M16.0502 9.26001L10.5702 14.74L7.9502 12.12" stroke="white" stroke-width="1.7" stroke-miterlimit="10" />
                            <rect x="0.85" y="0.85" width="22.3" height="22.3" rx="11.15" stroke="#2A3592" stroke-width="1.7" />
                          </svg>)
                      }
                    </Box>

                    Use Store credit
                  </Box>
                  <span style={{ fontWeight: "600", fontSize: "14px" }}>
                    {getNumberWithComma(userBalance)}
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={12} md={7}>

              <CheckoutForm formData={formData ?? {}} setFormData={setFormData} formError={formError} setFormError={setFormError} />

              <div className="checkout_box" style={{ marginBottom: "1rem", padding: "0 1rem 1rem 1rem" }}>
                <div className="checkout_box_heading">
                  <img src="../img/shipping-options.png" alt="shipping-options" width="22" style={{ marginRight: "8px" }} />
                  Shipping Options
                </div>
                <div className="checkout_box_list" onClick={() => setPaymentMode("online")} style={paymentMode == "online" ? { background: "#EDF0FF", borderRadius: "4px", paddingTop: "1rem", cursor: "pointer" } : { cursor: "pointer" }}>
                  <div>
                    <h3 style={paymentMode == "online" ? { color: "#2A3592" } : {}}>Online</h3>
                    <span style={paymentMode == "online" ? { color: "#2A3592" } : {}}>Delivers in 3-5 days</span>
                  </div>
                  <div>
                    <h3 style={paymentMode == "online" ? { color: "#2A3592" } : {}}>Free </h3>
                  </div>
                </div>

                <div className="checkout_box_list" onClick={() => setPaymentMode("cod")} style={paymentMode == "cod" ? { background: "#EDF0FF", borderRadius: "4px", paddingTop: "1rem", cursor: "pointer" } : { cursor: "pointer" }}>
                  <div>
                    <h3 style={paymentMode == "cod" ? { color: "#2A3592" } : {}}>Cash on Delivery</h3>
                    <span style={paymentMode == "cod" ? { color: "#2A3592" } : {}}>Delivers in 3-5 days</span>
                  </div>
                  <div>
                    <h3 style={paymentMode == "cod" ? { color: "#2A3592" } : {}}>{(couponData?.data && couponData?.data?.length > 0) ?
                      getNumberWithComma(((((couponData?.data?.reduce((t, x) => t + Number(x?.final_amount), 0) * 2) / 100) >= 150) ? ((couponData?.data?.reduce((t, x) => t + Number(x?.final_amount), 0) * 2) / 100) : 150))
                      :
                      getNumberWithComma(((((cartData?.reduce((t, x) => t + Number(x?.amount), 0) * 2) / 100) >= 150) ? ((cartData?.reduce((t, x) => t + Number(x?.amount), 0) * 2) / 100) : 150))} </h3>
                  </div>
                </div>

                {/* <div className="checkout_box_list" style={{ cursor: "pointer" }}>
                  <div>
                    <h3>Expedited Shipping</h3>
                    <span>Delivers Monday</span>
                  </div>
                  <div>
                    <h3>₹250 </h3>
                  </div>
                </div> */}
              </div>

            </Col>
          </Row>
        </Container>


        {/* Mobile view code start */}
        <Container className="mobile_view">
          <div className="checkout_great">
            <h3>Great Picks 👌</h3>
            <span>Let’s get these to you as soon as we can</span>
          </div>
          <Row>
            <Col xs={12} md={7}>

              <CheckoutForm formData={formData ?? {}} setFormData={setFormData} formError={formError} setFormError={setFormError} />

              <div className="checkout_box" style={{ marginTop: "1rem", padding: "0 1rem 1rem 1rem" }}>
                <div className="checkout_box_heading" style={{ padding: '2rem 2rem 1rem 1rem' }}>
                  <img src="../img/shipping-options.png" alt="shipping-options" width="22" style={{ marginRight: "8px" }} />
                  Shipping Options
                </div>
                <div className="checkout_box_list" onClick={() => setPaymentMode("online")} style={paymentMode == "online" ? { background: "#EDF0FF", borderRadius: "4px", paddingTop: "1rem", cursor: "pointer" } : { cursor: "pointer" }}>
                  <div>
                    <h3 style={paymentMode == "online" ? { color: "#2A3592" } : {}}>Regular Shipping</h3>
                    <span style={paymentMode == "online" ? { color: "#2A3592" } : {}}>Delivers in 3-5 days</span>
                  </div>
                  <div>
                    <h3 style={paymentMode == "online" ? { color: "#2A3592" } : {}}>Free </h3>
                  </div>
                </div>
                <div className="checkout_box_list" onClick={() => setPaymentMode("cod")} style={paymentMode == "cod" ? { background: "#EDF0FF", borderRadius: "4px", paddingTop: "1rem", cursor: "pointer" } : { cursor: "pointer" }}>
                  <div>
                    <h3 style={paymentMode == "cod" ? { color: "#2A3592" } : {}}>Cash on Delivery</h3>
                    {/* <span style={paymentMode == "cod" ? { color: "#2A3592" } : {}}>Delivers 17—20th June</span> */}
                  </div>
                  <div>
                    <h3 style={{ color: "#2A3592" }}><i>+ {(couponData?.data && couponData?.data?.length > 0) ?
                      getNumberWithComma(((((couponData?.data?.reduce((t, x) => t + Number(x?.final_amount), 0) * 2) / 100) >= 150) ? ((couponData?.data?.reduce((t, x) => t + Number(x?.final_amount), 0) * 2) / 100) : 150))
                      :
                      getNumberWithComma(((((cartData?.reduce((t, x) => t + Number(x?.amount), 0) * 2) / 100) >= 150) ? ((cartData?.reduce((t, x) => t + Number(x?.amount), 0) * 2) / 100) : 150))}</i> </h3>
                  </div>
                </div>
              </div>

            </Col>
            <Col xs={12} md={5}>
              <div className="checkout_box" style={{ marginTop: "2rem" }} onClick={handleShow}>
                <div
                  className="checkout_box_heading"
                  style={{ paddingBottom: "2rem", cursor: "pointer" }}
                >
                  <img src="../img/haveacoupon.png" alt="haveacoupon" width="22" style={{ marginRight: "8px" }} />
                  Have a coupon?
                </div>
              </div>

              <div className="checkout_box" style={{ marginTop: "2rem" }}>
                <div
                  className="checkout_box_heading"
                  style={{
                    paddingBottom: "2rem",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: 'center' }}>
                    <Box sx={{ marginRight: "10px" }}>
                      {
                        useStoreCredit ?
                          (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            onClick={() => {
                              setUseStoreCredit(!useStoreCredit)
                              setUserBalance(walletData?.balance)
                            }}
                          >
                            <rect width="24" height="24" rx="12" fill="#2A3592"
                              border="1px solid #2A3592"
                            />
                            <path d="M16.0502 9.26001L10.5702 14.74L7.9502 12.12" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                          </svg>) :
                          (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            onClick={() => {
                              if (walletData?.balance > 0) {
                                setUseStoreCredit(!useStoreCredit)
                              }
                            }}
                          >
                            <rect x="0.85" y="0.85" width="24" height="24" rx="12" fill="white" />
                            <path d="M16.0502 9.26001L10.5702 14.74L7.9502 12.12" stroke="white" stroke-width="1.7" stroke-miterlimit="10" />
                            <rect x="0.85" y="0.85" width="22.3" height="22.3" rx="11.15" stroke="#2A3592" stroke-width="1.7" />
                          </svg>)
                      }
                    </Box>
                    Use Store credit
                  </Box>
                  <span style={{ fontWeight: "600", fontSize: "14px" }}>
                    {getNumberWithComma(userBalance)}
                  </span>
                </div>
              </div>

              <Box sx={{ marginTop: "1rem" }}>
                <MakePayment handleMakeOrder={handleMakeOrder} cartData={cartData ?? []} couponData={couponData} setCouponData={setCouponData} coupon={coupon} setCoupon={setCoupon} paymentMode={paymentMode} coutinLogicWithCoupon={coutinLogicWithCoupon} coutinLogicWithoutCoupon={coutinLogicWithoutCoupon}
                  useStoreCredit={useStoreCredit} userBalance={userBalance} walletData={walletData}
                />
              </Box>

            </Col>
          </Row>
        </Container>
      </div>
      <ApplyCouponModal showCoupon={showCoupon} handleClose={handleClose} cartData={cartData} couponData={couponData} setCouponData={setCouponData} coupon={coupon} setCoupon={setCoupon} setShowCoupon={setShowCoupon} />
      <CodConfirmationModal showCodModal={showCodModal} handleCloseCodModal={handleCloseCodModal} />

      <Box sx={{
        padding: "0rem 2rem",
        '@media (max-width: 768px)': {
          padding: "1rem 2rem"
        }
      }}>
        <NewFooter />
      </Box>
    </>
  );
};

export default Checkout;
