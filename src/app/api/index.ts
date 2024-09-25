import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const emptySplitApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_HOST_API,
        credentials: "include",
        headers: {
            accept: "application/json",
        },
        prepareHeaders: (headers) => {
            const token = document.cookie.match(/XSRF-TOKEN=([^\s;]+)/);
            if (token) {
                headers.set('X-XSRF-TOKEN', decodeURIComponent(token[1]));
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
});

export default emptySplitApi;