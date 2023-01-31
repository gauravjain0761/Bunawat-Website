import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_ROUTES } from '../constant/api'
import url from 'url'

const { BASE_URL, API_VERSION } = API_ROUTES;
const API_BASE_URL = url.format(BASE_URL + API_VERSION);

export const AllApiData = createApi({
    reducerPath: 'apiData',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    endpoints: (builder) => ({
        getShopMenuData: builder.query({
            query: () => `get_shop_menu`,
        }),
        getDatabyId: builder.query({
            query: ({ id, type }) => `get_data_by_id/${id}?type=${type}`,
        }),
    }),
})

export const { useGetShopMenuDataQuery, useGetDatabyIdQuery } = AllApiData