<template>
  <div>
    <!-- Back button -->
    <NuxtLink to="/">
      <div class="block mt-10 mb-5">
        
        <button class="text-white text-xl ml-10 px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300">&lt; Go Back</button>
        
      </div>
    </NuxtLink>

    <!-- SearchBar -->

    <div class="mt-10">
      <HomePageSearchBar />
    </div>
    

    <!-- Products & category -->

    <div class="mt-10">
      <div class="lg:grid lg:grid-cols-6 md:grid md-grid-cols-3 gap-5 w-full">
        <div class="lg:col-span-2 md:col-span-6 mb-10">
             
            <MiscCategoriesSection />
             
        </div>

        <div class="lg:col-span-4 md:col-span-6 w-full">
             <div class="px-10 w-full">

                <!-- Heading -->

                <div>
                <h2 class="block w-full text-3xl text-white font-bold border-b-white border-b-4 pb-5 mb-5">Products</h2>
                </div>

                <!-- No Results -->  

                <div v-if="products.length == 0 && !CLoadingState" class="w-fit mx-auto p-10 border-2 border-white my-10">
                <h2 class="block text-center text-4xl text-white font-medium  mb-5">No Results Found !</h2>
                </div>
                 <div class="grid grid-flow-row-dense lg:grid-cols-5 lg:gap-y-10 md:grid-cols-3 sm:grid-cols-1 grid-rows-2 gap-3 place-items-center">
                    <div v-for="(product,index) in products" :key="index" class=" bg-white rounded-xl p-2 w-full h-full ">
                        <NuxtLink :to="{name:'products-id',params:{id:product.id}}">

                            <!-- Product Image  -->

                            <!-- <img :src="`http://3.219.163.252:8000${product.image}`" alt="" class="h-350 w-400"> -->
                            <div class="lg:h-[100px] lg:max-h-[100px] lg:min-h-[100px] md:h-[150px] md:max-h-[150px] md:min-h-[150px]">
                              <img :src="product.images[0]" alt="" class=" w-full h-full object-cover">
                            </div>

                            <!-- Product Title -->

                            <h2 class="block text-blue-700 text-lg font-bold my-1 text-ellipsis overflow-hidden w-fit h-8">{{product.name.slice(0,20)}} <span v-if="product.name.length>25">...</span></h2>
                            

                            <!-- Product Brand -->

                            <h2 class="block text-md font-bold">{{product.brand}}</h2>

                            <!-- Product Price -->

                            <h2 v-if="product.onSale" class="block my-1 text-xl text-gray-500 font-light line-through">${{product.normal_price}}</h2>

                            <!-- Sale Price -->

                            <h2 v-if="product.onSale" class="block text-red-700 my-1 text-xl font-bold"> ${{product.sale_price}}</h2>
                            <h2 v-else class="block text-red-700 my-1 text-xl font-bold">${{product.normal_price}}</h2>

                        </NuxtLink>
                    </div>
                </div>
             </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    async asyncData({store}) {
      if(!store.getters['products/categories']){
        await store.dispatch('products/getCategories')
      }
    },

    computed:{
        ...mapGetters({
            products:'products/filterProducts',
            CLoadingState:'products/CLoadingState'
        }),
    },
    methods: {
        goBack() {
            this.$router.back();
        },
    },
}
</script>
