<template>
    <div class="lg:w-1/3 md:w-2/3 sm:w-5/6 mx-auto my-20">
        <!-- Back button -->

        <div class="block mt-10">
            <NuxtLink to="/">
                <button class="text-white text-xl ml-10 px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300">&lt; Go Back</button>
            </NuxtLink>
        </div>
        <!-- Heading -->

        <h2 class="text-4xl text-white font-bold mb-10">Payment Successful</h2>
        
    </div>
    
</template>

<script>
import {mapGetters} from 'vuex'
export default {

    computed:{
        ...mapGetters({
            shippingDetails:'orders/getShippingDetails',
            user:'auth/user',
            cart:'cart/getCart',
            totalPrice:'cart/getTotalPrice'
        }),
    }, 

    async mounted(){
        const { paymentIntent } = await this.$stripe.retrievePaymentIntent(this.$route.query.payment_intent_client_secret);
        console.log(paymentIntent)
    },

    methods: {
        orderPlaced(){
            const order={
                "shipping_info": {
                    "details": this.shippingDetails.address,
                    "city": this.shippingDetails.city,
                    "country": this.shippingDetails.country,
                    "postal_code": this.shippingDetails.postalCode,
                    "phone": this.shippingDetails.phone,
                    "user": this.user.id
                },
                "user": {
                    "username": this.user.username,
                    "is_superuser": this.user.is_superuser,
                    "email": this.user.email,
                    "is_verified": this.user.is_verified,
                    "is_active": this.user.is_active,
                    "is_staff": this.user.is_staff,
                    "auth_provider": this.user.auth_provider,
                    "first_name": this.user.first_name,
                    "last_name": this.user.last_name,
                    "phone_number": this.user.phone_number,
                    "gender": this.user.gender,
                    "about": this.user.about,
                    "birth_date": this.user.birth_date
                },
                "payment_status": "paid",
                "order_status": "Placed",
                "total_price": this.totalPrice
            }
            console.log(order)
            // await this.$axios.$post(`/order/`,order)

        },
        goBack() {
            this.$router.back();
        }
    },
}
        
</script>