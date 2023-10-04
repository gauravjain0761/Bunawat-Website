import React, { useCallback, useEffect, useRef, useState } from "react";
import "./product.css";
import NewCart from "../../components/header/cart_new";
import { useGetAllCartQuery } from "../../services/api";
import Storage from "../../services/storage";
import { he } from "date-fns/locale";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";


const Cart = () => {
  const { data: cartData, error, isLoading } = useGetAllCartQuery(undefined, { skip: !Storage.isUserAuthenticated() })

  const history = useHistory();

  const urlParams = new URLSearchParams(window.location.search);
  const openKey = urlParams.get('openKey');

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

  const handleCheckout = () => {
    if (Storage.isUserAuthenticated()) {
        history.push(`/checkout`);
    } else {
        // toast.error("Login required!")
        history.push(`/login`);
    }
};



  return (
    <div className="cart-container"
      style={{
        paddingTop: "40px",
      }}
    >
      <div className="cart-close-btn"
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          zIndex: "9999",
          padding: "10px",
          cursor: "pointer",
        }}
      >

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
          style={{
            cursor: "pointer",
            height: "30px", width: "30px",
            color: "#000000",
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            padding: "2px",
          }}
          onClick={
            () => history.push("/")
          }
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

      </div>
      <div
        style={{
         marginBottom: "60px",
        }}
        className="cart-container-inner"
      >
        <NewCart data={cartData} activeHeader={false} handleCartClose={() => { }} handleCheckout={handleCheckout} isMobile={true} openKey={openKey}/>
      </div>
    </div>
  );
};

export default Cart;
