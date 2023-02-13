import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/system";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { TiDeleteOutline } from "react-icons/ti";
import FilterModalForMobile from "./filterModalForMobile";

function ProductFilters() {
  const [age, setAge] = useState("");
  const [showColor, setShowColor] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showMostPopular, setShowMostPopular] = useState(false);
  const [showKindGarment, setShowKindGarment] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [showMaterials, setShowMaterials] = useState(false);

  const [showFilter, setShowFilter] = useState(false);

    const handleClose = () => setShowFilter(false);
    const handleShow = () => setShowFilter(true);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className="product_filters product_filters_for_mobile">
        <div className="product_filters_wrap">
          <div className="common_select_wrap">
            <FormControl>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="2" className="common_option_wrap">
                  <div className="common_option">
                    <p className="common_option_p">Heavy Embroidery</p>
                    <span className="common_option_span">fanciest first</span>
                  </div>
                </MenuItem>
                <MenuItem value="1" className="common_option_wrap">
                  <div className="common_option">
                    <p className="common_option_p">Newest</p>
                    <span className="common_option_span">minimal first</span>
                  </div>
                </MenuItem>
                <MenuItem value="" className="common_option_wrap">
                  <div className="common_option">
                    <p className="common_option_p">Most Popular</p>
                  </div>
                </MenuItem>
                <MenuItem value="" className="common_option_wrap">
                  <div className="common_option">
                    <p className="common_option_p">Affordable</p>
                    <span className="common_option_span">
                      Lowest Price First
                    </span>
                  </div>
                </MenuItem>
                <MenuItem value="" className="common_option_wrap">
                  <div className="common_option">
                    <p className="common_option_p">Luxurious</p>
                    <span className="common_option_span">
                      {" "}
                      Highest Price first
                    </span>
                  </div>
                </MenuItem>
                <MenuItem value="" className="common_option_wrap">
                  <div className="common_option">
                    <p className="common_option_p">Most Popular</p>
                    <svg
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.51318 1L5.33436 5L9.16024 1"
                        stroke="#2A3592"
                        strokeWidth="1.7"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="common_select_wrap">
            <Box sx={{
              backgroundColor: "#2A3592",
              padding: "10px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
               }}
               onClick={handleShow}
              >
              <Typography variant="h6" sx={{ color: "#fff" }}>Filters</Typography>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.70391 9.03V10.5C10.1139 10.1 10.7339 9.81 11.4639 9.81C12.2639 9.81 12.6839 10.2 12.6839 10.69C12.6839 11.2 12.2539 11.59 11.2939 11.59H10.5239V12.83H11.4639C12.3939 12.83 12.8639 13.22 12.8639 13.76C12.8639 14.34 12.2839 14.72 11.4739 14.72C10.6939 14.72 10.0339 14.4 9.55391 13.89V15.48C10.1539 15.94 10.9139 16.17 11.7339 16.17C13.5339 16.17 14.5039 15.08 14.5039 13.94C14.5039 13.02 13.9239 12.39 13.2439 12.13V12.1C13.8839 11.77 14.2739 11.18 14.2739 10.43C14.2739 9.34 13.3939 8.37 11.7639 8.37C10.9139 8.37 10.1839 8.64 9.70391 9.03Z" fill="#9DA8FF" />
                <rect x="0.85" y="0.85" width="22.3" height="22.3" rx="11.15" stroke="#9DA8FF" stroke-width="1.7" />
              </svg>
            </Box>
          </div>
        </div>
      </div>

      <FilterModalForMobile showFilter={showFilter} handleClose={handleClose} />

      <div className="product_filters product_filters_for_desktop product_filters_change">
        <div className="product_filters_wrap">
          <div className="common_select_wrap">
            <FormControl>
              {showMostPopular &&
                <div className="most_popular_wrapper_box">
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <p className="common_option_p">Heavy Embroidery</p>
                      <span className="common_option_span">fanciest first</span>
                    </div>
                  </MenuItem>
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <p className="common_option_p">Newest</p>
                      <span className="common_option_span">minimal first</span>
                    </div>
                  </MenuItem>
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <p className="common_option_p">Most Popular</p>
                    </div>
                  </MenuItem>
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <p className="common_option_p">Affordable</p>
                      <span className="common_option_span">
                        Lowest Price First
                      </span>
                    </div>
                  </MenuItem>
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <p className="common_option_p">Luxurious</p>
                      <span className="common_option_span">
                        {" "}
                        Highest Price first
                      </span>
                    </div>
                  </MenuItem>
                </div>
              }
              <MenuItem onClick={() => {
                if (showMostPopular) {
                  setShowMostPopular(false)
                } else {
                  setShowMostPopular(true)
                  setShowPrice(false)
                  setShowColor(false)
                  setShowKindGarment(false)
                  setShowSize(false)
                  setShowMaterials(false)
                }
              }} className="common_option_wrap">
                <div className="common_option">
                  <p className="common_option_p">Most Popular</p>
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.51318 1L5.33436 5L9.16024 1"
                      stroke="#2A3592"
                      strokeWidth="1.7"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
              </MenuItem>
            </FormControl>
          </div>

          <div className="common_select_wrap">
            <FormControl>
              {showKindGarment &&
                <div className="kind_garment_wrapper_box">
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <div className="d-flex align-items-center common_radio_btn">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="female"
                              control={<Radio 
                                sx={{
                                  color: "#2a3592",
                                  '&.Mui-checked': {
                                    color: "#2a3592",
                                  },
                                }}
                              />}
                            />
                          </RadioGroup>
                        </FormControl>
                        <span>Lehenga</span>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <div className="d-flex align-items-center common_radio_btn">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                            />
                          </RadioGroup>
                        </FormControl>
                        <span>Kurta</span>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <div className="d-flex align-items-center common_radio_btn">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                            />
                          </RadioGroup>
                        </FormControl>
                        <span>Sari</span>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <div className="d-flex align-items-center common_radio_btn">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                            />
                          </RadioGroup>
                        </FormControl>
                        <span>Churidar</span>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <div className="d-flex align-items-center common_radio_btn">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                            />
                          </RadioGroup>
                        </FormControl>
                        <span>Ready to Wear</span>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <div className="d-flex align-items-center common_radio_btn">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                            />
                          </RadioGroup>
                        </FormControl>
                        <span>Dress</span>
                      </div>
                    </div>
                  </MenuItem>
                </div>
              }
              <MenuItem onClick={() => {
                if (showKindGarment) {
                  setShowKindGarment(false)
                } else {
                  setShowMostPopular(false)
                  setShowPrice(false)
                  setShowColor(false)
                  setShowKindGarment(true)
                  setShowSize(false)
                  setShowMaterials(false)
                }
              }} className="common_option_wrap">
                <div className="common_option">
                  <div className="d-flex align-items-center common_radio_btn">
                    <span style={{ marginRight: "3rem" }}>
                      Kind of Garment
                    </span>
                  </div>
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.51318 1L5.33436 5L9.16024 1"
                      stroke="#2A3592"
                      strokeWidth="1.7"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
              </MenuItem>
            </FormControl>
          </div>


          <div className="common_select_wrap">
            <FormControl>
              {showColor && (
                <div className="color_wrapper_box">
                  <div className="color_wrapper_box_child">
                    <h6>Colour</h6>
                    <span>Clear</span>
                  </div>
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                    className="color_wrapper_box_child_colorbtn"
                    onClick={() => setShowColor(false)}
                  >
                    <Button
                      style={{
                        background: "#E76666",
                        border: "none",
                        padding: "1rem",
                      }}
                    ></Button>
                    <Button
                      style={{ background: "#FAA652", border: "none" }}
                    ></Button>
                    <Button
                      style={{ background: "#F2F243", border: "none" }}
                    ></Button>
                    <Button
                      style={{ background: "#83E46B", border: "none" }}
                    ></Button>
                    <Button
                      style={{ background: "#39C9C9", border: "none" }}
                    ></Button>
                    <Button
                      style={{ background: "#4B73EA", border: "none" }}
                    ></Button>
                    <Button
                      style={{ background: "#7A2ACB", border: "none" }}
                    ></Button>
                    <Button
                      style={{ background: "#F249C8", border: "none" }}
                    ></Button>
                  </ButtonGroup>
                  <div
                    className="color_wrapper_box_child"
                    style={{ marginTop: "16px" }}
                  >
                    <h6>Shade</h6>
                    <span>Clear</span>
                  </div>
                  <div
                    className="color_wrapper_box_child"
                    onClick={() => setShowColor(false)}
                  >
                    <Button
                      variant="contained"
                      className="shade_btn"
                      style={{ background: "#CCCCCC" }}
                    >
                      Light
                    </Button>
                    <Button
                      variant="contained"
                      className="shade_btn"
                      style={{ background: "#AAAAAA" }}
                    >
                      Medium
                    </Button>
                    <Button
                      variant="contained"
                      className="shade_btn"
                      style={{ background: "#333333" }}
                    >
                      Dark
                    </Button>
                  </div>
                </div>
              )}

              <MenuItem onClick={() => {
                if (showColor) {
                  setShowColor(false)
                } else {
                  setShowMostPopular(false)
                  setShowPrice(false)
                  setShowColor(true)
                  setShowKindGarment(false)
                  setShowSize(false)
                  setShowMaterials(false)
                }
              }} className="common_option_wrap">
                <div className="common_option">
                  <div className="d-flex align-items-center common_radio_btn">
                    <span style={{ marginRight: "3rem" }}>
                      Colour
                    </span>
                  </div>
                  <svg
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2.08008"
                      y="2"
                      width="36"
                      height="36"
                      rx="18"
                      fill="url(#paint0_angular_1310_4720)"
                      stroke="white"
                      strokeWidth="4"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_angular_1310_4720"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(20.0801 20) rotate(90) scale(16)"
                      >
                        <stop stop-color="#E76666" />
                        <stop offset="0.135417" stop-color="#FAA652" />
                        <stop offset="0.291667" stop-color="#F2F243" />
                        <stop offset="0.442708" stop-color="#83E46B" />
                        <stop offset="0.588542" stop-color="#6ADEDE" />
                        <stop offset="0.713542" stop-color="#4B73EA" />
                        <stop offset="0.84375" stop-color="#8840D1" />
                        <stop offset="1" stop-color="#F249C8" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </MenuItem>
            </FormControl>
          </div>

          <div className="common_select_wrap">
            <FormControl>
              {showSize &&
                <div className="size_wrapper_box">
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <p>
                        <div className="common_option">
                          <span>SIZE - INCHES</span>
                        </div>
                      </p>
                      <div className="chet_size">
                        <span>Chest</span>
                        <span>Waist</span>
                        <span>Length</span>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <p>
                        <div className="common_option">
                          <div className="d-flex align-items-center common_radio_btn">
                            <FormControl>
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue=""
                                name="radio-buttons-group"
                              >
                                <FormControlLabel
                                  value="female"
                                  control={<Radio />}
                                />
                              </RadioGroup>
                            </FormControl>
                            <span>Lehenga</span>
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
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <p>
                        <div className="common_option">
                          <div className="d-flex align-items-center common_radio_btn">
                            <FormControl>
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue=""
                                name="radio-buttons-group"
                              >
                                <FormControlLabel
                                  value="female"
                                  control={<Radio />}
                                />
                              </RadioGroup>
                            </FormControl>
                            <span>Lehenga</span>
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
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <p>
                        <div className="common_option">
                          <div className="d-flex align-items-center common_radio_btn">
                            <FormControl>
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue=""
                                name="radio-buttons-group"
                              >
                                <FormControlLabel
                                  value="female"
                                  control={<Radio />}
                                />
                              </RadioGroup>
                            </FormControl>
                            <span>Lehenga</span>
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
                </div>
              }
              <MenuItem onClick={() => {
                if (showSize) {
                  setShowSize(false)
                } else {
                  setShowMostPopular(false)
                  setShowPrice(false)
                  setShowColor(false)
                  setShowKindGarment(false)
                  setShowSize(true)
                  setShowMaterials(false)
                }
              }} className="common_option_wrap">
                <div className="common_option">
                  <p>
                    <div className="common_option">
                      <div className="d-flex align-items-center common_radio_btn">
                        <span>Size</span>
                      </div>
                    </div>
                  </p>
                  <div className="chet_size">Any</div>
                </div>
              </MenuItem>
            </FormControl>
          </div>

          <div className="common_select_wrap">
            <FormControl>
              {showMaterials &&
                <div className="material_wrapper_box">
                  <MenuItem value="" className="common_option_wrap common_option_wrap_item">
                    <div className="common_option">
                      <div className="d-flex align-items-center common_radio_btn">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="cotton"
                              control={<Radio sx={{
                              color: "#000 !important",
                              '&.Mui-checked': {
                                color: "#000 !important",
                              },
                            }}/>}
                            />
                          </RadioGroup>
                        </FormControl>
                        <span>Cotton</span>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <div className="d-flex align-items-center common_radio_btn">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="polyester"
                              control={<Radio />}
                            />
                          </RadioGroup>
                        </FormControl>
                        <span>Polyester</span>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <div className="d-flex align-items-center common_radio_btn">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="chiffon"
                              control={<Radio />}
                            />
                          </RadioGroup>
                        </FormControl>
                        <span>Chiffon</span>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <div className="d-flex align-items-center common_radio_btn">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                            />
                          </RadioGroup>
                        </FormControl>
                        <span>Lycra</span>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <div className="d-flex align-items-center common_radio_btn">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                            />
                          </RadioGroup>
                        </FormControl>
                        <span>Viscose</span>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <div className="d-flex align-items-center common_radio_btn">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                            />
                          </RadioGroup>
                        </FormControl>
                        <span>Wool </span>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <div className="d-flex align-items-center common_radio_btn">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                            />
                          </RadioGroup>
                        </FormControl>
                        <span>Silk </span>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem value="" className="common_option_wrap">
                    <div className="common_option">
                      <div className="d-flex align-items-center common_radio_btn">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                            />
                          </RadioGroup>
                        </FormControl>
                        <span>Rayon</span>
                      </div>
                    </div>
                  </MenuItem>
                </div>
              }
              <MenuItem onClick={() => {
                if (showMaterials) {
                  setShowMaterials(false)
                } else {
                  setShowMostPopular(false)
                  setShowPrice(false)
                  setShowColor(false)
                  setShowKindGarment(false)
                  setShowSize(false)
                  setShowMaterials(true)
                }
              }} className="common_option_wrap">
                <div className="common_option">
                  <div className="d-flex align-items-center common_radio_btn">
                    <span>Materials</span>
                  </div>
                  <span>Any</span>
                </div>
              </MenuItem>
            </FormControl>
          </div>

          <div className="common_select_wrap">
            <FormControl>
              {showPrice && (
                <div className="price_select_wrap_box">
                  <div className="price_select_wrap_box_child">
                    <h6>From</h6>
                    <div className="price_select_wrap_box_child_data">
                      <input type="text" placeholder="₹1000" />
                      <span onClick={() => setShowPrice(false)}>
                        <TiDeleteOutline />
                      </span>
                    </div>
                  </div>
                  <div className="price_select_wrap_box_child">
                    <h6>To</h6>
                    <div className="price_select_wrap_box_child_data">
                      <input type="text" placeholder="₹3500" />
                      <span onClick={() => setShowPrice(false)}>
                        <TiDeleteOutline />
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <MenuItem onClick={() => {
                if (showPrice) {
                  setShowPrice(false)
                } else {
                  setShowMostPopular(false)
                  setShowPrice(true)
                  setShowColor(false)
                  setShowKindGarment(false)
                  setShowSize(false)
                  setShowMaterials(false)
                }
              }} className="common_option_wrap">
                <div className="common_option">
                  <div className="d-flex align-items-center common_radio_btn">
                    <span style={{ marginRight: "3rem" }}>
                      Price
                    </span>
                  </div>
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.51318 1L5.33436 5L9.16024 1"
                      stroke="#2A3592"
                      strokeWidth="1.7"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
              </MenuItem>
            </FormControl>
          </div>



          <button className="clear_btn">
            <span>Clear</span>
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1310_5640)">
                <path
                  d="M0.760254 0.679993L7.40025 7.31999"
                  stroke="white"
                  strokeWidth="1.7"
                  strokeMiterlimit="10"
                />
                <path
                  d="M7.40025 0.679993L0.760254 7.31999"
                  stroke="white"
                  strokeWidth="1.7"
                  strokeMiterlimit="10"
                />
              </g>
              <defs>
                <clipPath id="clip0_1310_5640">
                  <rect
                    width="7.84"
                    height="7.84"
                    fill="white"
                    transform="translate(0.160156 0.0800171)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductFilters;
