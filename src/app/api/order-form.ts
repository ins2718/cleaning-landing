import api from "./index";

export const orderForm = api.injectEndpoints({
  endpoints: (builder) => ({
    sendOrderForm: builder.mutation<SendOrderFormResponse, SendOrderForm>({
      query: (chatInfo) => ({
        url: '//pro-chistka-mebeli.ru/landing-form.php',
        method: 'POST',
        body: chatInfo,
      }),
    }),
  }),
});

export const { useSendOrderFormMutation } = orderForm;