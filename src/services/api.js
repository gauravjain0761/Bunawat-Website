import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_ROUTES } from '../constant/api'
import url from 'url'
import Storage from './storage';

const { BASE_URL, API_VERSION } = API_ROUTES;
const API_BASE_URL = url.format(BASE_URL + API_VERSION);

export const AllApiData = createApi({
    reducerPath: 'apiData',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        // credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            const token = Storage.isUserAuthenticated()
            if (token) {
                headers.set('Authorization', Storage.getToken());
            }
            return headers;
        },
    }),
    tagTypes: ['Cart', 'Order'],
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
            invalidatesTags: ['Cart'],
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
        getAllCart: builder.query({
            query: () => `get_all_cart`,
            providesTags: ['Cart'],
        }),
        addToCart: builder.mutation({
            query(body) {
                return {
                    url: `add_to_cart`,
                    method: 'POST',
                    body,
                }
            },
            invalidatesTags: ['Cart'],
        }),
        editCart: builder.mutation({
            query({ id, ...body }) {
                return {
                    url: `edit_cart/${id}`,
                    method: 'PUT',
                    body,
                }
            },
            invalidatesTags: ['Cart'],
        }),
        removeCartItem: builder.mutation({
            query: (id) => ({
                url: `/remove_cartitem/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Cart'],
        }),
        addOrder: builder.mutation({
            query(body) {
                return {
                    url: `order/add`,
                    method: 'POST',
                    body,
                }
            },
            invalidatesTags: ['Cart', 'Order'],
        }),
        orderList: builder.query({
            query: () => `order_list`,
            providesTags: ['Order'],
        }),
    }),
})

export const { useSendOtpMutation, useOtpMatchMutation, useGetShopMenuDataQuery, useGetDatabyIdQuery, useGetProductQuery, useAddToCartMutation, useGetAllCartQuery, useRemoveCartItemMutation, useEditCartMutation, useAddOrderMutation, useOrderListQuery } = AllApiData