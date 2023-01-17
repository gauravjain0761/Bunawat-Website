import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/system';
import { Button, ButtonGroup, TextField } from '@mui/material';

function ProductFilters () {
    const [age, setAge] = useState('');
    const [showColor, setShowColor] = useState(false);
    const [showPrice, setShowPrice] = useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
  return (
    <div className='product_filters'>
                <div className='product_filters_wrap'>
                    <div className="common_select_wrap">
                        <FormControl>
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <p>Most Popular</p>
                                        <span>minimal first</span>
                                    </div>
                                </MenuItem>
                                <MenuItem value={10} className="common_option_wrap">
                                    <div className='common_option'>
                                        <p>Heavy Embroidery</p>
                                        <span>fanciest first</span>
                                    </div>
                                </MenuItem>
                                <MenuItem value={20} className="common_option_wrap">
                                    <div className='common_option'>
                                        <p>Newest</p>
                                        <span>minimal first</span>
                                    </div>
                                </MenuItem>
                                <MenuItem value={30} className="common_option_wrap">
                                    <div className='common_option'>
                                        <p>Most Popular</p>
                                    </div>
                                </MenuItem>
                                <MenuItem value={30} className="common_option_wrap">
                                    <div className='common_option'>
                                        <p>Affordable</p>
                                        <span>Lowest Price First</span>
                                    </div>
                                </MenuItem>
                                <MenuItem value={30} className="common_option_wrap">
                                    <div className='common_option'>
                                        <p>Luxurious</p>
                                        <span>Highest Price first</span>
                                    </div>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="common_select_wrap">
                        <FormControl>
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <div className='d-flex align-items-center common_radio_btn'>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue=""
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} />
                                                </RadioGroup>
                                            </FormControl>
                                            <span>Lehenga</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <div className='d-flex align-items-center common_radio_btn'>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue=""
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} />
                                                </RadioGroup>
                                            </FormControl>
                                            <span>Kurta</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <div className='d-flex align-items-center common_radio_btn'>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue=""
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} />
                                                </RadioGroup>
                                            </FormControl>
                                            <span>Sari</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <div className='d-flex align-items-center common_radio_btn'>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue=""
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} />
                                                </RadioGroup>
                                            </FormControl>
                                            <span>Churidar</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <div className='d-flex align-items-center common_radio_btn'>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue=""
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} />
                                                </RadioGroup>
                                            </FormControl>
                                            <span>Ready to Wear</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <div className='d-flex align-items-center common_radio_btn'>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue=""
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} />
                                                </RadioGroup>
                                            </FormControl>
                                            <span>Dress</span>
                                        </div>
                                    </div>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>


                    {showColor && (
                        <div className='color_wrapper_box'>
                        <div className='color_wrapper_box_child'>
                            <h6>Colour</h6>
                            <span>Clear</span>
                        </div>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group" className='color_wrapper_box_child_colorbtn'>
                            <Button style={{background: "#E76666", border: "none"}}>.</Button>
                            <Button style={{background: "#FAA652", border: "none"}}></Button>
                            <Button style={{background: "#F2F243", border: "none"}}></Button>
                            <Button style={{background: "#83E46B", border: "none"}}></Button>
                            <Button style={{background: "#39C9C9", border: "none"}}></Button>
                            <Button style={{background: "#4B73EA", border: "none"}}></Button>
                            <Button style={{background: "#7A2ACB", border: "none"}}></Button>
                            <Button style={{background: "#F249C8", border: "none"}}></Button>
                        </ButtonGroup>
                        <div className='color_wrapper_box_child'>
                            <h6>Shade</h6>
                            <span>Clear</span>
                        </div>
                        <div className='color_wrapper_box_child'>
                            <Button variant="contained" className='shade_btn' style={{background: "#CCCCCC"}}>Light</Button>
                            <Button variant="contained" className='shade_btn' style={{background: "#AAAAAA"}}>Medium</Button>
                            <Button variant="contained" className='shade_btn' style={{background: "#333333"}}>Dark</Button>
                        </div>
                    </div>
                    )}

                    <div className='color_wrapper common_select_wrap' onClick={() => setShowColor(true)} style={{cursor: "pointer"}}>
                        <p>Colour</p>
                        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2.08008" y="2" width="36" height="36" rx="18" fill="url(#paint0_angular_1310_4720)" stroke="white" strokeWidth="4" />
                            <defs>
                                <radialGradient id="paint0_angular_1310_4720" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.0801 20) rotate(90) scale(16)">
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

                    <div className="common_select_wrap">
                        <FormControl>
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <p>
                                            <div className='common_option'>
                                                <span>Size — inches</span>
                                            </div>
                                        </p>
                                        <div className='chet_size'>
                                            <span>Chest</span>
                                            <span>Waist</span>
                                            <span>Length</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <p>
                                            <div className='common_option'>
                                                <div className='d-flex align-items-center common_radio_btn'>
                                                    <FormControl>
                                                        <RadioGroup
                                                            aria-labelledby="demo-radio-buttons-group-label"
                                                            defaultValue=""
                                                            name="radio-buttons-group"
                                                        >
                                                            <FormControlLabel value="female" control={<Radio />} />
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <span>Lehenga</span>
                                                </div>
                                            </div>
                                        </p>
                                        <div className='chet_size'>
                                            <span>30</span>
                                            <span>26</span>
                                            <span>30</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <p>
                                            <div className='common_option'>
                                                <div className='d-flex align-items-center common_radio_btn'>
                                                    <FormControl>
                                                        <RadioGroup
                                                            aria-labelledby="demo-radio-buttons-group-label"
                                                            defaultValue=""
                                                            name="radio-buttons-group"
                                                        >
                                                            <FormControlLabel value="female" control={<Radio />} />
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <span>Lehenga</span>
                                                </div>
                                            </div>
                                        </p>
                                        <div className='chet_size'>
                                            <span>30</span>
                                            <span>26</span>
                                            <span>30</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <p>
                                            <div className='common_option'>
                                                <div className='d-flex align-items-center common_radio_btn'>
                                                    <FormControl>
                                                        <RadioGroup
                                                            aria-labelledby="demo-radio-buttons-group-label"
                                                            defaultValue=""
                                                            name="radio-buttons-group"
                                                        >
                                                            <FormControlLabel value="female" control={<Radio />} />
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <span>Lehenga</span>
                                                </div>
                                            </div>
                                        </p>
                                        <div className='chet_size'>
                                            <span>30</span>
                                            <span>26</span>
                                            <span>30</span>
                                        </div>
                                    </div>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="common_select_wrap">
                        <FormControl>
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <div className='d-flex align-items-center common_radio_btn'>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue=""
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} />
                                                </RadioGroup>
                                            </FormControl>
                                            <span>Cotton</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <div className='d-flex align-items-center common_radio_btn'>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue=""
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} />
                                                </RadioGroup>
                                            </FormControl>
                                            <span>Polyester</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <div className='d-flex align-items-center common_radio_btn'>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue=""
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} />
                                                </RadioGroup>
                                            </FormControl>
                                            <span>Chiffon</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <div className='d-flex align-items-center common_radio_btn'>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue=""
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} />
                                                </RadioGroup>
                                            </FormControl>
                                            <span>Lycra</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <div className='d-flex align-items-center common_radio_btn'>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue=""
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} />
                                                </RadioGroup>
                                            </FormControl>
                                            <span>Viscose</span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <div className='d-flex align-items-center common_radio_btn'>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue=""
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} />
                                                </RadioGroup>
                                            </FormControl>
                                            <span>Wool </span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <div className='d-flex align-items-center common_radio_btn'>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue=""
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} />
                                                </RadioGroup>
                                            </FormControl>
                                            <span>Silk </span>
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem value="" className="common_option_wrap">
                                    <div className='common_option'>
                                        <div className='d-flex align-items-center common_radio_btn'>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue=""
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} />
                                                </RadioGroup>
                                            </FormControl>
                                            <span>Rayon</span>
                                        </div>
                                    </div>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    {showPrice && (
                    <div className='price_select_wrap_box'>
                       <div className='price_select_wrap_box_child'>
                        <h6>From</h6>
                        <TextField id="standard-basic" label="₹1000" variant="standard" />
                       </div>
                       <div className='price_select_wrap_box_child'>
                        <h6>To</h6>
                        <TextField id="standard-basic" label="₹3500" variant="standard" />
                       </div>
                    </div>
                    )}
                    <div className='common_select_wrap' onClick={() => setShowPrice(true)} style={{cursor: "pointer"}}>
                            <div className='color_wrapper'>
                                <p>Price</p>
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.51318 1L5.33436 5L9.16024 1" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                </svg>
                            </div>
                    </div>

                    <button className='clear_btn'>
                        <span>Clear</span>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1310_5640)">
                                <path d="M0.760254 0.679993L7.40025 7.31999" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                                <path d="M7.40025 0.679993L0.760254 7.31999" stroke="white" strokeWidth="1.7" strokeMiterlimit="10" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1310_5640">
                                    <rect width="7.84" height="7.84" fill="white" transform="translate(0.160156 0.0800171)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
  );
}

export default ProductFilters
