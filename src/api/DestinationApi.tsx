import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const DestinationApi = createApi({
    // reducerPath: "api",
    reducerPath: "apidestination",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
    endpoints: (builder: any) => ({
        // QUERY -> GET
        // MUTATION -> POST/PUT/DELETE
        getAllDestinations: builder.query({
            query: () => "destination",
        }),
    }),
});

export const { useGetAllDestinationsQuery } = DestinationApi;