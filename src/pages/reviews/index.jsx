import { Rating } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./reviews.css";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import FooterStrip from "../../components/footer/footerStrip";

const Reviews = () => {
  const [value, setValue] = React.useState(2);
  const [values, setValues] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValues(newValue);
  };

  const reviewsData = [
    {
      name: "Priya M.",
      city: "from Indore",
      product_name: "Synthetic Floral Print Sari",
      product_image: "../img/reviews.png",
      message:
        "Super soft and comfortable. My order was delivered well within time. Looking forward to order more from you.",
      audio: "audio",
    },
    {
      name: "Aishwarya J.",
      city: "from Mumbai",
      product_name: "Minimal Jumpsuit",
      product_image: "",
      message:
        "I ordered Bunawat for the first time and all my queries about the dress were solved so gracefully! Dispatched in time and I got it two days later.",
      audio: "",
    },
    {
      name: "Nidhi U.",
      city: "from Bengaluru",
      product_name: "Trenchcoat Suit",
      product_image: "",
      message:
        "My dress is really awesome. The fit is perfect, colour is so good and the zari work is elegant. Worth it!",
      audio: "audio",
    },
    {
      name: "Nidhi U.",
      city: "from Bengaluru",
      product_name: "Trenchcoat Suit",
      product_image: "",
      message:
        "My dress is really awesome. The fit is perfect, colour is so good and the zari work is elegant. Worth it!",
      audio: "audio",
    },
    {
      name: "Nidhi U.",
      city: "from Bengaluru",
      product_name: "Trenchcoat Suit",
      product_image: "",
      message:
        "My dress is really awesome. The fit is perfect, colour is so good and the zari work is elegant. Worth it!",
      audio: "",
    },
  ];
  return (
    <>
    <div id="reviews">
      <Container>
        <div className="reviewspage_heading">
          <h3>Bunawat Stories</h3>
          <p>A collection of reviews by wonderful customers </p>
        </div>
        <Row>
          {reviewsData.map((item, index) => {
            return (
              <Col xs={12} md={4} key={index} style={{height: "auto"}}>
                <div className="reviewspage_box">
                  <div className="reviewspage_box_top">
                    <div>
                      <h6>{item.name}</h6>
                      <p>{item.city}</p>
                    </div>
                    <div>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      />
                      <Link to="/reviews">
                        <div className="reviewspage_box_top_link">
                           {item.product_name}
                          <span style={{ marginLeft: "4px" }}>
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
                  <div>
                    {item.product_image ? <img src={item.product_image} alt="Reviews" /> : ""}
                    
                  </div>
                  <div className="reviewspage_box_text">
                    <h5>
                    {item.message}
                    </h5>
                  </div>
                  {item.audio ? (
                  <div className="reviewspage_box_whatsapp">
                    <div className="reviewspage_box_audio">
                      <Stack
                        spacing={2}
                        direction="row"
                        sx={{ mb: 1 }}
                        alignItems="center"
                      >
                        <VolumeDown />
                        <Slider
                          aria-label="Volume"
                          value={values}
                          onChange={handleChange}
                        />
                        <VolumeUp />
                      </Stack>
                    </div>
                    <p>
                      {" "}
                      <DoneAllIcon />
                      Sent via Whatsapp
                    </p>
                  </div>
                  ) : "" }
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
      <FooterStrip />
    </>
  );
};

export default Reviews;
