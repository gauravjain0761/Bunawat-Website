import React from "react";
import Box from '@mui/material/Box';
import { useState } from "react";
import { useHistory } from "react-router-dom";

const ShopNew = ({ sideOpen, setSideOpen, menuData, handleClose, handleActive }) => {
  const history = useHistory();
  const [selectedId, setSelectedId] = useState(null)
  return (
    <>
      <>
        <Box sx={{
          width: '100%',
          display: 'flex',
          height: '100%',
          cursor: 'pointer',
          alignItems: 'center'
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            overflow: 'hidden',
            overflowY: 'scroll',
            flexDirection: 'column',
            width: '100%',
            padding: '20px'
          }}>
            {menuData.collection?.map((item, index) => {
              return (
                <React.Fragment key={`collection-${index}`}>
                  <Box component="span" onClick={() => {
                    setSelectedId(null)
                    setSideOpen(false)
                    history.push(`/allProductList/${item?.name}`);
                    handleClose();
                  }} sx={{
                    fontWeight: 'bold',
                    color: '#000',
                    fontSize: '20px',
                    width: '315px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    lineHeight: '40px',
                    borderBottom: '1.7px solid rgba(0, 0, 0, 0.2)',
                    height: '80px',
                    padding: '40px 24px',
                    width: '100%'
                  }}>
                    {item?.name} + {"afdsdasfdgfsdgsfgsfhkibbni"}
                  </Box>
                </React.Fragment>
              );
            })}
            {menuData?.categories?.map((item, index) => {
              return (
                <React.Fragment key={`categories-${index}`}>
                  <Box component="span" onClick={() => {
                    if (item?.sub_cateogries?.length > 0) {
                      setSelectedId(item?._id)
                      setSideOpen(!sideOpen)
                    } else {
                      setSideOpen(false)
                      setSelectedId(null)
                      handleClose();
                      history.push(`/allProduct/${item?._id}/${item?.name}`)
                    }
                  }} sx={{
                    fontWeight: 'bold',
                    color: '#000',
                    fontSize: '20px',
                    lineHeight: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1.7px solid rgba(0, 0, 0, 0.2)',
                    height: '80px',
                    padding: '24px',
                    width: '100%'
                  }}>
                    {item?.name}
                    {item?.sub_cateogries?.length > 0 && (
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
                    )}
                  </Box>
                </React.Fragment>
              );
            })}
          </Box>

          {(sideOpen && selectedId) ?
            <Box sx={{
              display: 'flex',
              height: '100%',
              overflow: 'hidden',
              overflowY: 'scroll',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%',
              padding: '20px'
            }}>
              {menuData?.categories?.find(list => list?._id == selectedId)?.sub_cateogries?.map((item, index) => {
                return (
                  <React.Fragment key={`sub_cateogries-${index}`}>
                    <Box component="span" onClick={() => {
                      if (item?.sub_cateogries?.length > 0) {
                        setSelectedId(item?._id)
                        setSideOpen(true)
                      } else {
                        setSideOpen(false)
                        setSelectedId(null)
                        handleClose();
                        history.push(`/allProduct/${item?._id}/${item?.name}`)
                      }
                    }} sx={{
                      fontWeight: 'bold',
                      color: '#000',
                      fontSize: '20px',
                      lineHeight: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1.7px solid rgba(0, 0, 0, 0.2)',
                      height: '80px',
                      padding: '24px',
                      width: '100%'
                    }}>
                      {item?.name}
                      {item?.sub_cateogries?.length > 0 && (
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
                      )}
                    </Box>
                  </React.Fragment>
                );
              })}

              <Box component="span" sx={{
                fontWeight: 'bold',
                color: '#000',
                fontSize: '20px',
                borderBottom: '1.7px solid rgba(0, 0, 0, 0.2)',
                height: '80px',
                lineHeight: '40px',
                padding: '24px',
                width: '100%'
              }}>
                Most Loved
              </Box>
            </Box>
            : null}
        </Box>
      </>
    </>
  );
};

export default ShopNew;
