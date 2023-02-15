import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Box, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup } from "@mui/material";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { TiDeleteOutline } from "react-icons/ti";


const FilterModalForMobile = ({showFilter, handleClose}) => {
  const [age, setAge] = useState("");
  const [showColor, setShowColor] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showMostPopular, setShowMostPopular] = useState(false);
  const [showKindGarment, setShowKindGarment] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [showMaterials, setShowMaterials] = useState(false);

  return (
    <>
      <Modal
        show={showFilter}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{padding: "2rem 1rem"}}>
          <Box sx={{width: "100%"}}>
          <Box sx={{display: "flex"}}>
          <div className="common_select_wrap" style={{ borderRight: "none", marginRight: "4px"}}>
            <FormControl>
              {showMostPopular &&
                <div className="most_popular_wrapper_box">
                  <MenuItem value="" className="common_option_wrap common_option_wrap_bg">
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
                  <MenuItem value="" className="common_option_wrap common_option_wrap_bg">
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
                  <MenuItem value="" className="common_option_wrap common_option_wrap_bg">
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
              }}
               sx={{backgroundColor: "#f2f4ff", marginBottom: "10px"}}
               className="common_option_wrap">
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

          <div className="common_select_wrap" style={{ borderRight: "none", marginRight: "4px"}}>
            <FormControl>
              {showKindGarment &&
                <div className="kind_garment_wrapper_box">
                  <MenuItem value="" className="common_option_wrap kind_common_option_wrap" sx={{paddingLeft: "26px"}}>
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
                  <MenuItem value="" className="common_option_wrap" sx={{paddingLeft: "26px"}}>
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
                  <MenuItem value="" className="common_option_wrap kind_common_option_wrap" sx={{paddingLeft: "26px"}}>
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
                  <MenuItem value="" className="common_option_wrap" sx={{paddingLeft: "26px"}}>
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
                  <MenuItem value="" className="common_option_wrap kind_common_option_wrap" sx={{paddingLeft: "26px"}}>
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
                  <MenuItem value="" className="common_option_wrap" sx={{paddingLeft: "26px"}}>
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
              }}
               sx={{backgroundColor: "#f2f4ff", marginBottom: "10px"}}
               className="common_option_wrap">
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
          </Box>

          <Box sx={{display: "flex"}}>
          <div className="common_select_wrap" style={{ borderRight: "none", marginRight: "4px"}}>
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
              }} 
              sx={{backgroundColor: "#f2f4ff", marginBottom: "10px"}}
              className="common_option_wrap">
                <div className="common_option">
                  <div className="d-flex align-items-center">
                    <span>
                      Colour
                    </span>
                  </div>
                    
                </div>
              </MenuItem>
            </FormControl>
          </div>

          <div className="common_select_wrap" style={{ borderRight: "none", marginRight: "4px"}}>
            <FormControl>
              {showSize &&
                <div className="size_wrapper_box">
                  <MenuItem value="" className="common_option_wrap size_common_option_wrap" sx={{padding: "1rem 2rem"}}>
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
                  <MenuItem value="" className="common_option_wrap" sx={{padding: "1rem 2rem"}}>
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
                  <MenuItem value="" className="common_option_wrap size_common_option_wrap" sx={{padding: "1rem 2rem"}}>
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
                  <MenuItem value="" className="common_option_wrap" sx={{padding: "1rem 2rem"}}>
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
              }} 
              sx={{backgroundColor: "#f2f4ff", marginBottom: "10px"}}
              className="common_option_wrap">
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
          </Box>

          <Box sx={{display: "flex"}}>
          <div className="common_select_wrap" style={{ borderRight: "none", marginRight: "4px"}}>
            <FormControl>
              {showMaterials &&
                <div className="material_wrapper_box">
                  <MenuItem value="" className="common_option_wrap common_option_wrap_item material_common_option_wrap" sx={{paddingLeft: "2rem"}}>
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
                  <MenuItem value="" className="common_option_wrap" sx={{paddingLeft: "2rem"}}>
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
                  <MenuItem value="" className="common_option_wrap material_common_option_wrap" sx={{paddingLeft: "2rem"}}>
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
                  <MenuItem value="" className="common_option_wrap" sx={{paddingLeft: "2rem"}}>
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
                  <MenuItem value="" className="common_option_wrap material_common_option_wrap" sx={{paddingLeft: "2rem"}}>
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
                  <MenuItem value="" className="common_option_wrap" sx={{paddingLeft: "2rem"}}>
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
                  <MenuItem value="" className="common_option_wrap material_common_option_wrap" sx={{paddingLeft: "2rem"}}>
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
                  <MenuItem value="" className="common_option_wrap" sx={{paddingLeft: "2rem"}}>
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
              }} 
              sx={{backgroundColor: "#f2f4ff", marginBottom: "10px"}}
              className="common_option_wrap">
                <div className="common_option">
                  <div className="d-flex align-items-center common_radio_btn">
                    <span>Materials</span>
                  </div>
                  <span>Any</span>
                </div>
              </MenuItem>
            </FormControl>
          </div>

          <div className="common_select_wrap" style={{ borderRight: "none", marginRight: "4px"}}>
            <FormControl>
              {showPrice && (
                <div className="price_select_wrap_box"> 
                  <Box className="price_select_wrap_box_child" sx={{background: "#F2F4FF"}}>
                    <h6>From</h6>
                    <div className="price_select_wrap_box_child_data">
                      <input type="text" placeholder="₹1000" style={{backgroundColor: "#f2f4ff"}} />
                      <span onClick={() => setShowPrice(false)}>
                        <TiDeleteOutline />
                      </span>
                    </div>
                  </Box>
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
              }} 
              sx={{backgroundColor: "#f2f4ff", marginBottom: "10px"}}
              className="common_option_wrap">
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
          </Box>

          <button className="clear_btn" style={{marginRight: "20px"}}>
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
          <button className="clear_btn" onClick={handleClose}>
            <span>Apply</span>
          </button>
          </Box>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FilterModalForMobile;
