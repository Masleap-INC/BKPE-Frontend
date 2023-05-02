<template>
    <div v-if="!($fetchState.pending)" class="lg:w-1/3 md:w-2/3 sm:w-5/6 mx-auto my-20">

        <!-- Heading -->

        <h2 class="text-4xl text-white font-bold mb-10">Make Payment</h2>

        <stripe-element-payment
        ref="paymentRef"
        :pk="pk"
        :elements-options="elementsOptions"
        :confirm-params="confirmParams"
        />
        <div class="w-full flex items-center">
            <button class=" w-fit mx-auto mt-10 px-10 py-2 text-xl text-white hover:bg-transparent border-2 border-white hover:text-black hover:bg-white duration-300" @click="pay">Pay Now</button>
        </div>
        
    </div>
    <LoadingData v-else />
    
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:"PaymentPage",

    data() {
       
        return {
            pk: 'pk_test_51H4LzxLRh1ikRvHv72d6YU7tPLUU1Xah4ryiaAUQ4UxQ2jWgcaL6Yq5MAJqNWcXMmKAjjDQBSkwxH3Grfn6mGrPY00zYSDv0XI',
            elementsOptions: {
                appearance: {}
            },
            confirmParams: {
                return_url: 'http://localhost:3000/PaymentSuccess', // success url
            },
        }
    },
    async fetch() {
     await this.generatePaymentIntent();
    },
    computed:{
        ...mapGetters({
            getCart:'cart/getCart',
            totalPrice:'cart/getTotalPrice'
        }),
    },

    methods: {

        async generatePaymentIntent () {

            const paymentIntent = await this.$axios.$get(`http://bkpe-env.eba-hezmw5qh.ap-northeast-1.elasticbeanstalk.com/payment/create-payment-intent/${this.totalPrice*100}/`)
            this.elementsOptions.clientSecret = paymentIntent.clientSecret;
        
        },
        pay () {
            this.$refs.paymentRef.submit();
        },
    },
}
</script>