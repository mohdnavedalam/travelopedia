import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RandomDestinationApi = createApi({
    // reducerPath: "api",
    reducerPath: "apirandomdestination",
    baseQuery: fetchBaseQuery({ baseUrl: "https://random-data-api.com/api/v2/" }),
    endpoints: (builder) => ({
        // QUERY -> GET
        // MUTATION -> POST/PUT/DELETE
        getRandomDestinations: builder.query({
            // query: () => "destination",
            query: () => ({
                url: "addresses",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetRandomDestinationsQuery } = RandomDestinationApi;