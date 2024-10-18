import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const DestinationApi = createApi({
    // reducerPath: "api",
    reducerPath: "apidestination",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
    tagTypes: ["Destinations"],
    endpoints: (builder) => ({
        // QUERY -> GET
        // MUTATION -> POST/PUT/DELETE
        getAllDestinations: builder.query({
            // query: () => "destination",
            query: () => ({
                url: "destination",
                method: "GET",
                params: {}
            }),
            transformResponse: (response: any) => response.sort((a: any, b: any) => b.id - a.id),
            // transformResponse: (response: any) => response.sort((a: any, b: any) => b.city.name - a.city.name), // pending
            providesTags: ["Destinations"],
        }),
        // getDestinationById: builder.query({
        //     query: ({id}) => ({
        //         url: `destination/${id}`,
        //         method: "GET",
        //         body: destination
        //     }),
        // }),
        addDestination: builder.mutation({
            query: (destination) => ({
                url: "destination",
                method: "POST",
                body: destination
            }),
            invalidatesTags: ["Destinations"],
        }),
        updateDestination: builder.mutation({
            query: (destination) => ({
                url: `destination/${destination.id}`,
                method: "PUT",
                body: destination
            }),
            invalidatesTags: ["Destinations"],
        }),
        deleteDestination: builder.mutation({
            query: (id) => ({
            // query: (destination) => ({
                url: `destination/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ["Destinations"],
        }),
    }),
});

export const { useGetAllDestinationsQuery, useAddDestinationMutation, useUpdateDestinationMutation, useDeleteDestinationMutation } = DestinationApi;