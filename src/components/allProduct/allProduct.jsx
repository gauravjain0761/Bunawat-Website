import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./allProduct.css";
import category_1 from "../../assets/img/category/category_1.png"
import category_2 from "../../assets/img/category/category_2.png"
import category_3 from "../../assets/img/category/category_3.png"
import category_4 from "../../assets/img/category/category_4.png"
import ProductFilters from '../category/productFilters';
import { Nav, Tab, Tabs } from 'react-bootstrap';
import FooterStrip from '../footer/footerStrip';
import DesignerWear from '../category/DesignerWear';
import { useGetDatabyIdQuery, useGetShopMenuDataQuery } from '../../services/api';
import AllProductMenu from './allProductMenu';

const AllProductList = ({ menuData }) => {
    const [data, setData] = React.useState(menuData ?? [])
    const [selectedId, setSelectedId] = useState({
        id: "",
        type: ""
    });
    const { data: singleData, error, isLoading, refetch } = useGetDatabyIdQuery(selectedId, {
        skip: selectedId?.id === ""
    })

    useEffect(() => {
        setData(menuData ?? []);
        setSelectedId({
            id: menuData?.[0]?._id ?? "",
            type: menuData?.[0]?.type ?? ""
        })
    }, [menuData]);

    return (
        <>
            <AllProductMenu data={data} singleData={singleData?.data} setSelectedId={setSelectedId} refetch={refetch} />
        </>
    )
}

export default AllProductList