import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/system";
import { Button, ButtonGroup, Checkbox, ClickAwayListener, Typography } from "@mui/material";
import { TiDeleteOutline } from "react-icons/ti";
import FilterModalForMobile from "./filterModalForMobile";
import { useGetAttributeDataQuery } from "../../services/api";
import { getFirstLetterCapital } from "../../utils/utils";

function ProductFilters({ singleData, setSelectedId, selectedId, refetch }) {
  const { data, error, isLoading } = useGetAttributeDataQuery()
  const [attributeData, setAttributeData] = useState([]);
  const [showPrice, setShowPrice] = useState(false);
  const [showMostPopular, setShowMostPopular] = useState(false);
  const [showMostPopularMobile, setShowMostPopularMobile] = useState(false);
  const [showKindGarment, setShowKindGarment] = useState(false);
  const [attributeOpen, setAttributeOpen] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState({});
  const [showFilter, setShowFilter] = useState(false);

  const handleClose = () => {
    setShowFilter(false);
    setAttributeOpen(attributeData?.map(x => false) ?? [])
  }
  const handleShow = () => setShowFilter(true);

  useEffect(() => {
    const finalData = data?.data?.filter(x => x?.isActive) ?? []
    setAttributeOpen(finalData?.map(x => false) ?? [])
    setAttributeData(finalData ?? [])
  }, [data])

  const handleSelectedAttribute = (name, index, itemName, itemIndex) => {
    let selectedAttributeList = { ...selectedAttribute }
    if (selectedAttributeList[name]) {
      if (selectedAttributeList[name]?.includes(itemName)) {
        let filterData = selectedAttributeList[name]?.filter(x => x != itemName)
        selectedAttributeList = { ...selectedAttributeList, [name]: filterData?.length > 0 ? filterData : undefined }
      } else {
        selectedAttributeList = { ...selectedAttributeList, [name]: [...selectedAttributeList[name], itemName] }
      }
    } else {
      selectedAttributeList = { ...selectedAttributeList, [name]: [itemName] }
    }
    setSelectedAttribute(selectedAttributeList)
    setSelectedId({ ...selectedId, atr: selectedAttributeList })
  }

  return (
    <>
      <div className="product_filters product_filters_for_mobile">
        <div className="product_filters_wrap mob_border_line">
          <div className="common_select_wrap">
            <FormControl>
              {showMostPopularMobile &&
                <ClickAwayListener onClickAway={(e) => 
                  {
                    e.stopPropagation();
                    e.preventDefault();
                    setShowMostPopularMobile(false);
                  }
                }>
                  <div className="most_popular_wrapper_box new_most_popular_wrapper_box_mob">
                    <MenuItem onClick={() => {
                      setSelectedId({ ...selectedId, sortBy: 0 })
                      setShowMostPopularMobile(false)
                      window.scrollTo(0, 0)
                    }} className="common_option_wrap common_option_wrap_bg">
                      <div className="common_option">
                        <p className="common_option_p">Newest</p>
                        <span className="common_option_span">minimal first</span>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={() => {
                      setSelectedId({ ...selectedId, sortBy: 1 })
                      setShowMostPopularMobile(false)
                      window.scrollTo(0, 0)
                    }} className="common_option_wrap">
                      <div className="common_option">
                        <p className="common_option_p">Affordable</p>
                        <span className="common_option_span">
                          Lowest Price First
                        </span>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={() => {
                      setSelectedId({ ...selectedId, sortBy: 2 })
                      setShowMostPopularMobile(false)
                      window.scrollTo(0, 0)
                    }} className="common_option_wrap common_option_wrap_bg">
                      <div className="common_option">
                        <p className="common_option_p">Luxurious</p>
                        <span className="common_option_span">
                          {" "}
                          Highest Price first
                        </span>
                      </div>
                    </MenuItem>
                  </div>
                </ClickAwayListener>
              }
              <MenuItem onClick={() => {
                if (showMostPopularMobile) {
                  setShowMostPopularMobile(false)
                } else {
                  setShowMostPopularMobile(true)
                  setShowMostPopular(false)
                  setShowPrice(false)
                  let attributeOpenList = [...attributeOpen];
                  attributeOpenList = attributeOpenList?.map(x => false)
                  setAttributeOpen(attributeOpenList)
                }
              }} className="common_option_wrap">
                <div className="common_option">
                  <p className="common_option_p">Most Popular</p>
                  {
                    !showMostPopularMobile &&<svg
                    style={{ rotate: showMostPopularMobile ? "0deg" : "180deg" }}
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
                  }
                  
                </div>
              </MenuItem>
            </FormControl>
          </div>
          {
            showMostPopularMobile ?
              (
                <>
                  <div className="common_select_wrap">
                    <Box
                      className="common_select_wrap_box_mob"
                      sx={{
                        // backgroundColor: "#2A3592",
                        padding: "10px 20px",
                        display: "flex",
                        justifyContent: "end",
                      }}>
                      <Typography
                        // className="filter_text"
                        variant="h6" sx={{ color: "#2A3592",
                          fontSize: "10px",
                          fontWeight: "600",
                          lineHeight: "16px",
                          fontFamily: "Newhero",
                          paddingRight : "16px"
                        }}>PICK A SORT ORDER</Typography>
                    </Box>
                  </div>
                </>
              ) :
              <>
                <div className="common_select_wrap">
                  <Box onClick={handleShow}
                    className="common_select_wrap_box_mob"
                    sx={{
                      backgroundColor: "#2A3592",
                      padding: "10px 20px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                    }}>
                    <Typography
                      className="filter_text"
                      variant="h6" sx={{ color: "#fff" }}>Filters</Typography>
                  </Box>
                </div>
                <FilterModalForMobile showFilter={showFilter} handleClose={handleClose} setSelectedId={setSelectedId} selectedId={selectedId} attributeOpen={attributeOpen} attributeData={attributeData} handleSelectedAttribute={handleSelectedAttribute} selectedAttribute={selectedAttribute} setAttributeOpen={setAttributeOpen} setShowMostPopular={setShowMostPopular} setShowPrice={setShowPrice} showPrice={showPrice} />
              </>

          }


        </div>
      </div>

      <div className="product_filters product_filters_for_desktop product_filters_change">
        <div className="product_filters_wrap">

          <div className="common_select_wrap">
            <FormControl>
              {showMostPopular &&
                <ClickAwayListener onClickAway={() => setShowMostPopular(false)}>
                  <div className="most_popular_wrapper_box">
                    {/* <MenuItem value="" className="common_option_wrap common_option_wrap_bg">
                    <div className="common_option">
                      <p className="common_option_p">Heavy Embroidery</p>
                      <span className="common_option_span">fanciest first</span>
                    </div>
                  </MenuItem> */}
                    <MenuItem onClick={() => {
                      setSelectedId({ ...selectedId, sortBy: 0 })
                    }} className="common_option_wrap">
                      <div className="common_option">
                        <p className="common_option_p">Newest</p>
                        <span className="common_option_span">minimal first</span>
                      </div>
                    </MenuItem>
                    {/* <MenuItem value="" className="common_option_wrap common_option_wrap_bg">
                    <div className="common_option">
                      <p className="common_option_p">Most Popular</p>
                    </div>
                  </MenuItem> */}
                    <MenuItem onClick={() => {
                      setSelectedId({ ...selectedId, sortBy: 1 })
                    }} className="common_option_wrap">
                      <div className="common_option">
                        <p className="common_option_p">Affordable</p>
                        <span className="common_option_span">
                          Lowest Price First
                        </span>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={() => {
                      setSelectedId({ ...selectedId, sortBy: 2 })
                    }} className="common_option_wrap common_option_wrap_bg">
                      <div className="common_option">
                        <p className="common_option_p">Luxurious</p>
                        <span className="common_option_span">
                          {" "}
                          Highest Price first
                        </span>
                      </div>
                    </MenuItem>
                  </div>
                </ClickAwayListener>
              }
              <MenuItem onClick={() => {
                if (showMostPopular) {
                  setShowMostPopular(false)
                } else {
                  setShowMostPopular(true)
                  setShowPrice(false)
                  let attributeOpenList = [...attributeOpen];
                  attributeOpenList = attributeOpenList?.map(x => false)
                  setAttributeOpen(attributeOpenList)
                }
              }} className="common_option_wrap">
                <div className="common_option">
                  <p className="common_option_p">Most Popular</p>
                  <svg
                    style={{ rotate: showMostPopular ? "0deg" : "180deg" }}
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

          {attributeData?.map((list, index) => (
            <div className="common_select_wrap">
              <FormControl>
                {attributeOpen[index] &&
                  <div className="kind_garment_wrapper_box fix-hight-scroll">
                    {list?.variants?.map((item, itemIndex) => (
                      <MenuItem className="common_option_wrap kind_common_option_wrap" sx={{ paddingLeft: "26px" }} onClick={() => handleSelectedAttribute(list?.slug, index, item?._id, itemIndex)}>
                        <div className="common_option">
                          <div className="d-flex align-items-center common_radio_btn">
                            <FormControlLabel
                              control={<Checkbox
                                checked={selectedAttribute?.[list?.slug]?.includes(item?._id) ?? false}
                                sx={{
                                  color: "#2a3592",
                                  '&.Mui-checked': {
                                    color: "#2a3592",
                                  },
                                }}
                              />}
                            />
                            <span>{getFirstLetterCapital(item?.name)}</span>  
                          </div>
                        </div>
                      </MenuItem>
                    ))}
                  </div>
                }
                <MenuItem onClick={() => {
                  let attributeOpenList = [...attributeOpen];
                  if (attributeOpenList[index]) {
                    attributeOpenList[index] = false
                    setAttributeOpen(attributeOpenList)
                  } else {
                    attributeOpenList = attributeOpenList?.map(x => false)
                    attributeOpenList[index] = true
                    setAttributeOpen(attributeOpenList)
                    setShowMostPopular(false)
                    setShowPrice(false)
                  }
                }} className="common_option_wrap">
                  <div className="common_option">
                    <div className="d-flex align-items-center common_radio_btn">
                      <span style={{ marginRight: "3rem" }}>
                        {getFirstLetterCapital(list?.name)}
                      </span>
                    </div>
                    <svg
                      style={{ rotate: attributeOpen[index] ? "0deg" : "180deg" }}
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
          ))}

          <div className="common_select_wrap">
            <FormControl>
              {showPrice && (
                <ClickAwayListener onClickAway={() => setShowPrice(false)}>
                  <div className="price_select_wrap_box">
                    <Box className="price_select_wrap_box_child" sx={{ background: "#F2F4FF" }}>
                      <h6>From</h6>
                      <div className="price_select_wrap_box_child_data">
                        <input type="text" placeholder="₹1000" value={selectedId?.pricing?.from ?? ''} onChange={(e) => {
                          const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                          setSelectedId({ ...selectedId, pricing: { ...selectedId?.pricing, from: Number(onlyNums) } })
                        }} style={{ backgroundColor: "#f2f4ff" }} />
                        {selectedId?.pricing?.from &&
                          <span onClick={() => setSelectedId({ ...selectedId, pricing: { ...selectedId?.pricing, from: 0 } })}>
                            <TiDeleteOutline />
                          </span>
                        }
                      </div>
                    </Box>
                    <div className="price_select_wrap_box_child">
                      <h6>To</h6>
                      <div className="price_select_wrap_box_child_data">
                        <input type="text" value={selectedId?.pricing?.to ?? ''} onChange={(e) => {
                          const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                          setSelectedId({ ...selectedId, pricing: { ...selectedId?.pricing, to: Number(onlyNums) } })
                        }} placeholder="₹3500" />
                        {selectedId?.pricing?.to &&
                          <span onClick={() => setSelectedId({ ...selectedId, pricing: { ...selectedId?.pricing, to: 0 } })}>
                            <TiDeleteOutline />
                          </span>
                        }
                      </div>
                    </div>
                  </div>
                </ClickAwayListener>
              )}

              <MenuItem onClick={() => {
                if (showPrice) {
                  setShowPrice(false)
                } else {
                  setShowMostPopular(false)
                  setShowPrice(true)
                  let attributeOpenList = [...attributeOpen];
                  attributeOpenList = attributeOpenList?.map(x => false)
                  setAttributeOpen(attributeOpenList)
                }
              }} className="common_option_wrap">
                <div className="common_option">
                  <div className="d-flex align-items-center common_radio_btn">
                    <span style={{ marginRight: "3rem" }}>
                      Price
                    </span>
                  </div>
                  <svg
                    style={{ rotate: showPrice ? "0deg" : "180deg" }}
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

          {/* <button className="apply_btn">
            <span>Apply</span>
          </button>
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
          </button> */}
        </div>
      </div>
    </>
  );
}

export default ProductFilters;
