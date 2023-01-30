import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { CssBaseline, Divider, Stack } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CustomPopOver } from './style';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import ReactInputVerificationCode from "react-input-verification-code";
import { DayPicker } from 'react-day-picker';
import { Tab, Tabs } from 'react-bootstrap';
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

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [scroll, setScroll] = React.useState(false);
    const [hover, setHover] = React.useState(false);
    const changeloction = window.location.pathname;
    const [headerColor, setHeaderColor] = React.useState(false);
    const [cartOpen, setCartOpen] = React.useState(false);
    const [selectedDay, setSelectedDay] = React.useState();
    const [otpverify, setOtpverify] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [accountPopup, setAccountPopup] = React.useState(null);
    const [calendarPopup, setCalendarPopup] = React.useState(null);
    const [cartPopup, setCartPopup] = React.useState(null);

    const [isActive, setIsActive] = React.useState({
        active: false,
        index: ""
    })

    const getActiveHeader = (scroll, hover) => {
        if (scroll) {
            return true
        } else {
            if (hover) {
                return true
            }
        }
        return false
    }

    const onChagewalletbar = () => {
        const current_loction = window.location.pathname;
        var mypath = ["/category", "/product", "/checkout", "/orderConfirmation", "/userProfile", "/reviews", "/404", "/returns", "/sizeGuide", "/paymentOptions"].includes(current_loction)
        if (mypath) {
            setHeaderColor(true);
        }
        else {
            setHeaderColor(false);
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
    }, []);

    React.useEffect(() => {
        onChagewalletbar();
    }, [changeloction]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setIsActive({ active: false, index: "" });
    };
    const handleActive = (index, active) => {
        setIsActive({ active: active, index: active ? index : "" });
    }

    const handleAccountClick = (event) => {
        setAccountPopup(event.currentTarget);
    };

    const handleAccountClose = () => {
        setAccountPopup(null);
    };

    const handleCalendarClick = (event) => {
        setCalendarPopup(event.currentTarget);
    };

    const handleCalendarClose = () => {
        setCalendarPopup(null);
    };

    const handleCartClick = (event) => {
        setCartPopup(event.currentTarget);
    };

    const handleCartClose = () => {
        setCartPopup(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const account = Boolean(accountPopup);
    const accountId = account ? 'simple-popover' : undefined;

    const calendar = Boolean(calendarPopup);
    const calendarId = calendar ? 'simple-popover' : undefined;

    const cart = Boolean(cartPopup);
    const cartId = cart ? 'simple-popover' : undefined;

    const collection = [
        {
            "_id": "63c935441ab6214bf9488b94",
            "name": "Most Loved",
            "home_visibilty": true
        },
        {
            "_id": "63c950c267c312e7abf3e5e7",
            "name": "Newest",
            "home_visibilty": false
        },
        {
            "_id": "63ca315a04cc045d66a8ba4b",
            "name": "sdfdsf12312",
            "home_visibilty": true
        },
        {
            "_id": "63ca323604cc045d66a8ba6f",
            "name": "nameqwe",
            "home_visibilty": false
        }
    ]

    const categories = [
        {
            "_id": "63c9349f1ab6214bf9488b87",
            "name": "Kind",
            "home_visibilty": false,
            "type": "PARENT_CATEGORY",
            "sub_cateogries": [
                {
                    "_id": "63c94fbe67c312e7abf3e59c",
                    "name": "Ethnic Sets",
                    "home_visibilty": false,
                    "type": "SUB_CATEGORY",
                    "categories": []
                },
                {
                    "_id": "63c94fe867c312e7abf3e5aa",
                    "name": "Floor Length Designs",
                    "home_visibilty": false,
                    "type": "SUB_CATEGORY",
                    "categories": []
                },
                {
                    "_id": "63c9503267c312e7abf3e5c0",
                    "name": "Lehengas",
                    "home_visibilty": false,
                    "type": "SUB_CATEGORY",
                    "categories": []
                },
                {
                    "_id": "63c9505f67c312e7abf3e5ce",
                    "name": "Shararas",
                    "home_visibilty": false,
                    "type": "SUB_CATEGORY",
                    "categories": []
                },
                {
                    "_id": "63c9509d67c312e7abf3e5dc",
                    "name": "Stylised Drapes",
                    "home_visibilty": false,
                    "type": "SUB_CATEGORY",
                    "categories": []
                }
            ]
        },
        {
            "_id": "63c94eb667c312e7abf3e550",
            "name": "Bridal",
            "home_visibilty": false,
            "type": "PARENT_CATEGORY",
            "sub_cateogries": [
                {
                    "_id": "63c94ef867c312e7abf3e564",
                    "name": "Roka Exhibit",
                    "home_visibilty": false,
                    "type": "SUB_CATEGORY",
                    "categories": []
                },
                {
                    "_id": "63c94f2367c312e7abf3e572",
                    "name": "Haldi Gallery",
                    "home_visibilty": false,
                    "type": "SUB_CATEGORY",
                    "categories": []
                },
                {
                    "_id": "63c94f4567c312e7abf3e580",
                    "name": "Mehendi",
                    "home_visibilty": false,
                    "type": "SUB_CATEGORY",
                    "categories": []
                },
                {
                    "_id": "63c94f8d67c312e7abf3e58e",
                    "name": "Sangeet",
                    "home_visibilty": false,
                    "type": "SUB_CATEGORY",
                    "categories": [
                        {
                            "_id": "63ca12d075b045799e205555",
                            "name": "demo12",
                            "home_visibilty": true,
                            "type": "CATEGORY"
                        }
                    ]
                }
            ]
        },
        {
            "_id": "63ca33c104cc045d66a8baa3",
            "name": "sdfdsf1231",
            "home_visibilty": true,
            "type": "PARENT_CATEGORY",
            "sub_cateogries": []
        }
    ]


    return (
        <Box sx={{

        }}>
            {/* <CssBaseline /> */}
            <AppBar component="nav" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                position='fixed' sx={{
                    boxShadow: 'none',
                    backgroundColor: getActiveHeader(scroll, hover) || headerColor ? 'hsla(0,0%,100%,.7)' : "transparent",
                    backdropFilter: getActiveHeader(scroll, hover) || headerColor ? 'blur(100px)' : 'none',
                    borderRadius: getActiveHeader(scroll, hover) ? "10px" : "0px",
                    top: getActiveHeader(scroll, hover) ? "8px" : "0px",
                    right: getActiveHeader(scroll, hover) ? "6px" : "0px",
                    width: getActiveHeader(scroll, hover) ? "99%" : "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    // left: getActiveHeader(scroll, hover) ? "8px" : "0px",
                    // right: getActiveHeader(scroll, hover) ? "8px" : "0px"
                    '@media (max-width: 768px)': {
                        borderRadius: "0px",
                        top: "0px",
                        right: "0px",
                        width: "100%",
                    }
                }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                        <Box sx={{ justifyContent: "space-between", display: { xs: 'flex', md: 'flex' } }}>
                            <Box>
                                <Button
                                    aria-describedby={id}
                                    onClick={handleClick}
                                    sx={{
                                        '&.MuiButton-root': {
                                            color: getActiveHeader(scroll, hover) ? "#2A3592" : '#fff',
                                            fontWeight: 700,
                                            textTransform: "capitalize",
                                            fontSize: "14px"
                                        },
                                        '& .MuiButton-endIcon': {
                                            marginLeft: "0px !important"
                                        }
                                    }}
                                    endIcon={<KeyboardArrowDownIcon />}
                                >
                                    Shop
                                </Button>
                                <CustomPopOver
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                >
                                    <Box sx={{ width: { md: "380px", sm: "100%" }, px: 2 }}>
                                        {!isActive?.active && collection && collection.map((item, index) => {
                                            if (index > 3) {
                                                return ""
                                            }
                                            return (
                                                <React.Fragment key={`collection-${index}`}>
                                                    <Typography sx={{ py: 2, fontSize: "24px", fontWeight: 600, letterSpacing: "-.02em", fontFamily: "Imported", cursor: "pointer" }}>
                                                        {item.name}
                                                    </Typography>
                                                    <Divider sx={{ borderWidth: "1px" }} />
                                                </React.Fragment>
                                            )
                                        })}
                                    </Box>
                                    <Box sx={{ width: { md: "380px", sm: "100%" }, px: 2 }}>
                                        {categories && categories.map((item, index) => {
                                            if (index > 1) {
                                                return ""
                                            }
                                            return (
                                                <React.Fragment key={`categories-${index}`}>
                                                    {!isActive?.active ?
                                                        <>
                                                            <Stack sx={{ cursor: "pointer" }} direction="row" alignItems="center" justifyContent="space-between" onClick={() => handleActive(index, true)}>
                                                                <Typography sx={{ py: 1.5, fontSize: "24px", fontWeight: 600, letterSpacing: "-.02em", fontFamily: "Imported" }}>
                                                                    {item.name}
                                                                </Typography>
                                                                <Typography>
                                                                    <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M9.80005 2.13184L20.147 12.4788L9.80005 22.8513" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                        <path d="M0.800049 12.5044H19.7267" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                    </svg>
                                                                </Typography>
                                                            </Stack>
                                                            <Divider sx={{ borderWidth: "1px" }} />
                                                        </>
                                                        :
                                                        <>
                                                            {isActive.index === index &&
                                                                <>
                                                                    <Stack direction="row" justifyContent="space-between" pb={0.5} pt={2}>
                                                                        <Button sx={{ fontSize: "14px !important", textTransform: "capitalize", fontWeight: 600 }} onClick={() => setIsActive({ active: false, index: "" })} color="inherit" startIcon={<KeyboardBackspaceIcon />}>
                                                                            Back
                                                                        </Button>
                                                                        <Button sx={{ fontSize: "14px !important", textTransform: "capitalize", fontWeight: 600 }} color="inherit" startIcon={<NorthEastIcon />}>
                                                                            Shop Kind
                                                                        </Button>
                                                                    </Stack>
                                                                    <Divider sx={{ borderWidth: "1px" }} />
                                                                </>
                                                            }
                                                            {isActive.index === index && item && item.sub_cateogries.length > 0 && item.sub_cateogries.map((subcategory, subIndex) => {
                                                                return (
                                                                    <Box sx={{ cursor: "pointer" }} key={`itemsub-${subIndex}`}>
                                                                        <Typography sx={{ py: 1.5, fontSize: "24px", fontWeight: 600, letterSpacing: "-.02em", fontFamily: "Imported" }}>
                                                                            {subcategory.name}
                                                                        </Typography>
                                                                        <Divider sx={{ borderWidth: "1px" }} />
                                                                    </Box>
                                                                )
                                                            })}
                                                        </>
                                                    }
                                                </React.Fragment>
                                            )
                                        })}
                                    </Box>
                                </CustomPopOver>
                            </Box>
                            <Button
                                aria-describedby={id}
                                // onClick={handleClick}
                                sx={{
                                    '&.MuiButton-root': {
                                        color: scroll ? "#2A3592" : '#fff',
                                        fontWeight: 700,
                                        textTransform: "capitalize",
                                        fontSize: "14px",
                                    },
                                    '@media (max-width: 1200px)': {
                                        display: 'none'
                                    }
                                }}
                            >
                                Club
                            </Button>
                            <Button
                                aria-describedby={id}
                                // onClick={handleClick}
                                sx={{
                                    '&.MuiButton-root': {
                                        color: scroll ? "#2A3592" : '#fff',
                                        fontWeight: 700,
                                        textTransform: "capitalize",
                                        fontSize: "14px"
                                    },
                                    '@media (max-width: 1200px)': {
                                        display: 'none'
                                    }
                                }}
                            >
                                Reviews
                            </Button>
                        </Box>
                        <Box>
                            <Link to="/" >
                                <svg width="84" height="36" viewBox="0 0 84 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_6112_2670)">
                                        <path d="M21.95 26.27L17.58 21.9V12.57C17.58 9.43 15.02 6.87 11.88 6.87C9.35997 6.87 7.20997 8.52 6.46997 10.79L3.89997 8.22L4.90997 7.21L3.69997 6L0.469971 9.23L1.67997 10.44L2.68997 9.43L6.18997 12.93V22.27C6.18997 25.41 8.74997 27.97 11.89 27.97C14.41 27.97 16.56 26.32 17.3 24.05L20.74 27.49L21.95 26.28V26.27ZM11.89 8.58C14.09 8.58 15.88 10.37 15.88 12.57V20.2L7.90997 12.23C8.07997 10.19 9.79997 8.58 11.89 8.58ZM11.89 26.25C9.68997 26.25 7.89997 24.46 7.89997 22.26V14.63L15.87 22.6C15.7 24.64 13.98 26.25 11.89 26.25Z" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} />
                                        <path d="M83.24 7.95996H34.16V9.66996H39V12.16C38.21 11.54 37.23 11.19 36.22 11.19C33.75 11.19 31.73 13.2 31.73 15.68V21.33C31.73 23.8 33.74 25.82 36.22 25.82C37.23 25.82 38.21 25.47 39 24.85V26.34C37.92 26.7 37.18 27.71 37.18 28.87V31.48H38.89V28.87C38.89 28.34 39.32 27.91 39.85 27.91C40.38 27.91 40.81 28.34 40.81 28.87V31.19C40.81 32.72 39.56 33.97 38.03 33.97C36.5 33.97 35.25 32.72 35.25 31.19V28.58H33.54V31.19C33.54 33.66 35.55 35.68 38.03 35.68C40.51 35.68 42.52 33.67 42.52 31.19V28.87C42.52 27.71 41.78 26.71 40.7 26.34V9.66996H51.58V12.54C50.79 11.92 49.81 11.57 48.8 11.57H47.8C46.6 11.57 45.47 12.04 44.63 12.88C43.78 13.73 43.32 14.86 43.32 16.05V23.14C43.32 24.61 44.52 25.81 45.99 25.81C47.46 25.81 48.66 24.61 48.66 23.14V16.05C48.66 14.84 47.84 13.81 46.73 13.48C47.07 13.34 47.43 13.27 47.8 13.27H48.8C50.33 13.27 51.58 14.52 51.58 16.05V27.33H53.29V9.66996H56.62V27.34H58.33V9.66996H68.93V12.16C68.14 11.54 67.16 11.19 66.15 11.19C63.68 11.19 61.66 13.2 61.66 15.68V21.33C61.66 23.8 63.67 25.82 66.15 25.82C67.16 25.82 68.14 25.47 68.93 24.85V27.34H70.64V9.66996H78.81V11.59C78.33 11.33 77.8 11.19 77.24 11.19C75.43 11.19 73.96 12.66 73.96 14.47V23.36C73.96 25.61 75.79 27.44 78.04 27.44C80.29 27.44 82.12 25.61 82.12 23.36V20.22H80.41V23.36C80.41 24.67 79.34 25.74 78.03 25.74C76.72 25.74 75.65 24.67 75.65 23.36V14.47C75.65 13.61 76.35 12.9 77.22 12.9C78.09 12.9 78.79 13.6 78.79 14.47V14.75H80.46L80.5 14.51V9.66996H83.5V7.95996H83.22H83.24ZM66.16 12.9C67.69 12.9 68.94 14.15 68.94 15.68V21.33C68.94 22.86 67.69 24.11 66.16 24.11C64.63 24.11 63.38 22.86 63.38 21.33V15.68C63.38 14.15 64.63 12.9 66.16 12.9ZM36.22 12.9C37.75 12.9 39 14.15 39 15.68V20.08L33.62 14.7C34.03 13.62 35.05 12.9 36.22 12.9ZM36.22 24.11C34.69 24.11 33.44 22.86 33.44 21.33V16.93L38.82 22.31C38.41 23.39 37.39 24.11 36.22 24.11ZM46.96 23.15C46.96 23.68 46.53 24.11 46 24.11C45.47 24.11 45.04 23.68 45.04 23.15V16.06C45.04 15.53 45.47 15.1 46 15.1C46.53 15.1 46.96 15.53 46.96 16.06V23.15Z" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6112_2670">
                                            <rect width="83.06" height="29.68" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.469971 6)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </Box>
                        <Stack direction="row" alignItems="center">
                            <Box>
                                <IconButton
                                    aria-describedby={accountId}
                                    sx={{
                                        '@media (max-width: 768px)': {
                                            display: 'none'
                                        }
                                    }}
                                    onClick={handleAccountClick}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_6128_2675)">
                                            <path d="M12.52 23.9902C18.678 23.9902 23.67 18.9982 23.67 12.8402C23.67 6.68221 18.678 1.69019 12.52 1.69019C6.36202 1.69019 1.37 6.68221 1.37 12.8402C1.37 18.9982 6.36202 23.9902 12.52 23.9902Z" stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                            <path d="M12.52 14.7001C14.6905 14.7001 16.45 12.9406 16.45 10.7701C16.45 8.59961 14.6905 6.84009 12.52 6.84009C10.3495 6.84009 8.59003 8.59961 8.59003 10.7701C8.59003 12.9406 10.3495 14.7001 12.52 14.7001Z" stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                            <path d="M18.27 22.3802C18.43 21.8502 18.51 21.2802 18.51 20.7002C18.51 17.3902 15.83 14.7102 12.52 14.7102C9.21003 14.7102 6.53003 17.3902 6.53003 20.7002C6.53003 21.2802 6.62003 21.8502 6.77003 22.3802" stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_6128_2675">
                                                <rect width="24" height="24" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.52002 0.840088)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </IconButton>
                                <CustomPopOver
                                    id={accountId}
                                    open={account}
                                    anchorEl={accountPopup}
                                    onClose={handleAccountClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    sx={{ borderRadius: "16px!important" }}
                                >
                                    <Box sx={{ p: 2 }} className="login_body">
                                        {otpverify ? null : (
                                            <div className="login_wrap">
                                                <div className="login_title_wrap">
                                                    <h3>Login to your Account</h3>
                                                    <h4>See your credits, orders and saved address</h4>
                                                </div>
                                                <div className="login_input_wrap">
                                                    <div className="login_input_inner">
                                                        <input type="text" placeholder="Phone Number" />
                                                        <span>+91</span>
                                                    </div>
                                                    <button type="button" onClick={() => setOtpverify(true)}>
                                                        <span>Send OTP</span>
                                                        <svg
                                                            width="9"
                                                            height="10"
                                                            viewBox="0 0 9 10"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_2143_4306)">
                                                                <path
                                                                    d="M3.75977 0.955078L7.79977 4.99508L3.75977 9.04508"
                                                                    stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"}
                                                                    strokeWidth="1.7"
                                                                    strokeMiterlimit="10"
                                                                />
                                                                <path
                                                                    d="M0.410156 5.00488H7.80016"
                                                                    stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"}
                                                                    strokeWidth="1.7"
                                                                    strokeMiterlimit="10"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2143_4306">
                                                                    <rect
                                                                        width="8.59"
                                                                        height="9.29"
                                                                        fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"}
                                                                        transform="translate(0.410156 0.35498)"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="login_info_wrap">
                                                    <p>If you don’t have an account, we’ll create one for you</p>
                                                </div>
                                            </div>
                                        )}

                                        {otpverify ? (
                                            <div className="login_wrap">
                                                <div className="login_title_wrap">
                                                    <h3>One-time Password</h3>
                                                    <h4>
                                                        Enter the OTP we sent to <span>+91 91283 61521</span>
                                                    </h4>
                                                </div>
                                                <div className="login_input_wrap">
                                                    <div className="login_input_inner">
                                                        <ReactInputVerificationCode onChange={console.log} />
                                                    </div>
                                                    <button type="button" onClick={handleClose}>
                                                        <span>Login</span>
                                                        <svg
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_2143_4277)">
                                                                <path
                                                                    d="M11.9996 23.1501C18.1576 23.1501 23.1496 18.1581 23.1496 12.0001C23.1496 5.84212 18.1576 0.850098 11.9996 0.850098C5.84163 0.850098 0.849609 5.84212 0.849609 12.0001C0.849609 18.1581 5.84163 23.1501 11.9996 23.1501Z"
                                                                    stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"}
                                                                    strokeWidth="1.7"
                                                                    strokeMiterlimit="10"
                                                                />
                                                                <path
                                                                    d="M12.0003 13.86C14.1708 13.86 15.9303 12.1005 15.9303 9.93C15.9303 7.75952 14.1708 6 12.0003 6C9.82983 6 8.07031 7.75952 8.07031 9.93C8.07031 12.1005 9.82983 13.86 12.0003 13.86Z"
                                                                    stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"}
                                                                    strokeWidth="1.7"
                                                                    strokeMiterlimit="10"
                                                                />
                                                                <path
                                                                    d="M17.7498 21.5401C17.9098 21.0101 17.9898 20.4401 17.9898 19.8601C17.9898 16.5501 15.3098 13.8701 11.9998 13.8701C8.68977 13.8701 6.00977 16.5501 6.00977 19.8601C6.00977 20.4401 6.09977 21.0101 6.24977 21.5401"
                                                                    stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"}
                                                                    strokeWidth="1.7"
                                                                    strokeMiterlimit="10"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2143_4277">
                                                                    <rect width="24" height="24" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="resend_otp_wrap">
                                                    <button
                                                        className="change_num_btn"
                                                        onClick={() => setOtpverify(false)}
                                                    >
                                                        <svg
                                                            width="9"
                                                            height="10"
                                                            viewBox="0 0 9 10"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_2143_4283)">
                                                                <path
                                                                    d="M5.24023 9.04492L1.20023 5.00492L5.24023 0.954923"
                                                                    stroke="#2A3592"
                                                                    strokeWidth="1.7"
                                                                    strokeMiterlimit="10"
                                                                />
                                                                <path
                                                                    d="M8.58984 4.99512L1.19984 4.99512"
                                                                    stroke="#2A3592"
                                                                    strokeWidth="1.7"
                                                                    strokeMiterlimit="10"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2143_4283">
                                                                    <rect
                                                                        width="8.59"
                                                                        height="9.29"
                                                                        fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"}
                                                                        transform="translate(8.58984 9.64502) rotate(-180)"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        <span>Change number</span>
                                                    </button>
                                                    <button className="resend_btn">
                                                        <span>Resend OTP</span>
                                                        <svg
                                                            width="9"
                                                            height="10"
                                                            viewBox="0 0 9 10"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_2143_4289)">
                                                                <path
                                                                    d="M8.15039 0.514893V4.51489H4.15039"
                                                                    stroke="#2A3592"
                                                                    strokeWidth="1.7"
                                                                    strokeMiterlimit="10"
                                                                />
                                                                <path
                                                                    d="M8.15016 4.51501L5.02016 1.38501H4.54016C2.53016 1.38501 0.910156 3.00501 0.910156 5.00501C0.910156 7.00501 2.53016 8.63501 4.54016 8.63501C5.54016 8.63501 6.45016 8.22501 7.10016 7.57501"
                                                                    stroke="#2A3592"
                                                                    strokeWidth="1.7"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2143_4289">
                                                                    <rect
                                                                        width="8.94"
                                                                        height="8.97"
                                                                        fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"}
                                                                        transform="translate(0.0605469 0.514893)"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        ) : null}
                                    </Box>
                                </CustomPopOver>
                            </Box>
                            <IconButton
                                aria-describedby={calendarId}
                                sx={{
                                    '@media (max-width: 768px)': {
                                        display: 'none'
                                    }
                                }}
                                onClick={handleCalendarClick}>
                                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_6112_2679)">
                                        <path d="M22.15 3.33496H1.37V22.185H22.15V3.33496Z" stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                        <path d="M15.23 8.33496V22.185" stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                        <path d="M8.30005 8.33496V22.185" stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                        <path d="M22.15 15.2651H1.38" stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                        <path d="M22.15 8.33496H1.38" stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                        <path d="M5.76001 6.13502V0.64502" stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                        <path d="M17.76 6.13502V0.64502" stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6112_2679">
                                            <rect width="22.48" height="22.39" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.52002 0.64502)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </IconButton>
                            <CustomPopOver
                                id={calendarId}
                                open={calendar}
                                anchorEl={calendarPopup}
                                onClose={handleCalendarClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                sx={{ borderRadius: "16px!important" }}
                            >
                                <Box sx={{ p: 2 }} className="login_body">
                                    <div className="cart_inner calander_wrap position-relative">
                                        <div className="date_wrap"><DayPicker showOutsideDays fixedWeeks mode="single" onSelect={setSelectedDay} selected={selectedDay} /></div>
                                        <div className="cal_news_wrap">
                                            <div className="cal_news">
                                                <div className="cla_news_title">
                                                    <div className="cla_news_left">
                                                        <span style={{ backgroundColor: "#FF6C6C" }}></span>
                                                        <p style={{ color: "#FF6C6C" }}>Workshop</p>
                                                    </div>
                                                    <span>12:45 pm</span>
                                                </div>
                                                <div className="workshop_title">
                                                    <h3>Everyday Makeup</h3>
                                                    <p>Learn how to apply subtle make up in under 10 minutes. Follow this routine every day.</p>
                                                </div>
                                                <div className="join_wrap">
                                                    <p>with Divya Sancheti</p>
                                                    <div className="join_btn_wrap">
                                                        <p>2 hrs</p>
                                                        <button className="join_btn">Join</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="cal_news">
                                                <div className="cla_news_title">
                                                    <div className="cla_news_left">
                                                        <span style={{ backgroundColor: "#F2C34B" }}></span>
                                                        <p style={{ color: "#F2C34B" }}>Tutorial</p>
                                                    </div>
                                                    <span>12:45 pm</span>
                                                </div>
                                                <div className="workshop_title">
                                                    <h3>Personal Styling for Festivals</h3>
                                                    <p>Learn how to apply subtle make up in under 10 minutes. Follow this routine every day.</p>
                                                </div>
                                                <div className="join_wrap">
                                                    <p>with Divya Sancheti</p>
                                                    <div className="join_btn_wrap">
                                                        <p>2 hrs</p>
                                                        <button className="join_btn">Join</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="cal_news">
                                                <div className="cla_news_title">
                                                    <div className="cla_news_left">
                                                        <span style={{ backgroundColor: "#FF6C6C" }}></span>
                                                        <p style={{ color: "#FF6C6C" }}>Workshop</p>
                                                    </div>
                                                    <span>12:45 pm</span>
                                                </div>
                                                <div className="workshop_title">
                                                    <h3>Everyday Makeup</h3>
                                                    <p>Learn how to apply subtle make up in under 10 minutes. Follow this routine every day.</p>
                                                </div>
                                                <div className="join_wrap">
                                                    <p>with Divya Sancheti</p>
                                                    <div className="join_btn_wrap">
                                                        <p>2 hrs</p>
                                                        <button className="join_btn">Join</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="date_sync">
                                            <div className="resend_otp_wrap">
                                                <button className="resend_btn">
                                                    <span>3rd July 2022</span>
                                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_2146_6797)">
                                                            <path d="M0.599609 1.43018H7.98961V8.82018" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            <path d="M0.599609 8.82018L7.98961 1.43018" stroke="#2A3592" strokeWidth="1.7" strokeMiterlimit="10" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_2146_6797">
                                                                <rect width="8.84" height="8.84" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0 0.580078)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </button>
                                                <button className="resend_btn">
                                                    <span>Sync Calendar</span>
                                                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_2146_6803)">
                                                            <path d="M15.1499 0.5V7.03H8.62988" stroke="#2A3990" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            <path d="M15.1507 7.02988L9.76074 1.62988H8.79074C6.45074 1.62988 4.36074 2.72988 3.01074 4.43988" stroke="#2A3990" strokeWidth="1.7" strokeLinejoin="round" />
                                                            <path d="M1.45996 17.5V10.97H7.98996" stroke="#2A3990" strokeWidth="1.7" strokeMiterlimit="10" />
                                                            <path d="M1.45996 10.97L6.84996 16.36H7.81996C10.16 16.36 12.25 15.26 13.6 13.55" stroke="#2A3990" strokeWidth="1.7" strokeLinejoin="round" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_2146_6803">
                                                                <rect width="15.39" height="17" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.610352 0.5)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Box>
                            </CustomPopOver>
                            <Box>
                                <Button
                                    aria-describedby={cart}
                                    onClick={handleCartClick}
                                    endIcon={
                                        <Box sx={{ borderRadius: "50%", width: "20px", height: "20px", background: getActiveHeader(scroll, hover) ? "#2A3592" : "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <Typography sx={{ fontSize: "10px", fontWeight: 700, color: getActiveHeader(scroll, hover) ? "#fff" : "#000000" }}>3</Typography>
                                        </Box>
                                    }>
                                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_6112_2688)">
                                            <path d="M20.1199 9.34985H3.14993L1.23993 22.7399H22.0199L20.1199 9.34985Z" stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                            <path d="M13.1299 9.35019V4.19019C13.1299 2.53019 11.7899 1.19019 10.1299 1.19019C8.46994 1.19019 7.12994 2.53019 7.12994 4.19019V9.36019" stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                            <path d="M16.53 9.34995V4.18995C16.53 3.29995 16.14 2.49995 15.53 1.94995" stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" strokeLinecap="round" />
                                            <path d="M17.63 22.7399L15.72 9.34985" stroke={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_6112_2688">
                                                <rect width="23" height="23" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0 0.340088)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Button>
                                <CustomPopOver
                                    id={cartId}
                                    open={cart}
                                    anchorEl={cartPopup}
                                    onClose={handleCartClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    sx={{ borderRadius: "16px!important" }}
                                >
                                    <Box sx={{ p: 2 }} className="login_body">
                                        <div className="cart_inner">
                                            <Tabs
                                                defaultActiveKey="cart"
                                                id="uncontrolled-tab-example"
                                                className=""
                                            >
                                                <Tab eventKey="cart" title="Cart">
                                                    <div className='cart_wrapper'>
                                                        <div className='cart_information'>
                                                            <div className="card_img">
                                                                <Link to="/product" onClick={() => setCartOpen(false)} >
                                                                    <img src={cart_1} alt="cart" />
                                                                </Link>
                                                            </div>
                                                            <div className="cart_product_info">
                                                                <h3>Synthetic Floral Print Sari</h3>
                                                                <p>Lemon Yellow  •  Medium</p>

                                                                <div className='quantiy_wrapper'>
                                                                    <p>Qty</p>
                                                                    <div className='quantiy_inner'>
                                                                        <button type='button' className='common_btn'>
                                                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <g clipPath="url(#clip0_160_1440)">
                                                                                    <path d="M8.14 5H0" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_160_1440">
                                                                                        <rect width="8.14" height="8.14" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0 0.929932)" />
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>
                                                                        </button>
                                                                        <input type="text" placeholder='1' defaultValue={1} />
                                                                        <button type='button' className='common_btn'>
                                                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <g clipPath="url(#clip0_160_1444)">
                                                                                    <path d="M4.20966 0.929932V9.06993" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                                    <path d="M8.27965 5H0.139648" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_160_1444">
                                                                                        <rect width="8.14" height="8.14" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.139648 0.929932)" />
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>

                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className='remove_cart_block'>
                                                                    <p>₹4,500 </p>
                                                                    <button type='button' className='remove_btn'>
                                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <g clipPath="url(#clip0_160_1450)">
                                                                                <path d="M3.35999 1.0249L7.39999 5.0649L3.35999 9.1149" stroke="#DA4949" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                                <path d="M0.0100098 5.07471H7.40001" stroke="#DA4949" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                                <path d="M8.15002 0.514893V9.51489" stroke="#DA4949" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_160_1450">
                                                                                    <rect width="8.99" height="9.29" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.0100098 0.424805)" />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>

                                                                        <span>Remove</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='cart_information'>
                                                            <div className="card_img">
                                                                <Link to="/product" onClick={() => setCartOpen(false)}>
                                                                    <img src={cart_2} alt="cart" />
                                                                </Link>
                                                            </div>
                                                            <div className="cart_product_info">
                                                                <h3>Pink Floral Sari & Jacket</h3>
                                                                <p>Medium</p>

                                                                <div className='quantiy_wrapper'>
                                                                    <p>Qty</p>
                                                                    <div className='quantiy_inner'>
                                                                        <button type='button' className='common_btn'>
                                                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <g clipPath="url(#clip0_160_1440)">
                                                                                    <path d="M8.14 5H0" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_160_1440">
                                                                                        <rect width="8.14" height="8.14" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0 0.929932)" />
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>
                                                                        </button>
                                                                        <input type="text" placeholder='1' defaultValue={1} />
                                                                        <button type='button' className='common_btn'>
                                                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <g clipPath="url(#clip0_160_1444)">
                                                                                    <path d="M4.20966 0.929932V9.06993" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                                    <path d="M8.27965 5H0.139648" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_160_1444">
                                                                                        <rect width="8.14" height="8.14" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.139648 0.929932)" />
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>

                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className='remove_cart_block'>
                                                                    <p>₹10,200 <span style={{ fontSize: "12px", marginLeft: "12px" }}><del>₹14,200</del></span> </p>
                                                                    <button type='button' className='remove_btn'>
                                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <g clipPath="url(#clip0_160_1450)">
                                                                                <path d="M3.35999 1.0249L7.39999 5.0649L3.35999 9.1149" stroke="#DA4949" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                                <path d="M0.0100098 5.07471H7.40001" stroke="#DA4949" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                                <path d="M8.15002 0.514893V9.51489" stroke="#DA4949" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_160_1450">
                                                                                    <rect width="8.99" height="9.29" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.0100098 0.424805)" />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>

                                                                        <span>Remove</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='cart_information'>
                                                            <div className="card_img">
                                                                <Link to="/product" onClick={() => setCartOpen(false)}>
                                                                    <img src={cart_3} alt="cart" />
                                                                </Link>
                                                            </div>
                                                            <div className="cart_product_info">
                                                                <h3>Trenchcoat Suit</h3>
                                                                <p>Maroon  •  Medium</p>

                                                                <div className='quantiy_wrapper'>
                                                                    <p>Qty</p>
                                                                    <div className='quantiy_inner'>
                                                                        <button type='button' className='common_btn'>
                                                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <g clipPath="url(#clip0_160_1440)">
                                                                                    <path d="M8.14 5H0" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_160_1440">
                                                                                        <rect width="8.14" height="8.14" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0 0.929932)" />
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>
                                                                        </button>
                                                                        <input type="text" placeholder='1' defaultValue={1} />
                                                                        <button type='button' className='common_btn'>
                                                                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <g clipPath="url(#clip0_160_1444)">
                                                                                    <path d="M4.20966 0.929932V9.06993" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                                    <path d="M8.27965 5H0.139648" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_160_1444">
                                                                                        <rect width="8.14" height="8.14" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.139648 0.929932)" />
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>

                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className='remove_cart_block'>
                                                                    <p>₹6,900 </p>
                                                                    <button type='button' className='remove_btn'>
                                                                        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <g clipPath="url(#clip0_160_1450)">
                                                                                <path d="M3.35999 1.0249L7.39999 5.0649L3.35999 9.1149" stroke="#DA4949" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                                <path d="M0.0100098 5.07471H7.40001" stroke="#DA4949" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                                <path d="M8.15002 0.514893V9.51489" stroke="#DA4949" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_160_1450">
                                                                                    <rect width="8.99" height="9.29" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.0100098 0.424805)" />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>

                                                                        <span>Remove</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link to="/checkout" onClick={() => setCartOpen(false)}>
                                                        <button type="button" className="checkout_btn">
                                                            <span>Checkout</span>
                                                            <span><s>₹25,600</s>₹21,600</span>
                                                        </button>
                                                    </Link>
                                                </Tab>
                                                <Tab eventKey="saved" title="Saved">
                                                    <div className='saved_wrapper'>
                                                        <div className='row'>
                                                            <div className='col-6'>
                                                                <div className='saved_img_information'>
                                                                    <div className="save_item_img">
                                                                        <Link to="/product" onClick={() => setCartOpen(false)}>
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
                                                                                        <rect width="8.14" height="8.14" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.859985 0.930054)" />
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
                                                                        <Link to="/product" onClick={() => setCartOpen(false)}>
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
                                                                                        <rect width="8.14" height="8.14" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.859985 0.930054)" />
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
                                                                        <Link to="/product" onClick={() => setCartOpen(false)}>
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
                                                                                        <rect width="8.14" height="8.14" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.859985 0.930054)" />
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
                                                                        <Link to="/product" onClick={() => setCartOpen(false)}>
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
                                                                                        <rect width="8.14" height="8.14" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.859985 0.930054)" />
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
                                                                        <Link to="/product" onClick={() => setCartOpen(false)}>
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
                                                                                        <rect width="8.14" height="8.14" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.859985 0.930054)" />
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
                                                                        <Link to="/product" onClick={() => setCartOpen(false)}>
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
                                                                                        <rect width="8.14" height="8.14" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.859985 0.930054)" />
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
                                                                        <Link to="/product" onClick={() => setCartOpen(false)}>
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
                                                                                        <rect width="8.14" height="8.14" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.859985 0.930054)" />
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
                                                                        <Link to="/product" onClick={() => setCartOpen(false)}>
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
                                                                                        <rect width="8.14" height="8.14" fill={getActiveHeader(scroll, hover) ? "#2A3592" : "#fff"} transform="translate(0.859985 0.930054)" />
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
                                    </Box>
                                </CustomPopOver>
                            </Box>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
export default ResponsiveAppBar;
