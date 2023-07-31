import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import "./allProduct.css";
import { useGetDatabyIdWithFiltersMutation } from '../../services/api';
import AllProductMenu from './allProductMenu';
import { toast } from 'react-toastify';

const AllProductList = ({ menuData,selectedMenu }) => {
    const { selected } = useParams()
    const [data, setData] = React.useState(menuData ?? [])
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [singleData, setSingleData] = React.useState({})
    const [selectedId, setSelectedId] = useState({
        id: "",
        type: "",
        sortBy: 1,
        pricing: {
            from: 0,
            to: 0
        },
        atr: {}
    });

    const urlParams = new URLSearchParams(window.location.search);
    const isMostLoved = urlParams.get('isMostLoved');

    const [getDatabyIdWithFilters] = useGetDatabyIdWithFiltersMutation()
    // console.log('singleData', result)
    useEffect(() => {
        const findeIndex = menuData?.findIndex(x => x?.name == (selected ?? selectedMenu)) == -1 ? 0 : menuData?.findIndex(x => x?.name == (selected ?? selectedMenu))
        setData(menuData ?? []);
        setSelectedId({
            id: menuData?.[findeIndex]?._id ?? "",
            type: menuData?.[findeIndex]?.type ?? "",
            sortBy: isMostLoved ? 3 : 0,
            atr: {},
            pricing: {
                from: 0,
                to: 0
            },
            isRefresh: false,
        })
        setSelectedIndex(findeIndex)

    }, [menuData]);

    useEffect(async () => {
        if (selectedId?.id ?? "") {
            await getDatabyIdWithFilters(selectedId).unwrap().then((responce) => {
                setSingleData(responce?.data ?? {})
            }).catch((error) => toast.error(error?.data?.message))
        }
    }, [selectedId])

    return (
        <>
            <AllProductMenu data={data} singleData={singleData} selectedId={selectedId ?? {}} setSelectedId={setSelectedId} selectedIndex={selectedIndex} />
        </>
    )
}

export default AllProductList