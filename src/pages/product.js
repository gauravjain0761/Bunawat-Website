import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import ProductCard from "../components/product/productCard";

const Product = () => {
  const [swipeableIndex, setSwipeableIndex] = useState(0);
  const [swipeableDisable, setSwipeableDisable] = useState(false);
  const [productList, setProductList] = useState(["Buna", "wat"]);
  return (
    <>
      <SwipeableViews enableMouseEvents index={swipeableIndex} disabled={swipeableDisable} onChangeIndex={(index) => setSwipeableIndex(index)}>
        {productList?.map((data, index) => {
          return (
            <ProductCard product={data} />
          )
        })}
      </SwipeableViews>
    </>
  );
};

export default Product;
