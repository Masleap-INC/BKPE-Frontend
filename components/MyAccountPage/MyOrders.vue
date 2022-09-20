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

        <div class="lg:grid md:grid lg:grid-cols-6 md:grid-cols-4 gap-5 p-5 mb-10 border-2 border-white hover:scale-105 duration-200">

          <!-- Order ID & Date -->

          <div class=" col-span-2">

            <!-- ID -->

            <h2 class="block mb-3 font-bold text-2xl">#00098563214</h2>

            <!-- Date -->

            <h2 class="block mb-1 font-semibold text-lg">Placed On</h2>

            <p class=" block lg:mb-0 md:mb-0 sm:mb-5">9-20-22</p>

          </div>

          <!-- Payment Status -->

          <div class="colspan-1 ">

            <!-- Heading -->

            <h2 class="block mb-3 font-semibold text-xl lg:w-fit mx-auto">Payment Status</h2>

            <!-- Value -->

            <p class=" block lg:w-fit mx-auto text-lg sm:mb-5">Paid</p>

          </div>

          <!-- Order Status -->

          <div class=" col-span-1">

            <!-- Heading -->

            <h2 class="block mb-3 font-semibold text-xl lg:w-fit mx-auto">Order Status</h2>

            <!-- Value -->

            <p class=" block lg:w-fit mx-auto text-lg sm:mb-5">Processing</p>

          </div>


          <!-- Order Total -->

          <div class=" col-span-2">

            <!-- Heading -->

            <h2 class="block mb-3 font-semibold text-xl lg:w-fit md:w-full sm:w-full lg:text-left md:text-left sm:text-center mx-auto">Order Total</h2>

            <!-- Value -->

            <p class=" block lg:w-fit md:w-full sm:w-full lg:text-left md:text-left sm:text-center mx-auto text-2xl font-bold text-blue-200">$99000</p>

          </div>

        </div>

      </div>

    </div>

</template>