<template>
    <div>
        <stripe-element-payment
        ref="paymentRef"
        :pk="pk"
        :elements-options="elementsOptions"
        :confirm-params="confirmParams"
        />
        <button @click="pay">Pay Now</button>
    </div>
</template>

<script>
import { StripeElementPayment } from '@vue-stripe/vue-stripe';
export default {
    name:"PaymentPage",
    components: {
        StripeElementPayment,
    },
    data() {
       
        return {
            pk: 'pk_test_51H4LzxLRh1ikRvHv72d6YU7tPLUU1Xah4ryiaAUQ4UxQ2jWgcaL6Yq5MAJqNWcXMmKAjjDQBSkwxH3Grfn6mGrPY00zYSDv0XI',
            elementsOptions: {
                appearance: {}, // appearance options 
            },
            confirmParams: {
                return_url: 'http://localhost:3000', // success url
            },
        }
    },
    mounted () {
        this.generatePaymentIntent();
    },
    methods: {
        async generatePaymentIntent () {
            const paymentIntent = await "" // await apiCallToGeneratePaymentIntent();  this is just a dummy, create your own API call
            this.elementsOptions.clientSecret = paymentIntent.client_secret;
        },
        pay () {
            this.$refs.paymentRef.submit();
        },
    },
}
</script>
