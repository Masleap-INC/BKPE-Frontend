<template>
    <div class="text-white">
         <!-- Heading -->

        <div class="block w-full px-5 py-2 border-b-4 border-white">
            <h2>
                <span class="block font-bold text-left text-2xl w-3/6">Items</span>   
            </h2>
        </div>

        <!-- Items -->

        <div v-for="(item,index) in getCart" :key="item.id" class="py-5">
            <div class="block w-5/6 py-2 border-b-2 border-white">
                <h2 class>

                    <!-- Product Details -->

                    <span class="inline-block font-light text-left text-md w-3/6">
                        <!-- Product Image -->

                        <span class="inline-block mr-2 h-14 w-20 top-0">
                            <img :src="item.product.images[0]" alt />
                        </span>

                        <!-- Product Info -->

                        <span class="inline-block">

                            <!-- Product Name -->

                            <span class="block mb-1 font-medium">{{item.product.name}}</span>

                            <!-- Product Brand -->

                            <span class="block mb-1">{{item.product.part_manufacturer}}</span>

                            <!-- Product Price -->

                            <span class="block font-bold">$ {{item.product.onSale ? item.product.salePrice : item.product.price}}</span>

                        </span>
                    </span>

                    <!-- Qty -->

                    <span class="inline-block font-bold text-left text-lg w-1/6 ">
                        <!-- text box -->

                        <input id="qty" type="number" class="block mr-1 pl-2 text-black w-14" :value="item.quantity" readonly>

                        <!-- Qty plus or minus buttons -->

                        <span class="block my-2 justify-between">

                            <!-- plus button -->

                            <button  type="button" class="inline-block w-6 h-auto bg-transparent border-2 border-white" @click="incCartItmeQty(index)">+</button>

                            <!-- minus button -->

                            <button class="inline-block w-6 h-auto bg-transparent border-2 border-white" @click="decCartItmeQty(index)">-</button>
                        </span>
                    </span>       

                    <!-- Subtotal --> 

                    <span class="inline-block font-bold text-right text-lg w-1/6">
                        
                        <!-- Delete Item Button -->

                        <span class="block top-0">
                            <button class=" hover:scale-110 duration-300" @click="remCartItem(index)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </span>

                        <!-- Subtotal Price-->

                        <!-- <span class="block mt-4">$100</span> -->

                    </span>
                </h2>
            </div>
        </div>
    </div>
</template>






<script>
import {mapGetters} from 'vuex'
export default {
    
    name: "MyCart",
    data () {
        return {
            cartItems: [],
        };
    },

    computed:{
        ...mapGetters({
        getCart:'cart/getCart',
    }),
    
  },

    mounted(){  
        this.$store.dispatch("cart/fetchCartLocalstorage");
        // this.cartItems = [...this.getCart]
    },

    methods:{
    incCartItmeQty(index){
        if(this.getCart[index].product.quantity > this.getCart[index].quantity){
            this.$store.dispatch("cart/incItemQty",index)
        }
    },
    decCartItmeQty(index){
        if(this.getCart[index].quantity > 1){
            this.$store.dispatch("cart/decItemQty",index)
        }
    },
    remCartItem(index){
      this.$store.dispatch("cart/remCartItem",index)
    },

  }

    
}

</script>