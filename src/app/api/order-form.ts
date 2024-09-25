import api from "./index";

export const orderForm = api.injectEndpoints({
  endpoints: (builder) => ({
    csrfCookie: builder.query<void, void>({
      query: () => ({ url: "/sanctum/csrf-cookie" }),
    }),
    sendOrderForm: builder.mutation<SendOrderFormResponse, SendOrderForm>({
      query: (chatInfo) => ({
        url: process.env.NEXT_PUBLIC_HOST_API + '/landing-form',
        method: 'POST',
        body: chatInfo,
      }),
    }),
  }),
});

export const { useSendOrderFormMutation, useCsrfCookieQuery } = orderForm;