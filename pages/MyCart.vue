<template>
    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full">
        <!-- Top Bar -->

        <div>
            <TopBar />
        </div>

        <!-- Back button -->

        <div class="block mt-10">
            <button class="text-white text-xl ml-5 px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300" @click="goBack">&lt; Go Back</button>
        </div>

        <!-- Page Heading -->

        <div class="block">
            <h2
                class="p-10 sm:p-5 sm:pt-10 text-white text-3xl text-left font-bold"
            >Shopping Cart</h2>
        </div>

        <!-- Cart Items and Total -->

        <div
            class="text-white px-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 sm:px-5 my-10 "
        >
            <!-- Cart Items -->

            <div class="col-span-2">
                <CartItems />
            </div>

            <!-- Total -->

            <div class="w-full lg:p-5 md:p-5 text-white lg:col-span-1 md:col-span-2 sm:col-span-2 sm:my-10">

                <!-- The Box -->

                <div class="p-5 border-4 border-white w-full">

                    <h2 class="text-4xl text-center font-bold mb-14">Order Summary</h2>

                    <table class="mx-auto text-2xl w-full table-auto ">

                        <tr>
                            <td class="font-semibold pr-5">Subtotal:</td>
                            <td>$100</td>
                        </tr>

                        <tr class="border-b-2 border-b-white pb-10">
                            <td class="font-semibold pr-5">VAT:</td>
                            <td>$10</td>
                        </tr>

                        <tr>
                            <td class="font-bold pr-5 ">Order Total:</td>
                            <td>$110</td>
                        </tr>

                    </table>

                    <!-- Checkout Button -->

                    <div class="w-fit mx-auto">

                        <NuxtLink to="/" > <button class="mt-10 bg-white px-10 py-2 text-xl text-black border-2 border-white hover:text-white hover:bg-transparent duration-300">Cheakout</button></NuxtLink>

                    </div>

                    

                </div>
            </div>
        </div>

        <!-- Footer -->

        <div>
            <Footer/>
        </div>
    </div>
</template>


<script>
import Footer from "../components/Misc/Footer.vue";
import CartItems from "../components/Misc/CartItems.vue";
import TopBar from "../components/Misc/TopBar.vue";

export default {
    name: "MyCart",

    components: { Footer, CartItems, TopBar },

    methods: {

        goBack() {
            this.$router.back();
        }

    },

    
}

</script>