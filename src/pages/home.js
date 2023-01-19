import React from 'react';

import Footer from '../components/footer';
import ProductSection from '../components/home/productSection';
import JoinTheClubSection from '../components/home/joinTheClubSection';
import BestSellingSection from '../components/home/bestSellingSection';
import HomeBannerTabs from '../components/home/homeBannerTabs';


const Home = () => {

    return (
        <div className='home_page_wrap'>

            <HomeBannerTabs />

            <BestSellingSection /> 

            <ProductSection />
            
            <JoinTheClubSection />

            <Footer />
        </div>
    )
}
export default Home