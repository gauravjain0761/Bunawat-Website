import React, { useMemo } from 'react';

import Footer from '../../components/footer';
import ProductSection from '../../components/home/productSection';
import JoinTheClubSection from '../../components/home/joinTheClubSection';
import BestSellingSection from '../../components/home/bestSellingSection';
import HomeBannerTabs from '../../components/home/homeBannerTabs';
import { useGetShopMenuDataQuery } from '../../services/api';
import HomeTab from '../../components/home/homeTab';
import { Box, CircularProgress } from '@mui/material';


const Home = () => {
    const { data, isFetching, isLoading } = useGetShopMenuDataQuery()

    const collections = useMemo(() => {
        return data?.collections?.filter(list => list?.home_visibilty) ?? []
    }, [data]);

    const categories = useMemo(() => {
        let temp = data?.categories ?? []
        let categoryList = [];
        temp = temp?.map(level1 => {
            if (level1?.sub_cateogries?.length == 0) {
                if (level1?.home_visibilty) {
                    categoryList.push(level1)
                }
            } else {
                level1?.sub_cateogries?.map(level2 => {
                    if (level2?.categories?.length == 0) {
                        if (level2?.home_visibilty) {
                            categoryList.push(level2)
                        }
                    } else {
                        level2?.categories?.map(level3 => {
                            if (level3?.home_visibilty) {
                                categoryList.push(level3)
                            }
                        })
                    }
                })
            }
            return level1
        }) ?? [];
        return categoryList ?? []
    }, [data]);


    if (isLoading || isFetching) return <Box sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}><CircularProgress /></Box>

    return (
        <div className='home_page_wrap'>
            <HomeTab menuData={[...collections, ...categories]} />
        </div>
    )
}
export default Home