import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./checkout.css";
import FooterStrip from "../../components/footer/footerStrip";
import ApplyCouponModal from "../../components/checkout/ApplyCouponModal";
import { FormControlLabel, Radio } from "@mui/material";
import CodConfirmationModal from "../../components/checkout/CodConfirmationModal";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import MakePayment from "../../components/checkout/MakePayment";
import { toast } from 'react-toastify';
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { useAddOrderMutation, useGetAllCartQuery } from "../../services/api";
import Storage from "../../services/storage";

const Checkout = () => {
  const [addOrder] = useAddOrderMutation(undefined, {})
  const { data: cartData, error, isLoading } = useGetAllCartQuery(undefined, { skip: !Storage.isUserAuthenticated() })
  const [showCoupon, setShowCoupon] = useState(false);
  const history = useHistory()
  const [showCodModal, setShowCodModal] = useState(false);
  const [formData, setFormData] = useState([]);
  const [formError, setFormError] = useState([]);
  const userData = useSelector(state => state?.user?.userData)

  const handleCloseCodModal = () => setShowCodModal(false);
  const handleShowCodModal = () => setShowCodModal(true);

  const handleClose = () => setShowCoupon(false);
  const handleShow = () => setShowCoupon(true);

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
        name: userData?.fname ?? "" + userData?.lname ?? "",
      })
    }
  }, [userData])

  const handleMakeOrder = async () => {
    let tempError = { ...formError }
    if (formData?.name == "") {
      tempError = { ...tempError, name: true }
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
    if (tempError?.name || tempError?.email || tempError?.phone || tempError?.address_1 || tempError?.address_2 || tempError?.pincode || tempError?.city || tempError?.state) {
      setFormError(tempError)
    } else {
      await addOrder({
        member: "63d0f81846f463e3757f19b6",
        user_type: userData?.user_type,
        user: userData?._id,
        billing_address: formData ?? {},
        isSame: true,
        shipping_address: {},
        payment_mode: "COD",
        total_items: cartData?.data?.length,
        total_qty: cartData?.data?.reduce((total, list) => {
          return total + Number(list?.qty)
        }, 0),
        total_amount: cartData?.data?.reduce((total, list) => {
          return total + (Number(list?.qty) * Number(list?.amount))
        }, 0),
        items: cartData?.data?.map(list => ({
          product: list?.product,
          sku_id: list?.sku?._id,
          sku: list?.sku?.sku,
          price: list?.amount,
          qty: list?.qty,
          amount: list?.amount
        })) ?? [],
        gst_amount: 0,
        discount_amount: 0,
        discount_coupon: null
      }).unwrap().then((data) => {
        history.push("/userProfile")
      }).catch((error) => toast.error(error?.data?.message))
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

              <MakePayment handleMakeOrder={handleMakeOrder} cartData={cartData ?? []} />

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
                  <Box sx={{display: "flex", alignItems: 'center'}}>
                    <Box sx={{marginRight: "10px"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="12" fill="#2A3592"/>
                    <path d="M16.0502 9.26001L10.5702 14.74L7.9502 12.12" stroke="white" stroke-width="1.7" stroke-miterlimit="10"/>
                    </svg>
                    </Box>
                    Use Store credit
                  </Box>
                  <span style={{ fontWeight: "600", fontSize: "14px" }}>
                    ₹500{" "}
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={12} md={7}>

              <CheckoutForm formData={formData ?? {}} setFormData={setFormData} formError={formError} setFormError={setFormError} />

              <div className="checkout_box" style={{ marginTop: "1rem", padding: "0 1rem 1rem 1rem" }}>
                <div className="checkout_box_heading">
                  <img src="../img/shipping-options.png" alt="shipping-options" width="22" style={{ marginRight: "8px" }} />
                  Shipping Options
                </div>
                <div className="checkout_box_list" style={{ background: "#EDF0FF", borderRadius: "4px", paddingTop: "1rem", cursor: "pointer" }}>
                  <div>
                    <h3 style={{ color: "#2A3592" }}>Regular Shipping</h3>
                    <span style={{ color: "#2A3592" }}>Delivers 17—20th June</span>
                  </div>
                  <div>
                    <h3 style={{ color: "#2A3592" }}>Free </h3>
                  </div>
                </div>

                <div className="checkout_box_list" onClick={handleShowCodModal} style={{ cursor: "pointer" }}>
                  <div>
                    <h3>Cash on Delivery</h3>
                    <span>Delivers 17—20th June</span>
                  </div>
                  <div>
                    <h3>₹100 </h3>
                  </div>
                </div>

                <div className="checkout_box_list" style={{ cursor: "pointer" }}>
                  <div>
                    <h3>Expedited Shipping</h3>
                    <span>Delivers Monday</span>
                  </div>
                  <div>
                    <h3>₹250 </h3>
                  </div>
                </div>
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

              <CheckoutForm />

              <div className="checkout_box" style={{ marginTop: "1rem", padding: "0 1rem 1rem 1rem" }}>
                <div className="checkout_box_heading">
                  <img src="../img/shipping-options.png" alt="shipping-options" width="22" style={{ marginRight: "8px" }} />
                  Shipping Options
                </div>
                <div className="checkout_box_list" style={{ background: "#EDF0FF", borderRadius: "4px", paddingTop: "1rem", cursor: "pointer" }}>
                  <div>
                    <h3 style={{ color: "#2A3592" }}>Regular Shipping</h3>
                    <span style={{ color: "#2A3592" }}>Delivers 17—20th June</span>
                  </div>
                  <div>
                    <h3 style={{ color: "#2A3592" }}>Free </h3>
                  </div>
                </div>
                <div className="checkout_box_list" onClick={handleShowCodModal} style={{ cursor: "pointer" }}>
                  <div>
                    <h3>Cash on Delivery</h3>
                    <span>Delivers 17—20th June</span>
                  </div>
                  <div>
                    <h3>₹100 </h3>
                  </div>
                </div>
                <div className="checkout_box_list" style={{ cursor: "pointer" }}>
                  <div>
                    <h3>Expedited Shipping</h3>
                    <span>Delivers Monday</span>
                  </div>
                  <div>
                    <h3>₹250 </h3>
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
                  <div>
                    <FormControlLabel value="male" control={<Radio />} style={{ margin: "0", padding: "0", height: "10px" }} />
                    Use Store credit
                  </div>
                  <span style={{ fontWeight: "600", fontSize: "14px" }}>
                    ₹500{" "}
                  </span>
                </div>
              </div>

              <Box sx={{ marginTop: "1rem" }}>
                <MakePayment />
              </Box>

            </Col>
          </Row>
        </Container>
      </div>
      <ApplyCouponModal showCoupon={showCoupon} handleClose={handleClose} />
      <CodConfirmationModal showCodModal={showCodModal} handleCloseCodModal={handleCloseCodModal} />
      
      <Box sx={{ 
        padding: "0rem 2rem",
        '@media (max-width: 768px)': {
        padding: "1rem 2rem"
        } 
      }}>
        <FooterStrip />
      </Box>
    </>
  );
};

export default Checkout;
