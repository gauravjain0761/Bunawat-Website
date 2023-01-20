import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import ProductCard from "../../components/product/productCard";

const Product = () => {
  const [swipeableIndex, setSwipeableIndex] = useState(0);
  const [swipeableDisable, setSwipeableDisable] = useState(true);
  const [productList, setProductList] = useState(["Buna", "wat"]);
  const [productBottomData, setProductBottomData] = useState([true, false]);
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  const getCurrentBottomData = (index) => {
    let bottomData = [...productBottomData];
    bottomData = bottomData?.map((x) => false)
    bottomData[index] = true;
    setSwipeableIndex(index)
    setProductBottomData(bottomData)
  }

  return (
    <>
      <SwipeableViews enableMouseEvents index={swipeableIndex} disabled={swipeableDisable} onChangeIndex={(index) => getCurrentBottomData(index)} >
        {productList?.map((data, index) => {
          return (
            <ProductCard key={index} index={index} product={data} setSwipeableDisable={setSwipeableDisable} productBottomData={productBottomData} width={width} />
          )
        })}
      </SwipeableViews>
    </>
  );
};

export default Product;
