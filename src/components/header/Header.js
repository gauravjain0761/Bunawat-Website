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
import { Link, useHistory, useLocation } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NorthEastIcon from '@mui/icons-material/NorthEast';
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
import { useGetPokemonByNameQuery, useGetShopMenuDataQuery, useOtpMatchMutation, useSendOtpMutation } from '../../services/api';
import Storage from '../../services/storage';
import { STORAGE_KEY } from '../../constant/storage';
import Login from './login';
import Cart from './cart';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
    const { data } = useGetShopMenuDataQuery()

    const [scroll, setScroll] = React.useState(false);
    const [hover, setHover] = React.useState(false);
    const location = useLocation()
    const history = useHistory();
    const [headerColor, setHeaderColor] = React.useState(false);
    const [selectedDay, setSelectedDay] = React.useState();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [accountPopup, setAccountPopup] = React.useState(null);
    const [calendarPopup, setCalendarPopup] = React.useState(null);
    const [cartPopup, setCartPopup] = React.useState(null);
    const [menuData, setMenuData] = React.useState({
        collection: [],
        categories: [],
        level: '1',
        selectedCategoriesIndex: -1,
        selectedSubCategoriesIndex: -1
    });

    const [isActive, setIsActive] = React.useState({
        active: false,
        index: ""
    })

    const getCateogries = (categories, id) => {
        if (categories.length > 0) {
            return categories.map(list => {
                return {
                    ...list,
                    parentId: id
                }
            })
        } else {
            return []
        }
    }

    const getSubCateogries = (sub_cateogries, id) => {
        if (sub_cateogries.length > 0) {
            return sub_cateogries.map(list => {
                return {
                    ...list,
                    categories: getCateogries(list?.categories ?? [], list?._id),
                    parentId: id
                }
            })
        } else {
            return []
        }
    }

    React.useEffect(() => {
        let tempData = {
            collection: data?.collections ?? [],
            categories: data?.categories ?? []
        }
        let tempCollection = [...tempData.collection]
        let tempCategories = [...tempData.categories]
        tempCollection = tempCollection.slice(0, 4)
        tempCategories = tempCategories.slice(0, 2).map(list => {
            return {
                ...list,
                sub_cateogries: getSubCateogries(list?.sub_cateogries ?? [], list?._id),
                parentId: list?._id
            }
        })
        tempData = {
            collection: tempCollection,
            categories: tempCategories,
            level: '1'
        }
        setMenuData(tempData)
    }, [data]);

    const getActiveHeader = (scroll, hover, headerColor) => {
        if (scroll) {
            return true
        }
        if (headerColor) {
            return true
        }
        // else {
        //     if (hover) {
        //         return true
        //     }
        // }
        return false
    }

    const onChagewalletbar = (pathname) => {
        var mypath = ["/allProduct", "/product", "/checkout", "/orderConfirmation", "/userProfile", "/reviews", "/404", "/returns", "/sizeGuide", "/paymentOptions"].some(x => pathname.startsWith(x))
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
        onChagewalletbar(location.pathname);
    }, [location]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setIsActive({ active: false, index: "" });
    };
    const handleActive = (id, index, level, change = true, sub = false) => {
        if (change) {
            setMenuData({
                ...menuData,
                selectedCategoriesIndex: sub ? menuData.selectedCategoriesIndex : index,
                selectedSubCategoriesIndex: sub ? index : -1,
                level
            })
        } else {
            handleClose();
            setMenuData({
                ...menuData,
                selectedCategoriesIndex: -1,
                selectedSubCategoriesIndex: -1,
                level: '1'
            })
            history.push(`/allProduct/${id}`)
        }
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

    return (
        <Box sx={{

        }}>
            {/* <CssBaseline /> */}
            <AppBar component="nav" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                position='fixed' sx={{
                    boxShadow: 'none',
                    backgroundColor: getActiveHeader(scroll, hover, headerColor) || headerColor ? 'hsla(0,0%,100%,.7)' : "transparent",
                    backdropFilter: getActiveHeader(scroll, hover, headerColor) || headerColor ? 'blur(100px)' : 'none',
                    borderRadius: getActiveHeader(scroll, hover, headerColor) ? "4px" : "0px",
                    top: getActiveHeader(scroll, hover, headerColor) ? "8px" : "8px",
                    right: getActiveHeader(scroll, hover, headerColor) ? "6px" : "6px",
                    width: getActiveHeader(scroll, hover, headerColor) ? "99%" : "99%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    // left: getActiveHeader(scroll, hover,headerColor) ? "8px" : "0px",
                    // right: getActiveHeader(scroll, hover,headerColor) ? "8px" : "0px"
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
                                            color: getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : '#fff',
                                            fontWeight: 600,
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
                                        {menuData.level == '1' && menuData.collection.map((item, index) => {
                                            return (
                                                <React.Fragment key={`collection-${index}`} >
                                                    <Typography onClick={() => {
                                                        history.push("/allProduct");
                                                        handleClose();
                                                    }} sx={{ py: 2, fontSize: "24px", fontWeight: 600, letterSpacing: "-.02em", fontFamily: "Imported", cursor: "pointer" }}>
                                                        {item.name}
                                                    </Typography>
                                                    <Divider sx={{ borderWidth: "1px" }} />
                                                </React.Fragment>
                                            )
                                        })}
                                    </Box>
                                    <Box sx={{ width: { md: "380px", sm: "100%" }, px: 2 }}>
                                        {menuData.categories.map((item, index) => {
                                            return (
                                                <React.Fragment key={`categories-${index}`}>
                                                    {menuData.level == '1' &&
                                                        <>
                                                            <Stack sx={{ cursor: "pointer" }} direction="row" alignItems="center" justifyContent="space-between" onClick={() => handleActive(item?.parentId, index, '2', item.sub_cateogries.length > 0)}>
                                                                <Typography sx={{ py: 1.5, fontSize: "24px", fontWeight: 600, letterSpacing: "-.02em", fontFamily: "Imported" }}>
                                                                    {item.name}
                                                                </Typography>
                                                                {item.sub_cateogries.length > 0 &&
                                                                    <Typography>
                                                                        <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M9.80005 2.13184L20.147 12.4788L9.80005 22.8513" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                            <path d="M0.800049 12.5044H19.7267" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                        </svg>
                                                                    </Typography>
                                                                }
                                                            </Stack>
                                                            <Divider sx={{ borderWidth: "1px" }} />
                                                        </>
                                                    }
                                                    {(menuData.level == '2' || menuData.level == '3') &&
                                                        <>
                                                            {(index == menuData.selectedCategoriesIndex && menuData.level == '2') &&
                                                                <>
                                                                    <Stack direction="row" justifyContent="space-between" pb={0.5} pt={2}>
                                                                        <Button sx={{ fontSize: "14px !important", textTransform: "capitalize", fontWeight: 600 }} onClick={() => handleActive(item?.parentId, -1, '1')} color="inherit" startIcon={<KeyboardBackspaceIcon />}>
                                                                            Back2
                                                                        </Button>
                                                                        <Button sx={{ fontSize: "14px !important", textTransform: "capitalize", fontWeight: 600 }} color="inherit" startIcon={<NorthEastIcon />}>
                                                                            Shop Kind
                                                                        </Button>
                                                                    </Stack>
                                                                    <Divider sx={{ borderWidth: "1px" }} />
                                                                </>
                                                            }
                                                            {index == menuData.selectedCategoriesIndex && item.sub_cateogries.map((subcategory, subIndex) => {
                                                                return (
                                                                    <>
                                                                        {menuData.level == '2' &&
                                                                            <Box sx={{ cursor: "pointer" }} key={`itemsub-${subIndex}`}>
                                                                                <Stack sx={{ cursor: "pointer" }} direction="row" alignItems="center" justifyContent="space-between" onClick={() => handleActive(subcategory?.parentId, subIndex, '3', subcategory.categories.length > 0, true)}>
                                                                                    <Typography sx={{ py: 1.5, fontSize: "24px", fontWeight: 600, letterSpacing: "-.02em", fontFamily: "Imported" }}>
                                                                                        {subcategory.name}
                                                                                    </Typography>
                                                                                    {subcategory.categories.length > 0 &&
                                                                                        <Typography>
                                                                                            <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                <path d="M9.80005 2.13184L20.147 12.4788L9.80005 22.8513" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                                                <path d="M0.800049 12.5044H19.7267" stroke="black" strokeWidth="1.7" strokeMiterlimit="10" />
                                                                                            </svg>
                                                                                        </Typography>
                                                                                    }
                                                                                </Stack>
                                                                                <Divider sx={{ borderWidth: "1px" }} />
                                                                            </Box>
                                                                        }
                                                                        {(subIndex == menuData.selectedSubCategoriesIndex && menuData.level == '3') &&
                                                                            <>
                                                                                <Stack direction="row" justifyContent="space-between" pb={0.5} pt={2}>
                                                                                    <Button sx={{ fontSize: "14px !important", textTransform: "capitalize", fontWeight: 600 }} onClick={() => handleActive(subcategory?.parentId, menuData.selectedCategoriesIndex, '2')} color="inherit" startIcon={<KeyboardBackspaceIcon />}>
                                                                                        Back3
                                                                                    </Button>
                                                                                    <Button sx={{ fontSize: "14px !important", textTransform: "capitalize", fontWeight: 600 }} color="inherit" startIcon={<NorthEastIcon />}>
                                                                                        Shop Kind
                                                                                    </Button>
                                                                                </Stack>
                                                                                <Divider sx={{ borderWidth: "1px" }} />
                                                                                {subcategory.categories.map((category, catIndex) => {
                                                                                    return (
                                                                                        <Box sx={{ cursor: "pointer" }} key={`itemsub-${catIndex}`}>
                                                                                            <Typography onClick={() => {
                                                                                                handleActive(category?.parentId, menuData.selectedCategoriesIndex, '3', false)
                                                                                            }} sx={{ py: 1.5, fontSize: "24px", fontWeight: 600, letterSpacing: "-.02em", fontFamily: "Imported" }}>
                                                                                                {category.name}
                                                                                            </Typography>
                                                                                            <Divider sx={{ borderWidth: "1px" }} />
                                                                                        </Box>
                                                                                    )
                                                                                })}
                                                                            </>
                                                                        }
                                                                    </>
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
                            <Link to="/clubHome">
                            <Button
                                aria-describedby={id}
                                // onClick={handleClick}
                                sx={{
                                    '&.MuiButton-root': {
                                        color: getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : '#fff',
                                        fontWeight: 600,
                                        textTransform: "capitalize",
                                        fontSize: "14px",
                                        marginLeft: "13px",
                                        marginRight: "13px",
                                    },
                                    '@media (max-width: 1200px)': {
                                        display: 'none'
                                    }
                                }}
                            >
                                Club
                            </Button>
                            </Link>
                            <Link to="/reviews">
                            <Button
                                aria-describedby={id}
                                // onClick={handleClick}
                                sx={{
                                    '&.MuiButton-root': {
                                        color: getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : '#fff',
                                        fontWeight: 600,
                                        textTransform: "capitalize",
                                        fontSize: "14px",
                                        marginLeft: "13px",
                                        marginRight: "13px",
                                    },
                                    '@media (max-width: 1200px)': {
                                        display: 'none'
                                    }
                                }}
                            >
                                Reviews
                            </Button>
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" >
                                <svg width="84" height="36" viewBox="0 0 84 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_6112_2670)">
                                        <path d="M21.95 26.27L17.58 21.9V12.57C17.58 9.43 15.02 6.87 11.88 6.87C9.35997 6.87 7.20997 8.52 6.46997 10.79L3.89997 8.22L4.90997 7.21L3.69997 6L0.469971 9.23L1.67997 10.44L2.68997 9.43L6.18997 12.93V22.27C6.18997 25.41 8.74997 27.97 11.89 27.97C14.41 27.97 16.56 26.32 17.3 24.05L20.74 27.49L21.95 26.28V26.27ZM11.89 8.58C14.09 8.58 15.88 10.37 15.88 12.57V20.2L7.90997 12.23C8.07997 10.19 9.79997 8.58 11.89 8.58ZM11.89 26.25C9.68997 26.25 7.89997 24.46 7.89997 22.26V14.63L15.87 22.6C15.7 24.64 13.98 26.25 11.89 26.25Z" fill={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} />
                                        <path d="M83.24 7.95996H34.16V9.66996H39V12.16C38.21 11.54 37.23 11.19 36.22 11.19C33.75 11.19 31.73 13.2 31.73 15.68V21.33C31.73 23.8 33.74 25.82 36.22 25.82C37.23 25.82 38.21 25.47 39 24.85V26.34C37.92 26.7 37.18 27.71 37.18 28.87V31.48H38.89V28.87C38.89 28.34 39.32 27.91 39.85 27.91C40.38 27.91 40.81 28.34 40.81 28.87V31.19C40.81 32.72 39.56 33.97 38.03 33.97C36.5 33.97 35.25 32.72 35.25 31.19V28.58H33.54V31.19C33.54 33.66 35.55 35.68 38.03 35.68C40.51 35.68 42.52 33.67 42.52 31.19V28.87C42.52 27.71 41.78 26.71 40.7 26.34V9.66996H51.58V12.54C50.79 11.92 49.81 11.57 48.8 11.57H47.8C46.6 11.57 45.47 12.04 44.63 12.88C43.78 13.73 43.32 14.86 43.32 16.05V23.14C43.32 24.61 44.52 25.81 45.99 25.81C47.46 25.81 48.66 24.61 48.66 23.14V16.05C48.66 14.84 47.84 13.81 46.73 13.48C47.07 13.34 47.43 13.27 47.8 13.27H48.8C50.33 13.27 51.58 14.52 51.58 16.05V27.33H53.29V9.66996H56.62V27.34H58.33V9.66996H68.93V12.16C68.14 11.54 67.16 11.19 66.15 11.19C63.68 11.19 61.66 13.2 61.66 15.68V21.33C61.66 23.8 63.67 25.82 66.15 25.82C67.16 25.82 68.14 25.47 68.93 24.85V27.34H70.64V9.66996H78.81V11.59C78.33 11.33 77.8 11.19 77.24 11.19C75.43 11.19 73.96 12.66 73.96 14.47V23.36C73.96 25.61 75.79 27.44 78.04 27.44C80.29 27.44 82.12 25.61 82.12 23.36V20.22H80.41V23.36C80.41 24.67 79.34 25.74 78.03 25.74C76.72 25.74 75.65 24.67 75.65 23.36V14.47C75.65 13.61 76.35 12.9 77.22 12.9C78.09 12.9 78.79 13.6 78.79 14.47V14.75H80.46L80.5 14.51V9.66996H83.5V7.95996H83.22H83.24ZM66.16 12.9C67.69 12.9 68.94 14.15 68.94 15.68V21.33C68.94 22.86 67.69 24.11 66.16 24.11C64.63 24.11 63.38 22.86 63.38 21.33V15.68C63.38 14.15 64.63 12.9 66.16 12.9ZM36.22 12.9C37.75 12.9 39 14.15 39 15.68V20.08L33.62 14.7C34.03 13.62 35.05 12.9 36.22 12.9ZM36.22 24.11C34.69 24.11 33.44 22.86 33.44 21.33V16.93L38.82 22.31C38.41 23.39 37.39 24.11 36.22 24.11ZM46.96 23.15C46.96 23.68 46.53 24.11 46 24.11C45.47 24.11 45.04 23.68 45.04 23.15V16.06C45.04 15.53 45.47 15.1 46 15.1C46.53 15.1 46.96 15.53 46.96 16.06V23.15Z" fill={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6112_2670">
                                            <rect width="83.06" height="29.68" fill={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} transform="translate(0.469971 6)" />
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
                                        marginLeft: '10px',
                                        marginRight: '10px',
                                        '@media (max-width: 768px)': {
                                            display: 'none'
                                        }
                                    }}
                                    onClick={handleAccountClick}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_6128_2675)">
                                            <path d="M12.52 23.9902C18.678 23.9902 23.67 18.9982 23.67 12.8402C23.67 6.68221 18.678 1.69019 12.52 1.69019C6.36202 1.69019 1.37 6.68221 1.37 12.8402C1.37 18.9982 6.36202 23.9902 12.52 23.9902Z" stroke={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                            <path d="M12.52 14.7001C14.6905 14.7001 16.45 12.9406 16.45 10.7701C16.45 8.59961 14.6905 6.84009 12.52 6.84009C10.3495 6.84009 8.59003 8.59961 8.59003 10.7701C8.59003 12.9406 10.3495 14.7001 12.52 14.7001Z" stroke={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                            <path d="M18.27 22.3802C18.43 21.8502 18.51 21.2802 18.51 20.7002C18.51 17.3902 15.83 14.7102 12.52 14.7102C9.21003 14.7102 6.53003 17.3902 6.53003 20.7002C6.53003 21.2802 6.62003 21.8502 6.77003 22.3802" stroke={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_6128_2675">
                                                <rect width="24" height="24" fill={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} transform="translate(0.52002 0.840088)" />
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
                                        vertical: 'center',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                    sx={{ width: '1000px' }}
                                >
                                    <Login activeHeader={getActiveHeader(scroll, hover, headerColor)} handleAccountClose={handleAccountClose} />
                                </CustomPopOver>
                            </Box>
                            <IconButton
                                aria-describedby={calendarId}
                                sx={{
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                    '@media (max-width: 768px)': {
                                        display: 'none'
                                    }
                                }}
                                onClick={handleCalendarClick}>
                                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_6112_2679)">
                                        <path d="M22.15 3.33496H1.37V22.185H22.15V3.33496Z" stroke={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                        <path d="M15.23 8.33496V22.185" stroke={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                        <path d="M8.30005 8.33496V22.185" stroke={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                        <path d="M22.15 15.2651H1.38" stroke={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                        <path d="M22.15 8.33496H1.38" stroke={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                        <path d="M5.76001 6.13502V0.64502" stroke={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                        <path d="M17.76 6.13502V0.64502" stroke={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6112_2679">
                                            <rect width="22.48" height="22.39" fill={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} transform="translate(0.52002 0.64502)" />
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
                                    vertical: 'center',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                sx={{
                                    height: { lg: '700px', md: 'auto' },
                                }}
                            >
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
                                                            <rect width="8.84" height="8.84" fill={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} transform="translate(0 0.580078)" />
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
                                                            <rect width="15.39" height="17" fill={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} transform="translate(0.610352 0.5)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CustomPopOver>
                            <Box>
                                <Button
                                    aria-describedby={cart}
                                    onClick={handleCartClick}
                                    sx={{
                                        marginLeft: '10px',
                                    }}
                                    endIcon={
                                        <Box sx={{ borderRadius: "50%", width: "20px", height: "20px", background: getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <Typography sx={{ fontSize: "10px", fontWeight: 700, color: getActiveHeader(scroll, hover, headerColor) ? "#fff" : "#000000" }}>3</Typography>
                                        </Box>
                                    }>
                                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_6112_2688)">
                                            <path d="M20.1199 9.34985H3.14993L1.23993 22.7399H22.0199L20.1199 9.34985Z" stroke={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                            <path d="M13.1299 9.35019V4.19019C13.1299 2.53019 11.7899 1.19019 10.1299 1.19019C8.46994 1.19019 7.12994 2.53019 7.12994 4.19019V9.36019" stroke={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                            <path d="M16.53 9.34995V4.18995C16.53 3.29995 16.14 2.49995 15.53 1.94995" stroke={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" strokeLinecap="round" />
                                            <path d="M17.63 22.7399L15.72 9.34985" stroke={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} strokeWidth="1.7" strokeMiterlimit="10" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_6112_2688">
                                                <rect width="23" height="23" fill={getActiveHeader(scroll, hover, headerColor) ? "#2A3592" : "#fff"} transform="translate(0 0.340088)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Button>
                                <CustomPopOver
                                    id={cartId}
                                    open={cart}
                                    anchorEl={cartPopup}
                                    onClose={handleCartClose}
                                    sx={{
                                        height: { lg: '700px', md: 'auto' },
                                    }}
                                    anchorOrigin={{
                                        vertical: 'center',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <Cart activeHeader={getActiveHeader(scroll, hover, headerColor)} handleCartClose={handleCartClose} />
                                </CustomPopOver>
                            </Box>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
export default Header;
