<template>

    <div class=" text-white py-10">
        
      <!-- Heading -->

      <div
        class="w-full pb-5 border-b-2 border-white text-2xl font-semibold mb-20"
      >
        <h2>MY ORDERS</h2>
      </div>

      <!-- Order List -->


      <div>
        
        <!-- Order-1 -->

        <div v-for="(order) in userOrders" :key="order.id" class="lg:grid md:grid lg:grid-cols-6 md:grid-cols-4 gap-5 p-5 mb-10 border-2 border-white hover:scale-105 duration-200">

          <!-- Order ID & Date -->

          <div class=" col-span-1">

          <!-- ID -->
            <h2 class="block mb-1 font-semibold text-lg">ID</h2>

            <p class=" block lg:mb-0 md:mb-0 sm:mb-5"> #{{ order.id }} </p>

          </div>

          <div class=" col-span-1">

            <!-- Date -->

            <h2 class="block mb-1 font-semibold text-lg">Placed On</h2>

            <p class=" block lg:mb-0 md:mb-0 sm:mb-5"> {{order.created_at}} </p>

          </div>

          <!-- Payment Status -->

          <div class="colspan-1 ">

            <!-- Heading -->

            <h2 class="block mb-3 font-semibold text-xl lg:w-fit mx-auto">Order Status</h2>

            <!-- Value -->

            <p class=" block lg:w-fit mx-auto text-lg sm:mb-5">{{order.order_status}}</p>

          </div>

          <!-- Order Status -->

          <!-- <div class=" col-span-1">

   

            <h2 class="block mb-3 font-semibold text-xl lg:w-fit mx-auto">Order Status</h2>

         
            <p class=" block lg:w-fit mx-auto text-lg sm:mb-5">Processing</p>

          </div> -->


          <!-- Order Total -->

          <div class=" col-span-2">

            <!-- Heading -->

            <h2 class="block mb-3 font-semibold text-xl lg:w-fit md:w-full sm:w-full lg:text-left md:text-left sm:text-center mx-auto">Order Total</h2>

            <!-- Value -->

            <p class=" block lg:w-fit md:w-full sm:w-full lg:text-left md:text-left sm:text-center mx-auto text-2xl font-bold text-blue-200">${{order.total_price}}</p>

          </div>

          <NuxtLink :to="{ name: 'UserOrderDetailsPage-id', params: { id: order.id } }">
              <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 duration-300 rounded-xl py-1 px-2 font-semibold">
                  View Details
              </button>
          </NuxtLink>

        </div>

      </div>

    </div>

</template>

<script>
import {mapGetters} from 'vuex'
export default {

  data() {
    return {
      
      userOrders:[]
      
    } 
  },

  computed:{
      ...mapGetters({
          user: 'auth/user',
          authenticated: 'auth/authenticated'
      }),
  },

  async fetch() {
    await this.getUserOrders()
  },

  methods: {
    async getUserOrders(){
        const data = await this.$axios.$get(`/order/user-order/?user_email=${this.user.email}`)
        this.userOrders = [...data]
    },
  }

}
</script>
