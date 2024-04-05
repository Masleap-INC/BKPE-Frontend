<template>
    <div class="lg:w-1/3 md:w-2/3 sm:w-5/6 mx-auto my-20">
        <!-- Back button -->

        <div class="block mt-10">
            <!-- <NuxtLink to="/"> -->
                <button @click="printOrder" class="text-white text-xl ml-10 px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300">&lt; Go Back</button>
            <!-- </NuxtLink> -->
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
            orderDetails:'orders/getOrderDetails',
            user:'auth/user',
            cart:'cart/getCart',
            totalPrice:'cart/getTotalPrice'
        }),
    }, 

    async mounted(){
        const { paymentIntent } = await this.$stripe.paymentIntents.retrieve('pi_3P1xYuLRh1ikRvHv0oB2xTTy_secret_AkLN7XWyIvgV6n5Z8y7yCrnrh');
        console.log(paymentIntent)
    },

    methods: {
        async orderPlaced(){
            const response = await this.$axios.$post(`/order/complete-order/`,{
                vat:this.orderDetails.vat,
                shipping:this.orderDetails.shipping,
                sub_total:this.totalPrice,
                total_price:this.orderDetails.vat + this.orderDetail.shipping + this.totalPrice,
                first_name:this.orderDetails.firstName,
                last_name:this.orderDetails.lastName,
                address:this.orderDetails.address,
                city:this.orderDetails.city,
                country:this.orderDetails.country,
                postal_code:this.orderDetails.postalCode,
                Phone:this.orderDetails.phone,
                payment_method:this.orderDetails.selectedPaymentMethod,
                cart_id:localStorage.getItem('cart_id'),
                order_status:'placed',
                email:this.orderDetails.email
            },{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
        
            console.log(response)

        },
        goBack() {
            this.$router.back();
        }
    },
}
        
</script>