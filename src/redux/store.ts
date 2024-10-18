import { configureStore } from "@reduxjs/toolkit";
import { DestinationApi } from "../api/DestinationApi";

export const store = configureStore({
    reducer: {
        "apidestination": DestinationApi.reducer
    },
    middleware: (getDefaultMiddleware: any) => 
        getDefaultMiddleware().concat(DestinationApi.middleware)
})