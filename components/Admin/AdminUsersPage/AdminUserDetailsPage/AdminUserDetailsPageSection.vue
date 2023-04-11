<template>

    <div>

        <!-- Heading -->

        <div class="mt-10 mb-5 pb-5 border-b-2 border-b-white">
            <h2 class="text-4xl font-semibold">User Details</h2>
        </div>

        <!-- Back and Navigate buttons -->

        <div class="flex justify-between mt-5">

            <!-- Back Button -->

            <div class="inline-block align-middle">
                <button class=" text-white text-md px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300" @click="goBack">&lt; Go Back</button>
            </div>

            <!-- Navigate Button -->

            <div class="text-white inline-block align-middle py-2">

                <span class="">
                    <NuxtLink :to="{name:'Admin-AdminUserDetails-idx-id', params:{idx:this.prevUser(),id:this.users[this.prevUser()].id}}">
                        <button  class="px-2 rounded-xl hover:text-blue-600 hover:bg-white duration-300">&#8592; Prev</button>
                    </NuxtLink>
                    
                </span>

                <span class="px-1">|</span>

                <span>
                    <NuxtLink :to="{name:'Admin-AdminUserDetails-idx-id', params:{idx:this.nextUser(),id:this.users[this.nextUser()].id}}">
                        <button class="px-2 rounded-xl hover:text-blue-600 hover:bg-white duration-300">Next &#8594;</button>
                    </NuxtLink>
                    
                </span>

            </div>
        </div>

        <!-- User Details -->

        <div class="bg-blue-400 bg-opacity-30 mt-5 p-5 rounded-xl relative h-full">

            <div>
                <!-- User Actions -->

                <div class="block w-fit mb-5 ml-auto">
                <!-- Delete Button -->

                <button
                    class="inline-block mr-1 text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300"
                >
                    Delete
                </button>
                </div>

                <!-- User ID -->

                <div class="mb-5">
                <h2 class=" ">
                    <span class="text-xl font-semibold mr-3">User ID:</span>
                    <span class="lg:text-lg md:text-lg sm:text-sm"
                    >#{{users[currentIndex].id}}</span
                    >
                </h2>
                </div>

                <!-- Details -->

                <div class="grid lg:grid-cols-2 gap-5">
                <div>
                    <!-- Heading -->

                    <div class="pb-1 mb-5 border-b-[2px] border-b-white">
                    <h2 class="text-2xl font-semibold">Personal Information</h2>
                    </div>

                    <!-- Info -->

                    <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                    <!-- Profile Image -->

                    <div class="m-auto w-44 h-44 rounded-full">
                        <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        class="w-44 h-44 rounded-full object-cover"
                        alt="Profile Image"
                        />
                    </div>

                    <div class="">
                        <!-- First Name -->

                        <div class="mb-5">
                        <h2 class=" ">
                            <span class="text-xl font-semibold mr-3">First Name:</span>
                            <span class="lg:text-lg md:text-lg sm:text-sm">John</span>
                        </h2>
                        </div>

                        <!-- Last Name -->

                        <div class="mb-5">
                        <h2 class=" ">
                            <span class="text-xl font-semibold mr-3">Last Name:</span>
                            <span class="lg:text-lg md:text-lg sm:text-sm">Doe</span>
                        </h2>
                        </div>

                        <!-- Email -->

                        <div class="mb-5">
                        <h2 class=" ">
                            <span class="text-xl font-semibold mr-3">Email:</span>
                            <span class="lg:text-lg md:text-lg sm:text-sm"
                            >johndoe@gmail.com</span
                            >
                        </h2>
                        </div>

                        <!-- Phone -->

                        <div class="mb-5">
                        <h2 class=" ">
                            <span class="text-xl font-semibold mr-3">Phone:</span>
                            <span class="lg:text-lg md:text-lg sm:text-sm"
                            >+123456789123456</span
                            >
                        </h2>
                        </div>
                    </div>
                    </div>
                </div>

                <!-- Address -->

                <div>
                    <!-- Heading -->

                    <div class="pb-1 mb-5 border-b-[2px] border-b-white">
                    <h2 class="text-2xl font-semibold">Address</h2>
                    </div>

                    <!-- Info -->

                    <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                    <!-- Address -->

                    <div>
                        <h2 class=" ">
                        <span class="text-xl font-semibold mr-3">Address:</span>
                        <span class="lg:text-lg md:text-lg sm:text-sm"
                            >173b, Rd-23, Mohakhali DOHS, Dhaka-1207</span
                        >
                        </h2>
                    </div>

                    <!-- Country -->

                    <div>
                        <h2 class=" ">
                        <span class="text-xl font-semibold mr-3">Country:</span>
                        <span class="lg:text-lg md:text-lg sm:text-sm"
                            >United States</span
                        >
                        </h2>
                    </div>

                    <!-- City -->

                    <div>
                        <h2 class=" ">
                        <span class="text-xl font-semibold mr-3">City:</span>
                        <span class="lg:text-lg md:text-lg sm:text-sm">New York</span>
                        </h2>
                    </div>

                    <!-- Zip -->

                    <div>
                        <h2 class=" ">
                        <span class="text-xl font-semibold mr-3">Zip:</span>
                        <span class="lg:text-lg md:text-lg sm:text-sm">12345</span>
                        </h2>
                    </div>
                    </div>
                </div>
                </div>

                <!-- Orders -->

                <div class="mb-10">
                <!-- Heading -->

                <div class="pb-1 mb-5 border-b-[2px] border-b-white">
                    <h2 class="text-2xl font-semibold">Orders</h2>
                </div>

                <!-- Table -->

                <div class="overflow-x-auto max-h-[300px] overflow-y-auto">
                    <table class="table-auto w-full">
                    <thead>
                        <tr>
                        <th class="px-4 py-2">Order ID</th>
                        <th class="px-4 py-2">Date</th>
                        <th class="px-4 py-2">Total</th>
                        <th class="px-4 py-2">Status</th>
                        <th class="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td class="border px-4 py-2">#123456789123456789123456789</td>
                        <td class="border px-4 py-2">12/12/2021</td>
                        <td class="border px-4 py-2">$123.45</td>
                        <td class="border px-4 py-2">Pending</td>
                        <td class="border px-4 py-2">
                            <button
                            class="inline-block mr-1 text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300"
                            >
                            View
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td class="border px-4 py-2">#123456789123456789123456789</td>
                        <td class="border px-4 py-2">12/12/2021</td>
                        <td class="border px-4 py-2">$123.45</td>
                        <td class="border px-4 py-2">Pending</td>
                        <td class="border px-4 py-2">
                            <button
                            class="inline-block mr-1 text-white text-sm px-2 py-1 border-2 border-white hover:bg-white hover:text-blue-600 duration-300"
                            >
                            View
                            </button>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
    props: ['index'],
    data(){
        return {
            currentIndex:Number(this.index),
   
        }
    },

    computed:{
        ...mapGetters({
            users: 'users/users',
        }),
    },
    methods: {
        nextUser(){
            if(this.users.length - 1 > this.currentIndex){
                return this.currentIndex + 1
            }else{
                return this.currentIndex
            }
        },
        prevUser(){
            if( this.currentIndex >= 1){
                return this.currentIndex - 1
            }else{
                return this.currentIndex
            }
        },
        goBack() {
            this.$router.back();
        }
    },
    
}
</script>