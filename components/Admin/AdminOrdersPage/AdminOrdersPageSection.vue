np<template>
    <div>
  
      <!-- Heading -->
  
      <div class="mt-10 mb-5 pb-5 border-b-2 border-b-white">
        <h2 class="text-4xl font-semibold">Orders</h2>
      </div>
  
  
      <!-- Search Bar -->
  
      <div class=" text-black">
            <div class="lg:w-2/3 md:w-2/3 sm:w-5/6 mx-auto py-5 ">
        
                <div class="bg-white grid grid-cols-6 py-1 rounded-xl"> 

                    <input   v-model="searchKey" v-on:keydown="(e)=>search(e)" type="number" placeholder="Order Id" class=" col-span-5 inline-block rounded-xl h-auto text-xl py-3 px-3 ml-3  focus:outline-none" >

                    <button @click="()=>search({key:'Enter'})" class="inline-block mx-auto border-l-2 border-gray-300 px-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>

                </div>

            </div>
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
                      <tr v-for="(order) in orders" :key="order.id" class=" odd:bg-black odd:bg-opacity-30 even:bg-white even:bg-opacity-10">
                          <td class="p-3">{{order.id}}</td>
                          <td class="p-3">{{order.created_at}}</td>
                          <td class="p-3">{{order.first_name +" "+ order.last_name}}</td>
                          <td class="p-3">{{order.email}}</td>
                          <td class="p-3">{{order.order_status}}</td>
                          <td class="p-3">${{order.total_price}}</td>
                          <td class="p-3">
                            <NuxtLink :to="{ name: 'Admin-AdminOrderDetails-idx', params: { idx: order.id } }">
                                <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-1 px-2 font-semibold">
                                    View Details
                                </button>
                            </NuxtLink>
                             
                          </td>
                      </tr>
  
                  </tbody>
              </table>
              <!-- Pagination -->
             <div class="mt-5 flex justify-center">
                <button @click="prev" v-if="previousPage" :disabled="!previousPage" class="mr-2 text-white text-sm px-3 py-1  hover:bg-white hover:text-black duration-300">
                    &lt;- Prev
                </button>
                <button @click="next" v-if="nextPage" :disabled="!nextPage" class="text-white text-sm px-3 py-2  hover:bg-white hover:text-black duration-300">
                    Next ->
                </button>
            </div>
          </div>
  
      </div>
  
    </div>
  </template>
  
  <script>
  import {mapGetters} from 'vuex'
  
  export default {
    data(){
        return{
            searchKey:'',
            orders:[],
            nextPage:null,
            previousPage:null,
        }
    },
    computed:{
        ...mapGetters({
            storeOrders: 'orders/orders',
        }),
    },
    async fetch(){
        await this.getOrders()
    },

    methods: {
        async getOrders(url = '/order/order-list') {
            try {
                const data = await this.$axios.$get(url);
                this.orders = data.results;
                this.nextPage = data.next;
                this.previousPage = data.previous;
            } catch (error) {
                console.error('Error fetching Orders:', error);
            }
        },
        async next() {
            if (this.nextPage) {
                await this.getOrders(this.nextPage);
            }
        },
        async prev() {
            if (this.previousPage) {
                await this.getOrders(this.previousPage);
            }
        },
        async search(e){ 
          
            if(e.key === 'Enter'){
                if (this.searchKey === '' || isNaN(this.searchKey)) {
                    // If search key is empty or not a number, reset orders to original data
                    this.orders = this.storeOrders;
                } else {
                    // If search key is a number, fetch data using API
                    const data = await this.$axios.$get(`/order/${this.searchKey}/`);
                    this.orders = [data];
                }
                
            } 
            
        },
        UploadFile() {
            this.$refs.fileUpload.click();
        },
    },
  
  }
  
  </script>