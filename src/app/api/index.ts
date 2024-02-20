import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const emptySplitApi = createApi({
    baseQuery: fetchBaseQuery({
        headers: {
            accept: "application/json",
        },
    }),
    tagTypes: ["sendOrderForm"],
    endpoints: () => ({}),
});

export default emptySplitApi;