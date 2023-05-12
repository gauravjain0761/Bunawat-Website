import React, { useEffect, useState } from "react";
import "./product.css";
import { useParams } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import ProductCard from "../../components/product/productCard";
import ProductPageFilter from "../../components/product/ProductFilter";
import { useGetProductQuery } from "../../services/api";
import Storage from "../../services/storage";

const Product = () => {
  const { id, type } = useParams()
  const { data, error, isLoading, refetch } = useGetProductQuery({ id })
  const [swipeableIndex, setSwipeableIndex] = useState(0);
  const [swipeableDisable, setSwipeableDisable] = useState(true);
  const [productList, setProductList] = useState([]);
  const [similarList, setSimilarList] = useState([]);
  const [productBottomData, setProductBottomData] = useState([]);
  const [lastSkuData, setLastSkuData] = useState({});
  const [width, setWidth] = useState(window.innerWidth);
  const [qty, setQty] = useState(1);
  const [selectedData, setSelectedData] = useState({});

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    let collection_product = data?.data?.collection_product ?? []
    if (collection_product?.length > 0) {
      collection_product = collection_product?.map(list => {
        return {
          ...list,
          type: 'COLLECTION'
        }
      })
    }
    let category_product = data?.data?.category_product ?? [];
    if (category_product?.length > 0) {
      category_product = category_product?.map(list => {
        return {
          ...list,
          type: 'category'
        }
      })
    }

    if (id) {
      if (category_product.filter(list => list._id == id).length > 0 && type != "COLLECTION") {
        let product = category_product.find(list => list._id == id)
        category_product = category_product.filter(list => list._id != id)
        category_product = [product, ...category_product]
        setProductList(category_product)
        setSwipeableIndex(0)
        setProductBottomData(category_product?.map((x, index) => {
          if (index == 0) {
            return true
          }
          return false
        }))
      } else {
        setSimilarList(category_product?.filter(list => list._id != id))
      }
      if (collection_product.filter(list => list._id == id).length > 0 && (type == "COLLECTION" || !type)) {
        let product = collection_product.find(list => list._id == id)
        collection_product = collection_product.filter(list => list._id != id)
        collection_product = [product, ...collection_product]
        setProductList(collection_product)
        setSwipeableIndex(0)
        setProductBottomData(collection_product?.map((x, index) => {
          if (index == 0) {
            return true
          }
          return false
        }))
      } else {
        setSimilarList(collection_product?.filter(list => list._id != id))
      }
    }
  }, [id, data]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  useEffect(() => {
    let recentlyProduct = Storage.get("recentlyProduct") ? JSON.parse(Storage.get("recentlyProduct") ?? '[]') : [];
    if (productList?.length > 0) {
      if (recentlyProduct?.some(x => x?._id == productList?.[swipeableIndex]._id)) {
        recentlyProduct = recentlyProduct?.filter(x => x?._id != productList?.[swipeableIndex]._id)
        recentlyProduct = [productList?.find(x => x?._id == productList?.[swipeableIndex]._id), ...recentlyProduct]
      } else {
        recentlyProduct = [productList?.find(x => x?._id == productList?.[swipeableIndex]._id), ...recentlyProduct]
      }
    }
    Storage.set("recentlyProduct", JSON.stringify(recentlyProduct))
  }, [swipeableIndex, productList]);

  const getCurrentBottomData = (index) => {
    let bottomData = [...productBottomData];
    bottomData = bottomData?.map((x) => false)
    bottomData[index] = true;
    setSwipeableIndex(index)
    setProductBottomData(bottomData)
  }

  return (
    <>
      <SwipeableViews containerStyle={{ height: '100%' }} enableMouseEvents index={swipeableIndex} disabled={swipeableDisable} onChangeIndex={(index) => getCurrentBottomData(index)} >
        {productList?.slice(0, 3)?.map((data, index) => {
          return (
            <ProductCard key={data?._id} productIndex={index} product={data} similarList={similarList ?? []} setSwipeableDisable={setSwipeableDisable} productBottomData={productBottomData} width={width} refetch={refetch} productList={productList} swipeableIndex={swipeableIndex} lastSkuData={lastSkuData ?? {}} setLastSkuData={setLastSkuData} filters={productList?.[swipeableIndex]?.skus ?? []} setQty={setQty} selectedData={selectedData} setSelectedData={setSelectedData} />
          )
        })}
      </SwipeableViews>
      <ProductPageFilter selectedImage={productList?.[swipeableIndex]?.images?.[0]?.url ?? ""} selectedProduct={productList?.[swipeableIndex] ?? {}} filters={productList?.[swipeableIndex]?.skus ?? []} swipeableIndex={swipeableIndex ?? 0} setLastSkuData={setLastSkuData} qty={qty} setQty={setQty} selectedData={selectedData} setSelectedData={setSelectedData} />
    </>
  );
};

export default Product;
