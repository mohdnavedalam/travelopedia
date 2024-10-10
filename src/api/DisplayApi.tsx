import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const DisplayApi = createApi({
    // reducerPath: "api",
    reducerPath: "apidestination",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
    endpoints: (builder) => ({
        // QUERY -> GET
        // MUTATION -> POST/PUT/DELETE
        getAllDestinations: builder.query({
            query: () => "destination"
        }),
        getAllPeople: builder.query({
            query: () => "people"
        }),
    }),
});

export const { useGetAllDestinationsQuery, useGetAllPeopleQuery } = DisplayApi;