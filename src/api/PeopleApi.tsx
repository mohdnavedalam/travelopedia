import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PeopleApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
    endpoints: (builder: any) => ({
        getAllPeople: builder.query({
            query: () => "people",
        })
    })
});

export const { useGetAllPeopleQuery } = PeopleApi;