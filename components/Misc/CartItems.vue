<template>
  <div class="text-white">
    <!-- Heading -->

    <div class="block w-full px-5 py-2 border-b-4 border-white">
      <h2 class>
        <span class="block font-bold text-left text-2xl w-3/6"
          >Items</span
        >

        
      </h2>
    </div>

    <!-- Items -->

    <div v-for="item in cartItems" :key="item.id" class="py-5">
      <div class="block w-full px-5 py-2 border-b-2 border-white">
        <h2 class="">
          <!-- Product Details -->

          <span class="inline-block font-light text-left text-md w-3/6">
            <!-- Product Image -->

            <span class="inline-block mr-2 h-14 w-20 top-0">
              <img :src="item.image" alt />
            </span>

            <!-- Product Info -->

            <span class="inline-block">
              <!-- Product Name -->

              <span class="block mb-1 font-medium text-ellipsis overflow-hidden h-5">{{ item.name }}</span>

              <!-- Product Brand -->

              <span class="block mb-1">{{ item.brand }}</span>

              <!-- Product Price -->

              <span class="block font-bold">$ {{ item.price }}</span>
            </span>
          </span>

          <!-- Qty -->

          <span class="inline-block h-fit my-auto font-bold text-left text-lg w-1/6">
            <!-- text box -->

            <input
              id="qty"
              type="number"
              min="1"
              :max="item.inventory"
              class="block mr-1 pl-2 text-black w-14"
              value="1"
              readonly
            />

            <!-- Qty plus or minus buttons -->

            <span class="block my-2 justify-between">
              <!-- plus button -->

              <button
                type="button"
                class="inline-block w-6 h-auto bg-transparent border-2 border-white"
              >
                +
              </button>

              <!-- minus button -->

              <button
                class="inline-block w-6 h-auto bg-transparent border-2 border-white"
              >
                -
              </button>
            </span>
          </span>

          <!-- Subtotal -->

          <span class="inline-block font-bold text-right text-lg w-1/6">
            <!-- Delete Item Button -->

            <span class="block top-0">
              <button class="hover:scale-110 duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 stroke-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </span>

            <!-- Subtotal Price-->

            <span class="block mt-4">$100</span>
          </span>
        </h2>
      </div>
    </div>
  </div>
</template>


<script>

export default {
    name: "MyCart",

    components: {},

    data () {
        return {
            
            cartItems: [
                {
                    id: 1,
                    name: "Product Name",
                    brand: "Product Brand",
                    price: 100,
                    inventory: 5,
                    image: require('~/assets/camaropedia.jpg')
                },
                {
                    id: 2,
                    name: "Product Name",
                    brand: "Product Brand",
                    inventory: 5,
                    price: 200,
                    image: require('~/assets/camaropedia.jpg')
                },
                {
                    id: 3,
                    name: "Product Name",
                    brand: "Product Brand",
                    inventory: 5,
                    price: 300,
                    image: require('~/assets/camaropedia.jpg')
                },
                {
                    id: 4,
                    name: "Product Name",
                    brand: "Product Brand",
                    inventory: 5,
                    price: 400,
                    image: require('~/assets/camaropedia.jpg')
                },
                {
                    id: 5,
                    name: "Product Name",
                    brand: "Product Brand",
                    inventory: 5,
                    price: 500,
                    image: require('~/assets/camaropedia.jpg')
                },
                {
                    id: 6,
                    name: "Product Name",
                    brand: "Product Brand",
                    inventory: 5,
                    price: 600,
                    image: require('~/assets/camaropedia.jpg')
                },
                {
                    id: 7,
                    name: "Product Name",
                    brand: "Product Brand",
                    inventory: 5,
                    price: 700,
                    image: require('~/assets/camaropedia.jpg')
                },
                {
                    id: 8,
                    name: "Product Name",
                    brand: "Product Brand",
                    inventory: 5,
                    price: 800,
                    image: require('~/assets/camaropedia.jpg')
                },
                {
                    id: 9,
                    name: "Product Name",
                    brand: "Product Brand",
                    inventory: 5,
                    price: 900,
                    image: require('~/assets/camaropedia.jpg')
                },
                
            ],
        };
    },

    
}
</script>
