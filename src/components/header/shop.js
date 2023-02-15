import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CssBaseline, Divider, Stack } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import Button from '@mui/material/Button';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Shop = ({menuData, handleClose, handleActive}) => {
    const history = useHistory();
  return (
    <>
      <Box sx={{ width: { md: "380px", sm: "100%" }, px: 2 }}>
        {menuData.level == "1" &&
          menuData.collection.map((item, index) => {
            return (
              <React.Fragment key={`collection-${index}`}>
                <Typography
                  onClick={() => {
                    history.push("/allProduct");
                    handleClose();
                  }}
                  sx={{
                    py: 2,
                    fontSize: "24px",
                    fontWeight: 600,
                    letterSpacing: "-.02em",
                    fontFamily: "Imported",
                    cursor: "pointer",
                  }}
                >
                  {item.name}
                </Typography>
                <Divider sx={{ borderWidth: "1px" }} />
              </React.Fragment>
            );
          })}
      </Box>
      <Box sx={{ width: { md: "380px", sm: "100%" }, px: 2 }}>
        {menuData.categories.map((item, index) => {
          return (
            <React.Fragment key={`categories-${index}`}>
              {menuData.level == "1" && (
                <>
                  <Stack
                    sx={{ cursor: "pointer" }}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    onClick={() =>
                      handleActive(
                        item?.parentId,
                        index,
                        "2",
                        item.sub_cateogries.length > 0
                      )
                    }
                  >
                    <Typography
                      sx={{
                        py: 1.5,
                        fontSize: "24px",
                        fontWeight: 600,
                        letterSpacing: "-.02em",
                        fontFamily: "Imported",
                      }}
                    >
                      {item.name}
                    </Typography>
                    {item.sub_cateogries.length > 0 && (
                      <Typography>
                        <svg
                          width="22"
                          height="25"
                          viewBox="0 0 22 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.80005 2.13184L20.147 12.4788L9.80005 22.8513"
                            stroke="black"
                            strokeWidth="1.7"
                            strokeMiterlimit="10"
                          />
                          <path
                            d="M0.800049 12.5044H19.7267"
                            stroke="black"
                            strokeWidth="1.7"
                            strokeMiterlimit="10"
                          />
                        </svg>
                      </Typography>
                    )}
                  </Stack>
                  <Divider sx={{ borderWidth: "1px" }} />
                </>
              )}
              {(menuData.level == "2" || menuData.level == "3") && (
                <>
                  {index == menuData.selectedCategoriesIndex &&
                    menuData.level == "2" && (
                      <>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          pb={0.5}
                          pt={2}
                        >
                          <Button
                            sx={{
                              fontSize: "14px !important",
                              textTransform: "capitalize",
                              fontWeight: 600,
                            }}
                            onClick={() =>
                              handleActive(item?.parentId, -1, "1")
                            }
                            color="inherit"
                            startIcon={<KeyboardBackspaceIcon />}
                          >
                            Back
                          </Button>
                          <Link to="/allProduct" sx={{color: "#000"}}>
                          <Button
                            sx={{
                              fontSize: "14px !important",
                              textTransform: "capitalize",
                              fontWeight: 600,
                              color: "#000",
                            }}
                            // color="inherit"
                            startIcon={<NorthEastIcon />}
                          >
                            Shop All
                          </Button>
                          </Link>
                        </Stack>
                        <Divider sx={{ borderWidth: "1px" }} />
                      </>
                    )}
                  {index == menuData.selectedCategoriesIndex &&
                    item.sub_cateogries.map((subcategory, subIndex) => {
                      return (
                        <>
                          {menuData.level == "2" && (
                            <Box
                              sx={{ cursor: "pointer" }}
                              key={`itemsub-${subIndex}`}
                            >
                              <Stack
                                sx={{ cursor: "pointer" }}
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                onClick={() =>
                                  handleActive(
                                    subcategory?.parentId,
                                    subIndex,
                                    "3",
                                    subcategory.categories.length > 0,
                                    true
                                  )
                                }
                              >
                                <Typography
                                  sx={{
                                    py: 1.5,
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    letterSpacing: "-.02em",
                                    fontFamily: "Imported",
                                  }}
                                >
                                  {subcategory.name}
                                </Typography>
                                {subcategory.categories.length > 0 && (
                                  <Typography>
                                    <svg
                                      width="22"
                                      height="25"
                                      viewBox="0 0 22 25"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.80005 2.13184L20.147 12.4788L9.80005 22.8513"
                                        stroke="black"
                                        strokeWidth="1.7"
                                        strokeMiterlimit="10"
                                      />
                                      <path
                                        d="M0.800049 12.5044H19.7267"
                                        stroke="black"
                                        strokeWidth="1.7"
                                        strokeMiterlimit="10"
                                      />
                                    </svg>
                                  </Typography>
                                )}
                              </Stack>
                              <Divider sx={{ borderWidth: "1px" }} />
                            </Box>
                          )}
                          {subIndex == menuData.selectedSubCategoriesIndex &&
                            menuData.level == "3" && (
                              <>
                                <Stack
                                  direction="row"
                                  justifyContent="space-between"
                                  pb={0.5}
                                  pt={2}
                                >
                                  <Button
                                    sx={{
                                      fontSize: "14px !important",
                                      textTransform: "capitalize",
                                      fontWeight: 600,
                                    }}
                                    onClick={() =>
                                      handleActive(
                                        subcategory?.parentId,
                                        menuData.selectedCategoriesIndex,
                                        "2"
                                      )
                                    }
                                    color="inherit"
                                    startIcon={<KeyboardBackspaceIcon />}
                                  >
                                    Back
                                  </Button>
                                  <Link to="/allProduct" sx={{color: "#000"}}>
                                    <Button
                                      sx={{
                                        fontSize: "14px !important",
                                        textTransform: "capitalize",
                                        fontWeight: 600,
                                        color: "#000",
                                      }}
                                      // color="inherit"
                                      startIcon={<NorthEastIcon />}
                                    >
                                      Shop All
                                    </Button>
                                  </Link>
                                </Stack>
                                <Divider sx={{ borderWidth: "1px" }} />
                                {subcategory.categories.map(
                                  (category, catIndex) => {
                                    return (
                                      <Box
                                        sx={{ cursor: "pointer" }}
                                        key={`itemsub-${catIndex}`}
                                      >
                                        <Typography
                                          onClick={() => {
                                            handleActive(
                                              category?.parentId,
                                              menuData.selectedCategoriesIndex,
                                              "3",
                                              false
                                            );
                                          }}
                                          sx={{
                                            py: 1.5,
                                            fontSize: "24px",
                                            fontWeight: 600,
                                            letterSpacing: "-.02em",
                                            fontFamily: "Imported",
                                          }}
                                        >
                                          {category.name}
                                        </Typography>
                                        <Divider sx={{ borderWidth: "1px" }} />
                                      </Box>
                                    );
                                  }
                                )}
                              </>
                            )}
                        </>
                      );
                    })}
                </>
              )}
            </React.Fragment>
          );
        })}
      </Box>
    </>
  );
};

export default Shop;
