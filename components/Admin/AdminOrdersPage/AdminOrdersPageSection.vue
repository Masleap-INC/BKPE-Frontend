<template>
    <div>
  
      <!-- Heading -->
  
      <div class="mt-10 mb-5 pb-5 border-b-2 border-b-white">
        <h2 class="text-4xl font-semibold">Orders</h2>
      </div>
  
  
      <!-- Search Bar -->
  
      <div class=" text-black">
          <SearchBar />
      </div>
  
      <!-- Product Table -->
  
      <div>
  
          <!-- Table -->
  
          <div class="mt-10">
  
              <table class="w-full text-left table-auto">
                  <thead>
                      <tr class="border-b-2 border-b-white bg-blue-400 bg-opacity-30 text-xl">
                          <th class="p-3">ID</th>
                          <th class="p-3">Order Date</th>
                          <th class="p-3">Customer Name</th>
                          <th class="p-3">Customer Email</th>
                          <th class="p-3">Status</th>
                          <th class="p-3">Total</th>
                          <th class="p-3">Details</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(order,index) in orders" :key="order.id" class=" odd:bg-black odd:bg-opacity-30 even:bg-white even:bg-opacity-10">
                          <td class="p-3">{{order.id}}</td>
                          <td class="p-3">{{order.created_at}}</td>
                          <td class="p-3">{{order.user.username}}</td>
                          <td class="p-3">{{order.user.email}}</td>
                          <td class="p-3">{{order.order_status}}</td>
                          <td class="p-3">${{order.total_price}}</td>
                          <td class="p-3">
                            <NuxtLink :to="{name:'Admin-AdminOrderDetails-idx', params:{idx:index}}">
                                <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-1 px-2 font-semibold">
                                    View Details
                                </button>
                            </NuxtLink>
                             
                          </td>
                      </tr>
  
                  </tbody>
              </table>
          </div>
  
      </div>
  
    </div>
  </template>
  
  <script>
  import {mapGetters} from 'vuex'
  import SearchBar from '~/components/HomePage/SearchBar.vue'
  
  export default {


  
    components: {
        SearchBar
    },
    computed:{
        ...mapGetters({
            orders: 'orders/orders',
        }),
    },
    methods: {
        UploadFile() {
            this.$refs.fileUpload.click();
        },
    },
  
  }
  
  </script>