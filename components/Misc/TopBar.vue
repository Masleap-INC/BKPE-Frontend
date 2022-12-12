<template>

    <section>

        <div class="bg-black w-full top-0">

            <div class="grid grid-flow-row-dense lg:grid lg:grid-cols-8 gap-5 w-full md:grid md:grid-cols-5 sm:grid sm:grid-cols-3 py-2">

                <!-- Left Column -->

                <div class=" lg:col-span-2 md:col-span-2 sm:col-span-3 mx-auto">

                    <!-- Login Panel -->

                    <div class=" inline-block px-5">

                        
                        <button v-if="authenticated" class="inline-block text-white mr-5"  @click="logout" >Logout</button>
                        <NuxtLink v-if="authenticated" to="/MyAccountPage">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </NuxtLink>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>


                        <h2 v-if="authenticated" class="inline-block text-white">{{user.username.split(' ')[0]}}</h2>
                        <NuxtLink v-else to="/UserLogin" >
                        <h2 class="inline-block text-white">Login</h2>

                        </NuxtLink>

                        
                    </div>

                    <!-- Cart -->

                    <div class="inline-block px-5">

                        <NuxtLink to="/MyCart">

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>

                        </NuxtLink>

                    </div>

                </div>

                <!-- Mid Column -->

                <div class=" lg:col-span-3 md:col-span-3 sm:col-span-6 mx-auto">

                    <h2 class="text-white text-center font-bold mx-auto"><a href="#" class=" hover:underline">BKPE MUSCLE CARS</a> | <a href="#" class=" hover:underline">BK CUSTOM CARS</a> | <a href="#" class=" hover:underline">DIY MUSCLE CAR KITS</a></h2>

                </div>


                <!-- Right Column -->

                <div class=" lg:col-span-3 md:col-span-6 sm:col-span-6">

                    <div class=" block text-white text-sm text-center bg-center mx-auto overflow-hidden">

                        <h2 :class="TextSlide1 ? 'block' : 'hidden' ">YOUR ONE STOP SHOP FOR ALL YOUR 1ST GEN CAMARO NEEDS</h2>

                        <h2 :class="TextSlide1 ? 'hidden' : 'block' ">LOW PRICE GUARANTEE – FIND A LOWER PRICE AND WE WILL MATCH IT</h2>

                    </div>                    

                </div>

            </div>

        </div>

    </section>

</template>


<script>
import {mapGetters} from 'vuex'
    export default {

        name: 'TopBar',

        data() {

            return {

                 TextSlide1: true,

            }

        },
        computed:{
            ...mapGetters({
                user: 'auth/user',
                authenticated: 'auth/authenticated'
            }),
        },

        beforeMount(){
            this.slider()
        },

        methods: {
            logout(){
                localStorage.removeItem("accessToken")
                this.$store.dispatch("auth/logout")
                this.$router.push('/');
            },

            slider () {

                if (this.TextSlide1){

                    setInterval(() => {

                        this.TextSlide1 = !this.TextSlide1;

                    }, 3000);
                    
                }

                else {

                    setInterval(() => {

                        this.TextSlide1 = !this.TextSlide1;

                    }, 3000);

                }

            }

        },

        

    }

</script>