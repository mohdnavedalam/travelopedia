import { configureStore } from "@reduxjs/toolkit";
import { DestinationApi } from "../api/DestinationApi";
import { RandomDestinationApi } from "../api/RandomDestinationApi";

export const store = configureStore({
    reducer: {
        // "apidestination": DestinationApi.reducer,
        [DestinationApi.reducerPath]: DestinationApi.reducer,
        [RandomDestinationApi.reducerPath]: RandomDestinationApi.reducer
    },
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware()
            .concat(DestinationApi.middleware)
            .concat(RandomDestinationApi.middleware)
})