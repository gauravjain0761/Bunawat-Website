import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useGetDatabyIdWithFiltersMutation } from "../../services/api";
import Footer from "../footer";
import BestSellingSection from "./bestSellingSection";
import HomeBannerTabs from "./homeBannerTabs";
import JoinTheClubSection from "./joinTheClubSection";

const HomeTab = ({ menuData }) => {
    const [data, setData] = React.useState(menuData ?? [])
    const [selectedId, setSelectedId] = useState({
        id: "",
        type: ""
    });
    const [singleData, setSingleData] = React.useState({})
    const [getDatabyIdWithFilters] = useGetDatabyIdWithFiltersMutation()

    useEffect(() => {
        setData(menuData ?? []);
        setSelectedId({
            id: menuData?.[0]?._id ?? "",
            type: menuData?.[0]?.type ?? "",
            isRefresh: false
        })
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
            <HomeBannerTabs data={data} singleData={singleData} setSelectedId={setSelectedId} selectedId={selectedId} />
            <JoinTheClubSection />
            <Footer />
        </>
    )
}

export default HomeTab