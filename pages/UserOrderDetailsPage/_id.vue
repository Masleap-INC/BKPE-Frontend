<template>

    <div class="bg-[url('~/assets/page-background.png')] bg-fixed bg-cover bg-no-repeat h-full w-full text-white min-h-screen">

        <div class="grid grid-cols-5 lg:relative">


            <!-- Page Section -->

            

            <div class=" mb-10 lg:col-span-5 md:col-span-5 sm:col-span-5 px-5 w-full h-screen  overflow-y-auto lg:pt-0 md:pt-10 sm:pt-10" >
                <div class="flex justify-between mt-5">

                <!-- Back Button -->

                <div class="inline-block align-middle">
                    <button class=" text-white text-md px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300" @click="goBack">&lt; Go Back</button>
                </div>

                </div>
                <div>

                    <!-- Heading -->

                    <div class="mt-10 mb-5 pb-5 border-b-2 border-b-white">
                        <h2 class="text-4xl font-semibold">Order Details</h2>
                    </div>

                    <!-- Back and Navigate buttons -->

                    

                    <!-- Product Details -->

                    <div class="bg-blue-400 bg-opacity-30 mt-5 p-5 rounded-xl relative h-full">
                        <div>

                            <!-- Product Actions -->

                            <div class=" block w-fit mb-5 ml-auto">
                                <!-- Update Button -->

                                <!-- <button class=" inline-block mr-1 text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300">Update</button> -->

                            </div>

                            <!-- Product ID & Inventory -->

                            

                            <div class=" mt-5 mb-10">

                                <!-- Order Status -->

                                <span class=" text-xl block mb-5">

                                    <div class=" align-middle">
                                        
                                        <label for="inventory" class="mr-2">Status : <span class="text-xl font-semibold mr-3">{{ order.order_status }}</span></label>
                                       
                                    </div>

                                </span>

                            </div>

                            <div class="mb-10 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">

                                <!-- Order ID -->

                                <div>
                                    <h2 class=" "><span class="text-xl font-semibold mr-3">Order ID:</span> <span class="lg:text-lg md:text-lg sm:text-sm">#{{order.id}}</span> </h2>
                                </div>

                                <!-- Order Date -->

                                <div>
                                    <h2 class=" "><span class="text-xl font-semibold mr-3">Order Date:</span> <span class="lg:text-lg md:text-lg sm:text-sm">{{order.created_at}}</span> </h2>
                                </div>

                                <!-- Payment Status -->

                                <!-- <div>
                                    <h2 class=" "><span class="text-xl font-semibold mr-3">Payment Status:</span> <span class="lg:text-lg md:text-lg sm:text-sm">{{order.payment_status}}</span> </h2>
                                </div> -->

                                <!-- Payment Type -->

                                <div>
                                    <h2 class=" "><span class="text-xl font-semibold mr-3">Payment Type:</span> <span class="lg:text-lg md:text-lg sm:text-sm">{{order.payment_method}}</span> </h2>
                                </div>

                            </div>

                            <!-- Info -->

                            <!-- Customer Information -->

                            <div class="mb-10">

                                <!-- Heading -->

                                <div class="pb-1 mb-5 border-b-[2px] border-b-white">
                                    <h2 class=" text-2xl font-semibold">Customer Information</h2>
                                </div>

                                <!-- Info -->

                                <div class=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">

                                    <!-- User Name -->

                                    <div>
                                        <h2 class=" "><span class="text-xl font-semibold mr-3">User Name:</span> <span class="lg:text-lg md:text-lg sm:text-sm">{{order.first_name+" "+order.last_name}}</span> </h2>
                                    </div>

                                    <!-- Email -->

                                    <div>
                                        <h2 class=" "><span class="text-xl font-semibold mr-3">Email:</span> <span class="lg:text-lg md:text-lg sm:text-sm">{{order.email}}</span> </h2>
                                    </div>

                                    <!-- Phone -->

                                    <div>
                                        <h2 class=" "><span class="text-xl font-semibold mr-3">Phone:</span> <span class="lg:text-lg md:text-lg sm:text-sm">{{order.Phone}}</span> </h2>
                                    </div>

                                </div>

                            </div>


                            <!-- Shipping Information -->

                            <div class="mb-10">

                                <!-- Heading -->

                                <div class="pb-1 mb-5 border-b-[2px] border-b-white">
                                    <h2 class=" text-2xl font-semibold">Shipping Information</h2>
                                </div>

                                <!-- Info -->

                                <div class=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">

                                    <!-- Address -->

                                    <div>
                                        <h2 class=" "><span class="text-xl font-semibold mr-3">Address:</span> <span class="lg:text-lg md:text-lg sm:text-sm">{{order.address}}</span> </h2>
                                    </div>

                                    <!-- Country -->

                                    <div>
                                        <h2 class=" "><span class="text-xl font-semibold mr-3">Country:</span> <span class="lg:text-lg md:text-lg sm:text-sm">{{order.country}}</span> </h2>
                                    </div>

                                    <!-- City -->

                                    <div>
                                        <h2 class=" "><span class="text-xl font-semibold mr-3">City:</span> <span class="lg:text-lg md:text-lg sm:text-sm">{{order.city}}</span> </h2>
                                    </div>

                                    <!-- Zip -->

                                    <div>
                                        <h2 class=" "><span class="text-xl font-semibold mr-3">Zip:</span> <span class="lg:text-lg md:text-lg sm:text-sm">{{order.postal_code}}</span> </h2>
                                    </div>

                                </div>

                            </div>

                            <!-- Items -->

                            <div>

                                <!-- Heading -->

                                <div class="pb-1 mb-5 border-b-[2px] border-b-white">
                                    <h2 class=" text-2xl font-semibold">Items</h2>
                                </div>

                                <!-- Item List -->

                                <div>

                                    <div class="w-full overflow-x-auto max-h-[300px] overflow-y-auto">

                                        <table class="w-full text-left ">

                                            <thead>
                                                <tr class="border-b-2 border-b-white bg-blue-400 bg-opacity-30 text-xl">
                                                    <th class="p-3">Product ID</th>
                                                    <th class="p-3">Image</th>
                                                    <th class="p-3">Name</th>
                                                    <th class="p-3">Price</th>
                                                    <th class="p-3">Qty</th>
                                                    <th class="p-3">Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody class="">
                                                <tr v-for="item in orderedProducts" :key="item.id" class=" odd:bg-black odd:bg-opacity-30 even:bg-white even:bg-opacity-10">
                                                    <td class="p-3">{{item.product_id}}</td>
                                                    <td class="p-3"><img :src="item.product_image" alt="" class="h-16 w-20 object-cover"></td>
                                                    <td class="p-3">{{item.product_name}}</td>
                                                    <td class="p-3">${{ item.price / item.quantity }}</td>
                                                    <td class="p-3">{{item.quantity}}</td>
                                                    <td class="p-3">${{ item.price }}</td>
                                                </tr>

                                            </tbody>

                                        </table>

                                    </div>

                                    

                                    <!-- Total -->

                                    <div class="mt-5 w-full ml-auto">

                                        <table class="w-full">

                                            <tbody>

                                                <!-- Item SubTotal -->

                                                <tr>

                                                    <td class="py-3 pr-3 text-xl font-bold">Item Subtotal:</td>
                                                    <td class="py-3 text-xl text-right">${{order.sub_total}}</td>
                                                    <!-- <td class="py-3 text-xl font-bold text-right">${{order}}</td> -->

                                                </tr>

                                                <!-- Tax -->

                                                <tr>

                                                    <td class="py-3 pr-3 text-xl font-bold">Tax:</td>
                                                    <td class="py-3 text-xl text-right">${{order.vat}}</td>

                                                </tr>

                                                <!-- Shipping -->

                                                <tr class="border-b-2 border-white">

                                                    <td class="py-3 pr-3 text-xl font-bold">Shipping:</td>
                                                    <td class="py-3 text-xl text-right">${{order.shipping}}</td>

                                                </tr>

                                                <!-- Total -->

                                                <tr>

                                                    <td class="py-3 pr-3 text-xl font-bold">Total:</td>
                                                    <td class="py-3 text-xl font-bold text-right">${{order.total_price}}</td>

                                                </tr>

                                            </tbody>

                                        </table>
                                        
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                    </div>
            </div>

        </div>

    </div>

</template>

<script>

export default {
    
    data(){
        return {

            orderedProducts:[],
            order:{}
        }
    },
    mounted(){
        if (!this.$store.getters['auth/authenticated']) {
            this.$router.push("/");
            this.$store.dispatch('alert/addAlert',{message:'Please login', type: 'error'})
        }
    },
    async fetch() {
        await this.fetchOrderData();
    },
    methods: {

        async fetchOrderData() {
            try {
                const { id } = this.$route.params;
                const order = await this.$axios.$get(`/order/${id}`);
                const orderedProducts = await this.$axios.$get(`/order/cart-list/?cart_id=${order.cart_id}`);

                this.order = order;
                this.orderedProducts = orderedProducts;
                this.order_status = order.order_status;
            } catch (error) {
                console.error('Error fetching order data:', error);
            }
        },

        async getOrderItems(){
            const data = await this.$axios.$get(`/order/cart-list/?cart_id=${this.order.cart_id}`);
            this.orderedProducts = data
        },

        goBack() {
            this.$router.push('/MyAccountPage');
        }
    },
   

}
</script>