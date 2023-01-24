import React, { useState } from 'react';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const ProductPageFilter = () => {
    const [age, setAge] = useState("size");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

  return (
    <>
      <div className="product_filters">
                <div className='product_filters_wrap'>
                <div className="product_filters_wrap product_page_filtter">
                    <div
                        className={
                            age == "size"
                                ? "common_select_wrap first_option"
                                : "common_select_wrap"
                        }
                    >
                        <FormControl>
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                            >
                                <MenuItem value="size" className="common_option_wrap">
                                    <div className="common_option">
                                        <p>
                                            <div className="common_option">
                                                <span style={{textTransform: "uppercase"}}>size — inches</span>
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
                                <MenuItem value="" className="common_option_wrap">
                                    <div className="common_option">
                                        <p>
                                            <div className="common_option">
                                                <div className="d-flex align-items-center common_radio_btn">
                                                    <span>S - 30</span>
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
                                                    <span>M - 30</span>
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
                                                    <span>L - 30</span>
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
                                                    <span>XL - 30</span>
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
                                                    <span>Size: Select</span>
                                                </div>
                                            </div>
                                        </p>
                                        <Link to="/sizeGuide" style={{color: "#2A3592"}}>
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

                    <div className="add_btn_wrap">
                        <button className="clear_btn add_btn right_btn">
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
                        <button className="clear_btn add_btn">
                            <span>Add</span>
                            <span>
                                <s>₹5,200</s> ₹4,500
                            </span>
                        </button>
                    </div>
                </div>

                <div className="slaman_link">
                    <p>Salmon Pink</p>
                    <ul className="color_list">
                        <li
                            className="active"
                            style={{ backgroundColor: "#F7DACE" }}
                        ></li>
                        <li style={{ backgroundColor: "#BEF3E0" }}></li>
                        <li
                            style={{ backgroundColor: "#fff", border: "1px solid #d2d2d2" }}
                        ></li>
                        <li style={{ backgroundColor: "#037A44" }}></li>
                    </ul>
                </div>
                </div>
            </div>
    </>
  );
}

export default ProductPageFilter;
