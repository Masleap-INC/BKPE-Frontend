
<template>

    <div>
        
        <div class=" w-5/6 mx-auto pb-10">

            <!-- Heading -->



            <div class=" lg:grid lg:grid-cols-3 py-5 mt-5 h-full w-full border-b-2 border-white">

                <!-- Name -->

                <div class=" lg:col-span-2 w-fit text-left">
                        
                        <h2 class="text-3xl text-white font-semibold py-5 w-fit mx-auto">
                            {{user.username}}
                            <!-- khgjgv -->
                        </h2>
                </div>

                <!-- Logout Button -->

                <div v-if="user.role === 'admin'" class=" col-span-1 h-fit my-auto w-fit mx-auto lg:mr-0">

                    <button class="px-3 py-2 border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300" @click="dashboard">Dashboard</button>

                </div>

            </div>

            <!-- Tab Menu -->

            <div class="w-full bg-black py-5">

                <!-- Menu -->

                <div class="w-fit mx-auto">

                    <ul class="text-white font-semibold text-xl">

                        <li class=" inline-block mr-5">

                            <button :class=" ProfileTab ? 'border-b-2 border-white' : ' border-none'" class="px-3 py-2 w-fit" @click="selectProfileTab">PROFILE</button>

                        </li>


                        <li class=" inline-block mr-5">

                            <button :class="OrdersTab ? 'border-b-2 border-white' : ' border-none'" class="px-3 py-2 w-fit" @click="selectOrdersTab"> ORDERS</button>

                        </li>


                        <li class=" inline-block">

                            <button :class="AddressTab ? 'border-b-2 border-white' : ' border-none'" class="px-3 py-2 w-fit" @click="selectAddressTab">ADDRESS</button>

                        </li>

                    </ul>

                </div>

            </div>


            <!-- Tab Pages -->

            <div>

                <!-- My Profile -->

                <div v-if="ProfileTab">
                    
                    <MyProfile />
                    
                </div>

                <!-- My Orders -->

                <div v-if="OrdersTab">
                    
                    <MyOrders />
                    
                </div>

                <!-- My Profile -->

                <div v-if="AddressTab">
                    
                    <MyAddress />
                    
                </div>

            </div>


        </div>

    </div>

</template>

<script>
import {mapGetters} from 'vuex'
import MyProfile from './MyProfile.vue'
import MyOrders from './MyOrders.vue'
import MyAddress from './MyAddress.vue'

    export default {

        components: {
            MyProfile,
            MyOrders,
            MyAddress
        },

        data() {

            return {

                ProfileTab: true,
                OrdersTab: false,
                AddressTab: false,

            }
        },
        
        computed:{
            ...mapGetters({
                user: 'auth/user',
                authenticated: 'auth/authenticated'
            }),
        },


        methods: {

            dashboard(){
                this.$router.push('/Admin/AdminHomePage')
            },

            selectProfileTab() {
                
                this.ProfileTab = true;
                this.OrdersTab = false;
                this.AddressTab = false;

            },

            selectOrdersTab() {

                this.ProfileTab = false;
                this.OrdersTab = true;
                this.AddressTab = false;

            },

            selectAddressTab() {

                this.ProfileTab = false;
                this.OrdersTab = false;
                this.AddressTab = true;

            },


        },
        
    }


</script>

