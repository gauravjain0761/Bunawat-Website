import React, { useEffect, useState } from "react";
import { useGetDatabyIdQuery } from "../../services/api";
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
    const { data: singleData, error, isLoading } = useGetDatabyIdQuery(selectedId, {
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
            <HomeBannerTabs data={data} singleData={singleData?.data} setSelectedId={setSelectedId} />
            <BestSellingSection singleData={singleData?.data?.link_with_category_collection} />
            <JoinTheClubSection />
            <Footer />
        </>
    )
}

export default HomeTab