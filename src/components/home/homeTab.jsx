import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useGetDatabyIdWithFiltersMutation } from "../../services/api";
import Footer from "../footer";
import BestSellingSection from "./bestSellingSection";
import HomeBannerTabs from "./homeBannerTabs";
import JoinTheClubSection from "./joinTheClubSection";
import { Box, CircularProgress } from "@mui/material";

const HomeTab = ({ menuData }) => {
    const [data, setData] = React.useState(menuData ?? [])
    const [selectedId, setSelectedId] = useState({
        id: "",
        type: ""
    });
    const [singleData, setSingleData] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const [getDatabyIdWithFilters, { isFetching, isLoading }] = useGetDatabyIdWithFiltersMutation()

    useEffect(() => {
        setData(menuData ?? []);
        setSelectedId({
            id: menuData?.[0]?._id ?? "",
            type: menuData?.[0]?.type ?? "",
            isRefresh: false
        })
    }, [menuData]);

    useEffect(async () => {
        setLoading(true)
        if (selectedId?.id ?? "") {
            await getDatabyIdWithFilters(selectedId).unwrap().then((responce) => {
                setSingleData(responce?.data ?? {})
                setLoading(false)
            }).catch((error) => {
                setLoading(false)
                toast.error(error?.data?.message)
            })
        }
    }, [selectedId])


    if (isLoading || isFetching || loading) return <Box sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}><CircularProgress /></Box>

    return (
        <>
            <HomeBannerTabs data={data} singleData={singleData} setSelectedId={setSelectedId} selectedId={selectedId} />
            <JoinTheClubSection />
            <Footer />
        </>
    )
}

export default HomeTab