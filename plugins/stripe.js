import Vue from 'vue';
import { StripeElementPayment,StripePlugin } from '@vue-stripe/vue-stripe';

const options = {
  pk: 'pk_test_51H4LzxLRh1ikRvHv72d6YU7tPLUU1Xah4ryiaAUQ4UxQ2jWgcaL6Yq5MAJqNWcXMmKAjjDQBSkwxH3Grfn6mGrPY00zYSDv0XI',
  testMode: true, // Boolean. To override the insecure host warning
  stripeAccount: 'acct_1H4LzxLRh1ikRvHv',
  apiVersion: '2022-11-15',
  locale: 'en',
};

Vue.use(StripePlugin, options);

export default () => {
  Vue.component('StripeElementPayment', StripeElementPayment);
};
