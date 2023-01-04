<template>
    <div v-if="!($fetchState.pending)">
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

export default {
    name:"PaymentPage",

    data() {
       
        return {
            pk: 'pk_test_51H4LzxLRh1ikRvHv72d6YU7tPLUU1Xah4ryiaAUQ4UxQ2jWgcaL6Yq5MAJqNWcXMmKAjjDQBSkwxH3Grfn6mGrPY00zYSDv0XI',
            elementsOptions: {
                appearance: {}
            },
            confirmParams: {
                return_url: 'http://localhost:3000', // success url
            },
        }
    },
    async fetch() {
     await this.generatePaymentIntent();
    },
    methods: {
        async generatePaymentIntent () {
            const paymentIntent = await this.$axios.$get('https://bkpe-multi-ven-prod-test-k5p06h.mo6.mogenius.io/payment/create-payment-intent/4234/  ')
            this.elementsOptions.clientSecret = paymentIntent.clientSecret;
            console.log(paymentIntent)
        },
        pay () {
            this.$refs.paymentRef.submit();
        },
    },
}
</script>