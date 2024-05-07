<template>
    <div>

        
        <div class="block mt-10 px-10">
            <NuxtLink to="/">
            <button class="text-white text-xl px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300">&lt; Go Back</button>
            </NuxtLink>
        </div>
 
        <!-- Page Heading -->

        <div>
            <h2
                class="p-10 pt-20 sm:p-5 sm:pt-10 text-white text-3xl text-left font-bold"
            >Shopping Cart</h2>
        </div>

        <!-- Cart Items and Total -->

        <div
            class="text-white px-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-20 sm:px-5 my-10 "
        >
            <!-- Cart Items -->

            <div class="col-span-2">
                <MiscCartItems />
            </div>

            <!-- Total -->
            
            <div class="w-full lg:p-5 md:p-5 text-white lg:col-span-1 md:col-span-2 sm:col-span-2 sm:my-10">

                <!-- The Box -->

                <div class="p-5 border-4 border-white w-full">

                    <h2 class="text-4xl text-center font-bold mb-14">Order Summary</h2>

                    <table class="mx-auto text-2xl w-full table-auto ">

                        <tr>
                            <td class="font-semibold pr-5">Subtotal:</td>
                            <td>${{totalPrice.toFixed(2)}}</td>
                        </tr>

                        <tr class="border-b-2 border-b-white pb-10">
                            <td class="font-semibold pr-5">VAT:</td>
                            <td>$0</td>
                        </tr>

                        <tr>
                            <td class="font-bold pr-5 ">Order Total:</td>
                            <td>${{totalPrice.toFixed(2)}}</td>
                        </tr>

                    </table>

                    <!-- Checkout Button -->

                    <div v-if="getCart.length>0 ? true : false" class="w-fit mx-auto" >

                        <NuxtLink to="/OrderCheckout" > <button class="mt-10 bg-white px-10 py-2 text-xl text-black border-2 border-white hover:text-white hover:bg-transparent duration-300">Checkout</button></NuxtLink>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {mapGetters} from 'vuex'
export default {
    
    name: "MyCart",
    data () {
        return {
            cartItems: [],
        };
    },

    computed:{
        ...mapGetters({
            getCart:'cart/getCart',
            totalPrice:'cart/getTotalPrice'
        }),
    },

    mounted(){  
        
        if (!this.$store.getters['auth/authenticated']) {
            this.$router.push("/");
            this.$store.dispatch('alert/addAlert',{message:'Please login', type: 'error'})
        }
    
        this.$store.dispatch("cart/fetchCartLocalstorage");
    },
    
    methods: {
        goBack() {
            this.$router.back()
        }
    }
    
}

</script>