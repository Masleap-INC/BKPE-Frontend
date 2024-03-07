<template>
    <LoadingData v-if="LoadingState" /> 
    <div v-else>

        
        <!-- Back button -->
        <NuxtLink to="/">
        <div class="block mt-10">
            <button class="text-white text-xl ml-5 px-3 py-2 border-2 border-white hover:-translate-x-3 duration-300">&lt; Go Back</button>
        </div>
        </NuxtLink>

        <!-- Page Heading -->

        <div class="border-b-2 border-white w-5/6 mx-auto pt-10">
            <h2 class="text-5xl text-white text-center font-semibold py-5 w-fit mx-auto">
                PARTS ON SALE
            </h2>
        </div>

        <!-- Search Bar -->

        <div class="mt-10">
            <SearchBar /> 
        </div>


        <!-- All Sale Parts Section -->

        <div>
            <div>
                <div class="">
                    <div class="my-10 w-5/6 mx-auto">
                        <ProductGrid :products="saleProducts" />
                    </div>
                </div>
            </div>
        </div>


    </div>

</template>

<script>


// import {mapGetters} from 'vuex'
export default{
    data(){
        return {
            saleProducts:[],
            LoadingState:true
        }
        
    },
    async fetch() {
      const data = await this.$axios.$get('/products/?onSale=true')
      this.saleProducts = data.results
      this.LoadingState=false
      
    },


}
</script>