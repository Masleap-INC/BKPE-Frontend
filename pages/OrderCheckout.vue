<template>

    <div>


        <!-- Back button -->

        <div class="block mt-10 px-10">
            <NuxtLink to="/">
            <button class="text-white text-xl px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300" >&lt; Go Back</button>
            </NuxtLink>
        </div>

        <!-- Page Heading -->

        <div class="block px-10">
            <h2
                class="py-10 sm:pt-10 text-white text-3xl text-left font-bold"
            >Shipping Details</h2>
        </div>


        <div class="lg:grid lg:grid-cols-2 gap-5 w-full px-10 mb-20">

            <div>

                <!-- Shipping info Form -->

                <div>

                    

                    <!-- Form -->

                    <div class="mb-20 ">

                        <form @submit.prevent="placeOrder" class="w-5/6 lg:mx-0 md:mx-auto sm:mx-auto">

                            <!-- Email -->

                            <div class="mb-5">
                                <label for="email" class="block text-white text-2xl mb-3">Email</label>
                                <input id="email" v-model="orderDetails.email" type="email" name="email" class="px-3 py-2 text-xl w-full rounded-md" required>
                            </div>


                            <!-- First Name -->

                            <div class="mb-5">
                                <label for="first-name" class="block text-white text-2xl mb-3">First Name</label>
                                <input id="first-name" v-model="orderDetails.firstName" type="text" name="first-name" class="px-3 py-2 text-xl w-full rounded-md" required>
                            </div>


                            <!-- Last Name -->

                            <div class="mb-5">
                                <label for="Last-name" class="block text-white text-2xl mb-3">Last Name</label>
                                <input id="Last-name" v-model="orderDetails.lastName" type="text" name="Last-name" class="px-3 py-2 text-xl w-full rounded-md" required>
                            </div>


                            <!-- Address -->

                            <div class="mb-5">
                                <label for="address" class="block text-white text-2xl mb-3">Address</label>
                                <textarea id="address" v-model="orderDetails.address" type="text" name="address" class="px-3 py-2 text-xl w-full rounded-md" required></textarea>
                            </div>


                            <!-- City & Country -->

                            <div class="grid grid-cols-2 gap-5 mb-5">

                                <!-- City -->

                                <div>
                                    <label for="city" class="block text-white text-2xl mb-3">City</label>
                                    <input id="city" v-model="orderDetails.city" type="text" name="city" class="px-3 py-2 text-xl w-full rounded-md" required>
                                </div>

                                <!-- Country -->

                                <div>
                                    <label for="country" class="block text-white text-2xl mb-3">Country</label>
                                    <input id="country" v-model="orderDetails.country"  type="text" name="country" class="px-3 py-2 text-xl w-full rounded-md" required>
                                </div>

                            </div>



                            <!-- Phone & zip code -->

                            <div class="grid grid-cols-2 gap-5 mb-5">

                                <!-- Zip Code -->

                                <div>
                                    <label for="zip" class="block text-white text-2xl mb-3">Postal Code</label>
                                    <input id="zip" v-model="orderDetails.postalCode" type="text" name="zip" class="px-3 py-2 text-xl w-full rounded-md" pattern="\d*" required>
                                </div>

                                <!-- Phone -->

                                <div>
                                    <label for="phone" class="block text-white text-2xl mb-3">Phone</label>
                                    <input id="phone" v-model="orderDetails.phone" type="number" name="phone" class="px-3 py-2 text-xl w-full rounded-md" required>
                                </div>

                            </div>

                            <!-- Payment Method -->

                            <div>
                                <label for="payment-method" class="block text-white text-2xl mb-3">Payment Method</label>

                                <select v-model="orderDetails.selectedPaymentMethod" id="payment-method" name="payment-method" class="px-5 py-3 text-xl rounded-md">
                                    <option value="online">Pay Online</option>
                                    <option value="cash-on-delivery">Cash on Delivery</option>
                                </select>
                            </div>

                            
                            <!-- Submit Button -->

                            <!-- <div v-if="getCart.length>0 ? true : false" class="w-full mt-10"> -->
                                
                                <button class="w-full py-2 text-2xl text-white bg-transparent border-2 border-white rounded-md hover:bg-blue-600 hover:text-white duration-300" type="submit">Continue</button>
                                
                                
                            <!-- </div> -->

                            
                        </form>

                    </div>

                </div>

            </div>

            <!-- Cart Items & Total -->

            <div class="w-full">

                <!-- Total -->

                <div class="text-white border-4 border-white p-5 w-5/6 mb-10 lg:mx-0 md:mx-auto sm:mx-auto bg-black bg-opacity-60">

                    <!-- Heading -->

                    <h2 class="text-center text-3xl font-semibold pb-10">Order Summary</h2>

                    <!-- The Box -->

                    <div class="grid grid-rows-4">

                        <!-- Row 1 (Sub Total) -->

                        <div class="grid grid-cols-2 gap-10 mb-3">

                            <!-- Col 1 -->

                            <div class=" text-xl font-semibold">Sub Total</div>

                            <!-- Col 2 -->

                            <div class=" text-2xl text-right w-full">${{totalPrice}}</div>
                        </div>

                        <!-- Row 2 (Shipping) -->

                        <div class="grid grid-cols-2 gap-32 mb-3">

                            <!-- Col 1 -->

                            <div class=" text-xl font-semibold">Shipping</div>

                            <!-- Col 2 -->

                            <div class=" text-2xl text-right w-full">$0</div>
                        </div>


                        <!-- Row 3 (vat) -->

                        <div class="grid grid-cols-2 gap-32 pb-3 border-b-2 border-b-white">

                            <!-- Col 1 -->

                            <div class=" text-xl font-semibold">VAT</div>

                            <!-- Col 2 -->

                            <div class=" text-2xl text-right w-full">$0</div>
                        </div>


                        <!-- Row 4 (Total) -->

                        <div class="grid grid-cols-2 gap-32 mt-3">

                            <!-- Col 1 -->

                            <div class=" text-2xl font-semibold">Total</div>

                            <!-- Col 2 -->

                            <div class=" text-2xl text-right w-full">${{totalPrice}}</div>
                        </div>
                    </div>
                </div>

                <!-- Cart Items -->
                
                <div class="w-full h-screen overflow-y-auto">
                    <MiscCartItems />
                </div>

            </div>

        </div>

        
    </div>

</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return{
            
            orderDetails:{
                selectedPaymentMethod:'online',
                shipping:0,
                vat: 0,
                email:'',
                firstName:'',
                lastName:'',
                address:'',
                city:'',
                country:'',
                postalCode:'',
                phone:''
            }
        }
    },
    computed:{
        ...mapGetters({
            getCart:'cart/getCart',
            totalPrice:'cart/getTotalPrice'
        }),
    }, 
    methods: {
            ...mapActions({
                setOrderDetails:'orders/setOrderDetails',
            }),
            async placeOrder(){
                if(this.selectedPaymentMethod === 'cash-on-delivery'){
                    await this.$axios.$post(`/order/complete-order/`,{
                        vat:this.orderDetails.vat,
                        shipping:this.orderDetail.shipping,
                        sub_total:this.totalPrice,
                        total_price:this.orderDetail.vat + this.orderDetail.shipping + this.totalPrice,
                        first_name:this.orderDetail.firstName,
                        last_name:this.orderDetail.lastName,
                        address:this.orderDetail.address,
                        city:this.orderDetail.city,
                        country:this.orderDetail.country,
                        postal_code:this.orderDetail.postalCode,
                        Phone:this.orderDetail.phone,
                        payment_method:this.orderDetails.selectedPaymentMethod,
                        cart_id:localStorage.getItem('cart_id'),
                        order_status:'placed',
                        email:this.orderDetail.email
                    },{
                        headers:{
                            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                        }
                    })
                    this.$router.push('/')
                }else{
                    this.setOrderDetails(this.orderDetails)
                    this.$router.push('/Payment')
                }
                
                
            },

            goBack() {
                this.$router.back();
            }

        },
    }
        
</script>