<template>
    <div>
        <div class="block mt-10">
           
           

        </div>
        <div class=" text-center my-20">

            <h2 class="text-4xl text-white font-bold mb-10">Payment Successful</h2>

            <button @click="goBack" class="text-white mt-10 px-3 py-2 border-2 border-white hover:bg-white hover:text-black duration-300 w-fit mx-auto">&lt; Back to Home</button>

        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {

    computed:{
        ...mapGetters({
            user:'auth/user',
            cart:'cart/getCart',
            totalPrice:'cart/getTotalPrice'
        }),
    }, 

    async mounted(){
        

        if (!this.$store.getters['auth/authenticated']) {
            this.$router.push("/");
            this.$store.dispatch('alert/addAlert',{message:'Please login', type: 'error'})
        }


        const data = await this.$axios.$get(`http://54.146.158.4/payment/status/?payment_intent_id=${this.$route.query.payment_intent}`)
        if(data.status === "succeeded"){
            this.orderPlaced(data.metadata)
        }else{
            this.$router.push('/')
        }
        

    },

    methods: {
        async orderPlaced(orderDetails){
            const response = await this.$axios.$post(`/order/complete-order/`,{
                vat:orderDetails.vat,
                shipping:orderDetails.shipping,
                sub_total:orderDetails.sub_total,
                total_price:orderDetails.total_price,
                first_name:orderDetails.first_name,
                last_name:orderDetails.last_name,
                address:orderDetails.address,
                city:orderDetails.city,
                country:orderDetails.country,
                postal_code:orderDetails.postal_code,
                Phone:orderDetails.phone,
                payment_method:orderDetails.payment_method,
                cart_id:orderDetails.cart_id,
                order_status:orderDetails.order_status,
                email:orderDetails.email
            },{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
        
            console.log(response)

        },
        goBack() {
            this.$router.push('/');
        }
    },
}
        
</script>