import { configureStore } from "@reduxjs/toolkit";
import { DestinationApi } from "../api/DestinationApi";
import { RandomDestinationApi } from "../api/RandomDestinationApi";
import { PeopleApi } from "../api/PeopleApi";

export const store = configureStore({
    reducer: {
        // "apidestination": DestinationApi.reducer,
        [DestinationApi.reducerPath]: DestinationApi.reducer,
        [RandomDestinationApi.reducerPath]: RandomDestinationApi.reducer,
        [PeopleApi.reducerPath]: PeopleApi.reducer,
    },
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware()
            .concat(DestinationApi.middleware)
            .concat(RandomDestinationApi.middleware)
            .concat(PeopleApi.middleware)
})