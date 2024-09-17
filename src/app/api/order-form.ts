import api from "./index";

export const orderForm = api.injectEndpoints({
  endpoints: (builder) => ({
    sendOrderForm: builder.mutation<SendOrderFormResponse, SendOrderForm>({
      query: (chatInfo) => ({
        url: process.env.NEXT_PUBLIC_HOST_API + '/landing-form.php',
        method: 'POST',
        body: chatInfo,
      }),
    }),
  }),
});

export const { useSendOrderFormMutation } = orderForm;