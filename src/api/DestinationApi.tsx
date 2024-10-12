import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const DestinationApi = createApi({
    // reducerPath: "api",
    reducerPath: "apidestination",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
    endpoints: (builder) => ({
        // QUERY -> GET
        // MUTATION -> POST/PUT/DELETE
        getAllDestinations: builder.query({
            query: () => "destination"
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
            })
        }),
        updateDestination: builder.mutation({
            query: (destination) => ({
                url: `destination/${destination.id}`,
                method: "PUT",
                body: destination
            })
        }),
        deleteDestination: builder.mutation({
            query: ({id}) => ({
                url: `destination/${id}`,
                method: "DELETE",
                body: id
            })
        }),
    }),
});

export const { useGetAllDestinationsQuery, useAddDestinationMutation, useUpdateDestinationMutation, useDeleteDestinationMutation } = DestinationApi;