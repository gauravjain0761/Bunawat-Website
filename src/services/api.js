import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_ROUTES } from '../constant/api'
import url from 'url'

const { BASE_URL, API_VERSION } = API_ROUTES;
const API_BASE_URL = url.format(BASE_URL + API_VERSION);

export const AllApiData = createApi({
    reducerPath: 'apiData',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    endpoints: (builder) => ({
        sendOtp: builder.mutation({
            query(body) {
                return {
                    url: `send_otp`,
                    method: 'POST',
                    body,
                }
            },
        }),
        otpMatch: builder.mutation({
            query(body) {
                return {
                    url: `otp_match`,
                    method: 'POST',
                    body,
                }
            },
        }),
        getDatabyId: builder.query({
            query: ({ id, type }) => `get_data_by_id/${id}?type=${type}`,
        }),
        getShopMenuData: builder.query({
            query: () => `get_shop_menu`,
        }),
        getDatabyId: builder.query({
            query: ({ id, type }) => `get_data_by_id/${id}?type=${type}`,
        }),
        getProduct: builder.query({
            query: ({ id }) => `get_product/${id}`,
        }),
    }),
})

export const { useSendOtpMutation, useOtpMatchMutation, useGetShopMenuDataQuery, useGetDatabyIdQuery, useGetProductQuery } = AllApiData