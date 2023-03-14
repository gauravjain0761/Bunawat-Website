import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import "./orderConfirmation.css";
import FooterStrip from "../../components/footer/footerStrip";
import ShippingStatus from '../../components/OrderConfirmation/shippingStatus';
import { Box } from '@mui/material';
import { useGetOrderByIdQuery, useGetTrackOrderMutation } from '../../services/api';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';
import { getNumberWithComma } from '../../utils/utils';
import { GoPrimitiveDot } from 'react-icons/go';

const OrderConfirmation = () => {
  const { id } = useParams();
  const [getTrackOrder] = useGetTrackOrderMutation()
  const { data: orderData, error, isLoading } = useGetOrderByIdQuery(id, { skip: !id, refetchOnMountOrArgChange: true })

  useEffect(async () => {
    if (id) {
      await getTrackOrder({ id }).unwrap().then((responce) => {
        // setSingleData(responce?.data ?? {})
      }).catch((error) => toast.error(error?.data?.message))
    }
  }, [id])


  return (
    <div id='ordercConfirmation'>
      <Container>
        {(orderData?.data?.order_status == "Pending" || orderData?.data?.order_status == "Processing") &&
          <>
            <div className='ordercConfirmation_top'>
              <h3>Order Confirmed</h3>
              <p>We’ll send you tracking details when your <br />
                package ships. Estimated delivery by <b>20th June.</b></p>
              <Link to="/orderConfirmation">
                <div className='ordercConfirmation_top_help'>
                  <p>Get help on whatsapp </p><span>
                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1592)"><path d="M0.600098 1.43018H7.9901V8.82018" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10"></path><path d="M0.600098 8.82018L7.9901 1.43018" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10"></path></g><defs><clipPath id="clip0_2_1592"><rect width="8.84" height="8.84" fill="white" transform="translate(0 0.580078)"></rect></clipPath></defs></svg></span>
                </div>
              </Link>
            </div>

            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <img src="../img/slider.png" alt='slider' width="600px" />
            </div>
          </>
        }
        {orderData?.data?.order_status == "Confirmed" &&
          <div>
            <div className="ordercConfirmation_top">
              <h3>Preparing to Ship</h3>
              <p>
                We’re packing your order right now. It will ship<br /> later today. We’re excited!
              </p>
              <Link to="/orderConfirmation">
                <div className="ordercConfirmation_top_help">
                  <p>Get help on whatsapp </p>
                  <span>
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2_1592)">
                        <path
                          d="M0.600098 1.43018H7.9901V8.82018"
                          stroke="#2A3592"
                          strokeWidth="1.7"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M0.600098 8.82018L7.9901 1.43018"
                          stroke="#2A3592"
                          strokeWidth="1.7"
                          strokeMiterlimit="10"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2_1592">
                          <rect
                            width="8.84"
                            height="8.84"
                            fill="white"
                            transform="translate(0 0.580078)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <img src="../img/slider1.png" alt="slider1" width="540px" />
            </div>
          </div>
        }

        {orderData?.data?.order_status == "Shipped" &&
          <div>
            <div className="ordercConfirmation_top">
              <h3>Shipped!</h3>
              <p>
                We’ve sent you the tracking details over email<br /> and text. You can also track it right here—
              </p>
              <Link to="/orderConfirmation">
                <div className="ordercConfirmation_top_help">
                  <p>Get help on whatsapp </p>
                  <span>
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2_1592)">
                        <path
                          d="M0.600098 1.43018H7.9901V8.82018"
                          stroke="#2A3592"
                          strokeWidth="1.7"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M0.600098 8.82018L7.9901 1.43018"
                          stroke="#2A3592"
                          strokeWidth="1.7"
                          strokeMiterlimit="10"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2_1592">
                          <rect
                            width="8.84"
                            height="8.84"
                            fill="white"
                            transform="translate(0 0.580078)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <img src="../img/slider2.png" alt="slider2" width="540px" />
            </div>

            <div className="ordercConfirmation_top">
              <div className="shiping_status_box" style={{ width: "60%" }}>
                <div>
                  <h6>Bluedart</h6>
                  <span><GoPrimitiveDot style={{ color: "#83E46B" }} />Now in Amravati, MH</span>
                </div>
                <div>
                  <h6>AWB—91286431928456</h6>
                  <Link to="/orderConfirmation">
                    <div className="ordercConfirmation_top_help">
                      <p>Track </p>
                      <span>
                        <svg
                          width="9"
                          height="10"
                          viewBox="0 0 9 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2_1592)">
                            <path
                              d="M0.600098 1.43018H7.9901V8.82018"
                              stroke="#2A3592"
                              strokeWidth="1.7"
                              strokeMiterlimit="10"
                            ></path>
                            <path
                              d="M0.600098 8.82018L7.9901 1.43018"
                              stroke="#2A3592"
                              strokeWidth="1.7"
                              strokeMiterlimit="10"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_2_1592">
                              <rect
                                width="8.84"
                                height="8.84"
                                fill="white"
                                transform="translate(0 0.580078)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
        <div className="orderConfirmation_box" style={{ paddingBottom: "1rem" }}>
          <div className="orderConfirmation_box_heading">
            <div>
              <h6>
                <img src="../img/reviewyourorder.png" alt="reviewyourorder" width="22" style={{ marginRight: "8px" }} />
                order #{orderData?.data?.order_num}
              </h6>
            </div>
            <span>{moment(orderData?.data?.createdAt).format("Do MMM YYYY")}</span>
          </div>
          {orderData?.data?.items?.map(item => (
            <div className="orderConfirmation_box_list">
              <div>
                <h3>{item?.product_name}</h3>
                <span>{`${Object.values(item?.varients ?? {})?.join(" • ")}`}</span>
              </div>
              <div>
                <h3>{getNumberWithComma(Number(item?.price) * Number(item?.qty))}</h3>
              </div>
            </div>
          ))}
          <div className="orderConfirmation_box_list">
            <div>
              <h3
                style={{
                  color: "#2A3592",
                }}
              >
                Total Paid</h3>
              {/* <span>with Card ending *1234</span> */}
            </div>
            <div>
              <h3
                style={{
                  color: "#2A3592",
                }}
              >
                {/* <del
                  style={{
                    fontWeight: "300",
                    color: "#2A3592",
                    marginRight: "8px",
                  }}
                >
                  ₹18,700
                </del> */}
                {getNumberWithComma(Number(orderData?.data?.total_amount))}
              </h3>
            </div>
          </div>
        </div>

        <div className="orderConfirmation_box_second" style={{ paddingBottom: "1rem" }}>
          <div className="orderConfirmation_box_heading">
            <div>
              <h6>
                <img src="../img/shippingto.png" alt="shippingto" width="22" style={{ marginRight: "8px" }} />
                Shipping to
              </h6>
            </div>
          </div>

          <div className="orderConfirmation_box_data orderConfirmation_box_data_desktopView">
            <div>
              <h3>{orderData?.data?.shipping_address?.fname} {orderData?.data?.shipping_address?.lname}</h3>
              <p>{orderData?.data?.shipping_address?.address_1},{orderData?.data?.shipping_address?.address_2} <br />{orderData?.data?.shipping_address?.state} {orderData?.data?.shipping_address?.city},{orderData?.data?.shipping_address?.pincode}</p>
              <p><i>{orderData?.data?.shipping_address?.phone}</i></p>
              {/* <span>Delivers 17—20th June</span> */}
            </div>
            <div>
              <Link to="/userProfile">
                <h4>
                  <img src="../img/allorders.png" alt="allorders" width="22" style={{ marginRight: "8px" }} />
                  All Orders
                </h4>
              </Link>
              {/* <Link to="/orderConfirmation">
                <h4>
                  <img src="../img/reportaproblem.png" alt="reportaproblem" width="22" style={{ marginRight: "8px" }} />
                  Report a Problem
                </h4>
              </Link>
              <Link to="/orderConfirmation">
                <h4>
                  <img src="../img/returnpolicy.png" alt="returnpolicy" width="22" style={{ marginRight: "8px" }} />
                  Return Policy
                </h4>
              </Link> */}
            </div>
          </div>

          {/* For mobile View start */}
          <div className="orderConfirmation_box_data orderConfirmation_box_data_mobileView">
            <Row>
              <Col xs={12}>
                <div>
                  <h3>{orderData?.data?.shipping_address?.fname} {orderData?.data?.shipping_address?.lname}</h3>
                  <p>{orderData?.data?.shipping_address?.address_1},{orderData?.data?.shipping_address?.address_2} <br />{orderData?.data?.shipping_address?.state} {orderData?.data?.shipping_address?.city},{orderData?.data?.shipping_address?.pincode}</p>
                  <p><i>{orderData?.data?.shipping_address?.phone}</i></p>
                  {/* <span>Delivers 17—20th June</span> */}
                </div>
              </Col>
              <Col xs={12}>
                <div style={{ marginTop: "2rem" }}>
                  <Link to="/userProfile">
                    <h4>
                      <img src="../img/allorders.png" alt="allorders" width="22" style={{ marginRight: "8px" }} />
                      All Orders
                    </h4>
                  </Link>
                  {/* <Link to="/orderConfirmation">
                    <h4>
                      <img src="../img/reportaproblem.png" alt="reportaproblem" width="22" style={{ marginRight: "8px" }} />
                      Report a Problem
                    </h4>
                  </Link>
                  <Link to="/orderConfirmation">
                    <h4>
                      <img src="../img/returnpolicy.png" alt="returnpolicy" width="22" style={{ marginRight: "8px" }} />
                      Return Policy
                    </h4>
                  </Link> */}
                </div>
              </Col>
            </Row>
          </div>
          {/* For mobile View end */}

        </div>
      </Container>
      {/* <ShippingStatus /> */}
      <Box style={{
        padding: "0rem 2rem",
        background: "#fff",
        '@media (max-width: 768px)': {
          padding: "1rem 2rem"
        }
      }}>
        <FooterStrip />
      </Box>
    </div>

  );
}

export default OrderConfirmation;
