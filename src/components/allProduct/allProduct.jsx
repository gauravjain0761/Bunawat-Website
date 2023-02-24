import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
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
    const { selected } = useParams()
    const [data, setData] = React.useState(menuData ?? [])
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [selectedId, setSelectedId] = useState({
        id: "",
        type: ""
    });
    const { data: singleData, error, isLoading, refetch } = useGetDatabyIdQuery(selectedId, {
        skip: selectedId?.id === ""
    })

    useEffect(() => {
        const findeIndex = menuData?.findIndex(x => x?.name == selected) == -1 ? 0 : menuData?.findIndex(x => x?.name == selected)
        setData(menuData ?? []);
        setSelectedId({
            id: menuData?.[findeIndex]?._id ?? "",
            type: menuData?.[findeIndex]?.type ?? ""
        })
        setSelectedIndex(findeIndex)
    }, [menuData]);

    return (
        <>
            <AllProductMenu data={data} singleData={singleData?.data} setSelectedId={setSelectedId} refetch={refetch} selectedIndex={selectedIndex} />
        </>
    )
}

export default AllProductList