import React, { useEffect, useState } from "react";
import { useGetDatabyIdQuery } from "../../services/api";
import Footer from "../footer";
import BestSellingSection from "./bestSellingSection";
import HomeBannerTabs from "./homeBannerTabs";
import JoinTheClubSection from "./joinTheClubSection";

const HomeTab = ({ collectionData }) => {
    const [collection, setCollection] = React.useState(collectionData ?? [])
    const [collectionId, setCollectionId] = useState("");
    const { data: singleCollection, error, isLoading } = useGetDatabyIdQuery({ id: collectionId, type: "COLLECTION" }, {
        skip: collectionId === ""
    })

    useEffect(() => {
        setCollection(collectionData ?? []);
        setCollectionId(collectionData?.[0]?._id ?? "")
    }, [collectionData]);

    return (
        <>
            <HomeBannerTabs collectionData={collection} singleData={singleCollection?.data} setCollectionId={setCollectionId} />
            <BestSellingSection collectionData={singleCollection?.data?.link_with_category_collection} />
            <JoinTheClubSection />
            <Footer />
        </>
    )
}

export default HomeTab