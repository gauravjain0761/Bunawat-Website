import React from 'react';

import Footer from '../../components/footer';
import ProductSection from '../../components/home/productSection';
import JoinTheClubSection from '../../components/home/joinTheClubSection';
import BestSellingSection from '../../components/home/bestSellingSection';
import HomeBannerTabs from '../../components/home/homeBannerTabs';
import { useGetShopMenuDataQuery } from '../../services/api';
import HomeTab from '../../components/home/homeTab';


const Home = () => {
    const { data, error, isLoading } = useGetShopMenuDataQuery()

    return (
        <div className='home_page_wrap'>
            <HomeTab collectionData={data?.collections.filter(list => list?.home_visibilty)} />
        </div>
    )
}
export default Home