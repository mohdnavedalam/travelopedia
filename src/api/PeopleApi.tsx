import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PeopleApi = createApi({
    reducerPath: "apipeople",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
    endpoints: (builder) => ({
        getAllPeople: builder.query({
            query: () => ({
                url: "people",
                method: "GET"
            })
        })
    })
});

export const { useGetAllPeopleQuery } = PeopleApi;